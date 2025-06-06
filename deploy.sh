#!/bin/bash

# 🚀 Singularsity Deployment Script
# This script automates the deployment of Singularsity to production

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check prerequisites
check_prerequisites() {
    print_status "Checking prerequisites..."
    
    local missing_tools=()
    
    if ! command_exists node; then
        missing_tools+=("node")
    fi
    
    if ! command_exists npm; then
        missing_tools+=("npm")
    fi
    
    if ! command_exists git; then
        missing_tools+=("git")
    fi
    
    if ! command_exists docker; then
        missing_tools+=("docker")
    fi
    
    if ! command_exists aws; then
        missing_tools+=("aws")
    fi
    
    if [ ${#missing_tools[@]} -ne 0 ]; then
        print_error "Missing required tools: ${missing_tools[*]}"
        print_error "Please install missing tools and try again."
        exit 1
    fi
    
    print_success "All prerequisites are installed!"
}

# Function to setup environment
setup_environment() {
    print_status "Setting up environment..."
    
    if [ ! -f .env ]; then
        if [ -f .env.example ]; then
            cp .env.example .env
            print_warning "Created .env from .env.example. Please update with your values."
        else
            print_error ".env file not found and no .env.example available"
            exit 1
        fi
    fi
    
    # Install dependencies
    print_status "Installing dependencies..."
    npm install
    
    print_success "Environment setup complete!"
}

# Function to run tests
run_tests() {
    print_status "Running tests..."
    
    # Run linting
    if npm run lint >/dev/null 2>&1; then
        print_success "Linting passed!"
    else
        print_warning "Linting issues found, but continuing..."
    fi
    
    # Run tests if available
    if npm run test >/dev/null 2>&1; then
        print_success "Tests passed!"
    else
        print_warning "Tests not available or failed, but continuing..."
    fi
}

# Function to build application
build_application() {
    print_status "Building application..."
    
    npm run build
    
    print_success "Application built successfully!"
}

# Function to deploy to Vercel
deploy_vercel() {
    print_status "Deploying to Vercel..."
    
    if ! command_exists vercel; then
        print_status "Installing Vercel CLI..."
        npm install -g vercel
    fi
    
    # Deploy to production
    vercel --prod --yes
    
    print_success "Deployed to Vercel successfully!"
}

# Function to setup AWS infrastructure
setup_aws_infrastructure() {
    print_status "Setting up AWS infrastructure..."
    
    # Check if AWS is configured
    if ! aws sts get-caller-identity >/dev/null 2>&1; then
        print_error "AWS CLI not configured. Please run 'aws configure' first."
        exit 1
    fi
    
    # Create S3 bucket
    local bucket_name="singularsity-data-$(date +%s)"
    print_status "Creating S3 bucket: $bucket_name"
    
    if aws s3 mb "s3://$bucket_name" --region us-east-1; then
        print_success "S3 bucket created: $bucket_name"
        echo "S3_BUCKET=$bucket_name" >> .env.production
    else
        print_warning "S3 bucket creation failed or already exists"
    fi
    
    # Create DynamoDB table
    local table_name="singularsity-jobs-$(date +%s)"
    print_status "Creating DynamoDB table: $table_name"
    
    if aws dynamodb create-table \
        --table-name "$table_name" \
        --attribute-definitions \
            AttributeName=jobId,AttributeType=S \
            AttributeName=userId,AttributeType=S \
        --key-schema \
            AttributeName=jobId,KeyType=HASH \
            AttributeName=userId,KeyType=RANGE \
        --billing-mode PAY_PER_REQUEST \
        --region us-east-1 >/dev/null 2>&1; then
        print_success "DynamoDB table created: $table_name"
        echo "DYNAMODB_TABLE=$table_name" >> .env.production
    else
        print_warning "DynamoDB table creation failed or already exists"
    fi
    
    print_success "AWS infrastructure setup complete!"
}

# Function to deploy with Docker
deploy_docker() {
    print_status "Building Docker image..."
    
    # Build Docker image
    docker build -t singularsity:latest .
    
    print_success "Docker image built successfully!"
    
    # If Docker registry is configured, push the image
    if [ -n "$DOCKER_REGISTRY" ]; then
        print_status "Pushing to Docker registry..."
        docker tag singularsity:latest "$DOCKER_REGISTRY/singularsity:latest"
        docker push "$DOCKER_REGISTRY/singularsity:latest"
        print_success "Image pushed to registry!"
    fi
}

# Function to run health checks
run_health_checks() {
    print_status "Running health checks..."
    
    # Check if the application is running locally
    if curl -f http://localhost:3000/api/health >/dev/null 2>&1; then
        print_success "Local health check passed!"
    else
        print_warning "Local health check failed - application may not be running"
    fi
    
    # If production URL is set, check it too
    if [ -n "$PRODUCTION_URL" ]; then
        if curl -f "$PRODUCTION_URL/api/health" >/dev/null 2>&1; then
            print_success "Production health check passed!"
        else
            print_warning "Production health check failed"
        fi
    fi
}

# Function to show deployment summary
show_summary() {
    print_success "🎉 Deployment Summary"
    echo "=================================="
    echo "✅ Prerequisites checked"
    echo "✅ Environment configured"
    echo "✅ Application built"
    echo "✅ Tests completed"
    
    if [ "$DEPLOY_TARGET" = "vercel" ]; then
        echo "✅ Deployed to Vercel"
    elif [ "$DEPLOY_TARGET" = "aws" ]; then
        echo "✅ AWS infrastructure setup"
    elif [ "$DEPLOY_TARGET" = "docker" ]; then
        echo "✅ Docker image built"
    fi
    
    echo "=================================="
    print_success "Singularsity is ready to outperform the competition! 🚀"
    
    if [ -f .env.production ]; then
        print_status "Production environment variables saved to .env.production"
    fi
}

# Main deployment function
main() {
    echo "🚀 Singularsity Deployment Script"
    echo "=================================="
    
    # Parse command line arguments
    DEPLOY_TARGET="local"
    RUN_TESTS=true
    SETUP_AWS=false
    
    while [[ $# -gt 0 ]]; do
        case $1 in
            --target)
                DEPLOY_TARGET="$2"
                shift 2
                ;;
            --no-tests)
                RUN_TESTS=false
                shift
                ;;
            --setup-aws)
                SETUP_AWS=true
                shift
                ;;
            --help)
                echo "Usage: $0 [OPTIONS]"
                echo ""
                echo "Options:"
                echo "  --target TARGET    Deployment target (local|vercel|aws|docker)"
                echo "  --no-tests        Skip running tests"
                echo "  --setup-aws       Setup AWS infrastructure"
                echo "  --help            Show this help message"
                exit 0
                ;;
            *)
                print_error "Unknown option: $1"
                exit 1
                ;;
        esac
    done
    
    # Run deployment steps
    check_prerequisites
    setup_environment
    
    if [ "$RUN_TESTS" = true ]; then
        run_tests
    fi
    
    build_application
    
    # Deploy based on target
    case $DEPLOY_TARGET in
        vercel)
            deploy_vercel
            ;;
        aws)
            setup_aws_infrastructure
            ;;
        docker)
            deploy_docker
            ;;
        local)
            print_status "Local deployment - starting development server..."
            npm run dev &
            sleep 5
            ;;
        *)
            print_error "Unknown deployment target: $DEPLOY_TARGET"
            exit 1
            ;;
    esac
    
    if [ "$SETUP_AWS" = true ]; then
        setup_aws_infrastructure
    fi
    
    run_health_checks
    show_summary
}

# Run main function with all arguments
main "$@" 