#!/bin/bash

set -e

echo "🧹 Cleaning previous deploy build..."
rm -rf deploy
mkdir -p deploy/frontend
mkdir -p deploy/server
mkdir -p deploy/cms

echo "🛠 Building frontend..."
cd frontend
npm install
npm run build
cd ..

echo "📦 Copying frontend build..."
cp -r frontend/dist/* deploy/frontend/

echo "🔧 Installing + building Strapi admin..."
cd cms
npm install
npm run build

# 🧹 Clean CMS junk before copying
rm -rf node_modules .cache .tmp
cd ..

echo "🧰 Installing Express server deps..."
cd server
npm install

# 🧹 Clean server node_modules before copying
rm -rf node_modules
cd ..

echo "🚛 Copying clean server and CMS..."
cp -vr ./server/. ./deploy/server/
cp -vr ./cms/. ./deploy/cms/

echo "📂 Removing config files from bundle..."
rm -f ./deploy/server/.env
rm -f ./deploy/cms/.env

echo "✅ Deploy bundle is clean, built, and in /deploy"

exit 0

echo "🚀 Syncing deploy package to server..."
rsync -avz ./deploy/ user@yourserver:/var/www/yourproject

echo "🔁 Restarting PM2 services on server..."
ssh user@yourserver 'pm2 restart all && echo "✅ Remote services restarted."'
