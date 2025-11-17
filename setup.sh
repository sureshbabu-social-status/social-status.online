#!/bin/bash

# Quick Start Installation Script for social-status.online
# This script sets up the project and gets you ready for development

set -e  # Exit on error

echo "🎉 Welcome to Social Status Online Setup!"
echo "========================================"
echo ""

# Check Node.js version
echo "📋 Checking prerequisites..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first:"
    echo "   https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "⚠️  Node.js version must be 18 or higher. You have: $(node -v)"
    echo "   Please upgrade Node.js: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found!"
    echo "   Please run this script from the social-status.online directory"
    exit 1
fi

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Setup environment file
echo ""
echo "⚙️  Setting up environment configuration..."
if [ ! -f ".env" ]; then
    cp .env.example .env
    echo "✅ Created .env file from .env.example"
    echo "⚠️  Please edit .env and update your settings!"
else
    echo "ℹ️  .env file already exists (skipping)"
fi

# Create .gitignore if it doesn't exist
if [ ! -f ".gitignore" ]; then
    echo "Creating .gitignore..."
    cat > .gitignore << 'EOF'
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Production
dist/
build/

# Misc
.DS_Store
*.log

# Environment
.env
.env.local
.env.production

# Firebase
.firebase/
.firebaserc

# Editor
.vscode/
.idea/
EOF
    echo "✅ Created .gitignore"
fi

echo ""
echo "🎨 Project structure created successfully!"
echo ""
echo "========================================"
echo "✅ Setup Complete!"
echo "========================================"
echo ""
echo "📚 Next Steps:"
echo ""
echo "1. Edit your environment file:"
echo "   nano .env"
echo ""
echo "2. Add profiles to the directory:"
echo "   Edit: constants.tsx"
echo ""
echo "3. Start the development server:"
echo "   npm run dev"
echo ""
echo "4. Build for production:"
echo "   npm run build"
echo ""
echo "5. Deploy to Firebase:"
echo "   npm run deploy"
echo ""
echo "📖 Documentation:"
echo "   - Quick Start: README.md"
echo "   - Detailed Guide: SETUP-GUIDE.md"
echo "   - Profile Template: PROFILE_TEMPLATE_FORM.md"
echo ""
echo "🚀 Happy building!"
echo ""
