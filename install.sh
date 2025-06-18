#!/bin/bash

set -e  # Exit immediately if any command exits with a non-zero status

echo "📦 Installing dev dependencies..."

# Frontend
if [ -f frontend/package.json ]; then
  echo "➡️ Installing frontend dependencies..."
  cd frontend
  npm install
  cd ..
else
  echo "⚠️ frontend/package.json not found; skipping frontend"
fi

# Strapi CMS
if [ -f cms/package.json ]; then
  echo "➡️ Installing Strapi CMS dependencies..."
  cd cms
  npm install
  cd ..
else
  echo "⚠️ cms/package.json not found; skipping CMS"
fi

# Express Server
if [ -f server/package.json ]; then
  echo "➡️ Installing server dependencies..."
  cd server
  npm install
  cd ..
else
  echo "⚠️ server/package.json not found; skipping server"
fi

echo "✅ All development dependencies installed."
