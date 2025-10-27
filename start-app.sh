#!/bin/bash

echo "🚀 Starting SEO Analysis App..."
echo "📁 Current directory: $(pwd)"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

echo "🔧 Starting development server..."
echo "🌐 The app will be available at:"
echo "   • http://localhost:5173"
echo "   • http://127.0.0.1:5173"

# Start the development server
npm run dev
