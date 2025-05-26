#!/bin/bash

echo "🧹 Clearing Next.js cache..."

# Remove Next.js build cache
rm -rf .next

# Remove node modules cache
rm -rf node_modules/.cache

# Remove npm cache (optional)
# npm cache clean --force

echo "✅ Cache cleared successfully!"
echo "💡 Run 'npm run dev' to start fresh development server" 