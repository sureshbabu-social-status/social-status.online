#!/bin/bash

# Deploy script for social-status.online
# This script builds and deploys the site to Firebase Hosting

set -e  # Exit on error

echo "🚀 Starting deployment for social-status.online..."

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI not found. Please install it first:"
    echo "   npm install -g firebase-tools"
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed! dist directory not found."
    exit 1
fi

echo "✅ Build successful!"

# Deploy to Firebase
echo "🌐 Deploying to Firebase Hosting..."

if [ -z "$1" ]; then
    # No message provided, deploy without message
    firebase deploy --only hosting
else
    # Deploy with custom message
    firebase deploy --only hosting -m "$1"
fi

echo "✅ Deployment complete!"
echo "🎉 Your site is live at: https://social-status.online"
