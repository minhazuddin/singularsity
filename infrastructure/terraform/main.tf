terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

# Variables
variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "production"
}

variable "project_name" {
  description = "Project name"
  type        = string
  default     = "singularsity"
}

# S3 Bucket for Synthetic Data Storage
resource "aws_s3_bucket" "synthetic_data" {
  bucket = "${var.project_name}-synthetic-data-${var.environment}"
}

resource "aws_s3_bucket_versioning" "synthetic_data" {
  bucket = aws_s3_bucket.synthetic_data.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_encryption" "synthetic_data" {
  bucket = aws_s3_bucket.synthetic_data.id

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }
}

resource "aws_s3_bucket_lifecycle_configuration" "synthetic_data" {
  bucket = aws_s3_bucket.synthetic_data.id

  rule {
    id     = "cleanup_old_data"
    status = "Enabled"

    expiration {
      days = 30
    }

    noncurrent_version_expiration {
      noncurrent_days = 7
    }
  }
}

# DynamoDB Table for Job Metadata
resource "aws_dynamodb_table" "synthetic_data_jobs" {
  name           = "${var.project_name}-synthetic-data-jobs-${var.environment}"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "jobId"
  range_key      = "userId"

  attribute {
    name = "jobId"
    type = "S"
  }

  attribute {
    name = "userId"
    type = "S"
  }

  attribute {
    name = "createdAt"
    type = "S"
  }

  global_secondary_index {
    name     = "UserIdIndex"
    hash_key = "userId"
    range_key = "createdAt"
    projection_type = "ALL"
  }

  ttl {
    attribute_name = "ttl"
    enabled        = true
  }

  tags = {
    Name        = "${var.project_name}-synthetic-data-jobs"
    Environment = var.environment
  }
}

# IAM Role for SageMaker
resource "aws_iam_role" "sagemaker_execution_role" {
  name = "${var.project_name}-sagemaker-execution-role-${var.environment}"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "sagemaker.amazonaws.com"
        }
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "sagemaker_execution_role_policy" {
  role       = aws_iam_role.sagemaker_execution_role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonSageMakerFullAccess"
}

# SageMaker Model for TabGAN
resource "aws_sagemaker_model" "tabgan_model" {
  name               = "${var.project_name}-tabgan-model-${var.environment}"
  execution_role_arn = aws_iam_role.sagemaker_execution_role.arn

  primary_container {
    image          = "763104351884.dkr.ecr.us-east-1.amazonaws.com/pytorch-inference:1.12.0-gpu-py38-cu113-ubuntu20.04-sagemaker"
    model_data_url = "s3://${aws_s3_bucket.synthetic_data.bucket}/models/tabgan/model.tar.gz"
    environment = {
      SAGEMAKER_PROGRAM = "inference.py"
      SAGEMAKER_SUBMIT_DIRECTORY = "/opt/ml/code"
    }
  }
}

# SageMaker Endpoint Configuration for TabGAN
resource "aws_sagemaker_endpoint_configuration" "tabgan_config" {
  name = "${var.project_name}-tabgan-config-${var.environment}"

  production_variants {
    variant_name           = "primary"
    model_name            = aws_sagemaker_model.tabgan_model.name
    initial_instance_count = 1
    instance_type         = "ml.m5.large"
  }
}

# SageMaker Endpoint for TabGAN
resource "aws_sagemaker_endpoint" "tabgan_endpoint" {
  name                 = "${var.project_name}-tabgan-endpoint-${var.environment}"
  endpoint_config_name = aws_sagemaker_endpoint_configuration.tabgan_config.name
}

# CloudWatch Log Group
resource "aws_cloudwatch_log_group" "synthetic_data_logs" {
  name              = "/aws/lambda/${var.project_name}-synthetic-data-${var.environment}"
  retention_in_days = 14
}

# Lambda IAM Role
resource "aws_iam_role" "lambda_execution_role" {
  name = "${var.project_name}-lambda-execution-role-${var.environment}"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })
}

resource "aws_iam_role_policy" "lambda_policy" {
  name = "${var.project_name}-lambda-policy-${var.environment}"
  role = aws_iam_role.lambda_execution_role.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ]
        Resource = "arn:aws:logs:*:*:*"
      },
      {
        Effect = "Allow"
        Action = [
          "s3:GetObject",
          "s3:PutObject",
          "s3:DeleteObject"
        ]
        Resource = "${aws_s3_bucket.synthetic_data.arn}/*"
      },
      {
        Effect = "Allow"
        Action = [
          "dynamodb:PutItem",
          "dynamodb:GetItem",
          "dynamodb:UpdateItem",
          "dynamodb:DeleteItem",
          "dynamodb:Query",
          "dynamodb:Scan"
        ]
        Resource = aws_dynamodb_table.synthetic_data_jobs.arn
      },
      {
        Effect = "Allow"
        Action = [
          "sagemaker:InvokeEndpoint"
        ]
        Resource = "*"
      }
    ]
  })
}

# ECR Repository for ML Models
resource "aws_ecr_repository" "synthetic_data_models" {
  name                 = "${var.project_name}/synthetic-data-models"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}

# CloudFront Distribution for File Downloads
resource "aws_cloudfront_distribution" "synthetic_data_cdn" {
  origin {
    domain_name = aws_s3_bucket.synthetic_data.bucket_regional_domain_name
    origin_id   = "S3-${aws_s3_bucket.synthetic_data.bucket}"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.synthetic_data_oai.cloudfront_access_identity_path
    }
  }

  enabled = true

  default_cache_behavior {
    allowed_methods        = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "S3-${aws_s3_bucket.synthetic_data.bucket}"
    compress               = true
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    min_ttl     = 0
    default_ttl = 3600
    max_ttl     = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

resource "aws_cloudfront_origin_access_identity" "synthetic_data_oai" {
  comment = "OAI for ${var.project_name} synthetic data bucket"
}

# API Gateway for External Integrations
resource "aws_api_gateway_rest_api" "synthetic_data_api" {
  name        = "${var.project_name}-synthetic-data-api-${var.environment}"
  description = "API for synthetic data generation"

  endpoint_configuration {
    types = ["REGIONAL"]
  }
}

# Outputs
output "s3_bucket_name" {
  value = aws_s3_bucket.synthetic_data.bucket
}

output "dynamodb_table_name" {
  value = aws_dynamodb_table.synthetic_data_jobs.name
}

output "sagemaker_endpoint_name" {
  value = aws_sagemaker_endpoint.tabgan_endpoint.name
}

output "cloudfront_domain" {
  value = aws_cloudfront_distribution.synthetic_data_cdn.domain_name
}

output "ecr_repository_url" {
  value = aws_ecr_repository.synthetic_data_models.repository_url
} 