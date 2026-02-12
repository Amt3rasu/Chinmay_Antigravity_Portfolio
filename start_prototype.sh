#!/bin/bash
echo "🚀 Starting Monitors Prototype..."
cd monitors-prototype
echo "📦 Installing dependencies..."
npm install
echo "✅ Dependencies installed!"
echo "✨ Starting server on port 3001..."
npm run dev -- --port 3001
