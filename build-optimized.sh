#!/bin/bash

echo "🚀 Starting optimized build process..."

# Clean previous build
rm -rf dist

# Build with Vite
echo "📦 Building with Vite..."
npm run build

# Check if build succeeded
if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

# Compress assets
echo "🗜️  Compressing assets..."
find dist -type f \( -name "*.js" -o -name "*.css" -o -name "*.html" \) | while read file; do
    gzip -k -9 "$file"
    brotli -Z "$file"
done

# Calculate bundle sizes
echo "📊 Bundle analysis:"
du -sh dist/assets/*.js | sort -hr | head -5
echo ""
du -sh dist/assets/*.css | sort -hr | head -3

echo "✅ Build completed successfully!"
echo "📁 Output directory: dist/"
echo "🌐 Run 'npm run preview' to test the build"
