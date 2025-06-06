#!/bin/bash

# 🚀 Singularsity Quick Start Script
# Get Singularsity running in 5 minutes!

set -e

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}🚀 Singularsity Quick Start${NC}"
echo "=================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed${NC}"
    echo "Please install Node.js 18+ from https://nodejs.org"
    exit 1
fi

echo -e "${GREEN}✅ Node.js found: $(node --version)${NC}"

# Install dependencies
echo -e "${BLUE}📦 Installing dependencies...${NC}"
npm install

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo -e "${BLUE}⚙️ Creating environment file...${NC}"
    cat > .env << 'EOF'
# Singularsity Environment Configuration
NODE_ENV=development
NEXTAUTH_SECRET=singularsity-dev-secret-change-in-production
NEXTAUTH_URL=http://localhost:3000

# Local Database (optional)
# DATABASE_URL=postgresql://postgres:password@localhost:5432/singularsity

# AWS Configuration (optional)
# AWS_REGION=us-east-1
# AWS_ACCESS_KEY_ID=your-aws-access-key
# AWS_SECRET_ACCESS_KEY=your-aws-secret-key
# S3_BUCKET=singularsity-data-dev
# DYNAMODB_TABLE=singularsity-jobs-dev

# External APIs (optional)
# OPENAI_API_KEY=sk-your-openai-key
EOF
    echo -e "${GREEN}✅ Created .env file${NC}"
else
    echo -e "${YELLOW}⚠️ .env file already exists${NC}"
fi

# Build the application
echo -e "${BLUE}🔨 Building application...${NC}"
npm run build

echo ""
echo -e "${GREEN}🎉 Singularsity is ready!${NC}"
echo "=================================="
echo ""
echo -e "${BLUE}🚀 To start the development server:${NC}"
echo "   npm run dev"
echo ""
echo -e "${BLUE}🌐 To deploy to Vercel:${NC}"
echo "   npm install -g vercel"
echo "   vercel --prod"
echo ""
echo -e "${BLUE}☁️ To deploy to AWS:${NC}"
echo "   ./deploy.sh --target aws --setup-aws"
echo ""
echo -e "${BLUE}📚 For detailed instructions:${NC}"
echo "   See README.md and DEPLOYMENT_GUIDE.md"
echo ""
echo -e "${GREEN}Ready to outperform Gretel AI and Mostly AI! 🏆${NC}" 