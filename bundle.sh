#!/bin/bash
echo "🛠 Building frontend..."
npm run build

echo "📦 Preparing deploy folder..."
rm -rf deploy
mkdir -p deploy/frontend
mkdir -p deploy/server
cp -r dist/* deploy/frontend/
cp -r server deploy/server/
cp -r cms deploy/cms/

echo "✅ Build package ready in /deploy"