#!/bin/bash

# VitePress 手动部署脚本
# 使用方式: bash deploy-docs-manual.sh

set -e

echo "🔄 开始手动部署 VitePress 文档..."

# 构建文档
echo "📦 构建文档站点..."
cd docs-site
npm run docs:build

# 确保有.nojekyll文件
touch .vitepress/dist/.nojekyll

# 创建临时分支
echo "📋 准备部署文件..."
cd ..
rm -rf deploy-temp
mkdir deploy-temp
cp -r docs-site/.vitepress/dist/* deploy-temp/
cd deploy-temp
git init
git add .
git config user.name "GitHub Actions"
git config user.email "github-actions@users.noreply.github.com"
git commit -m "docs: 手动部署 VitePress 文档站点"

# 推送到 gh-pages 分支
echo "🚀 推送到 gh-pages 分支..."
git push -f https://github.com/tywd/qiankun-microfrontend.git master:gh-pages

# 清理
cd ..
rm -rf deploy-temp

echo "✅ 部署完成！文档将在 https://tywd.github.io/qiankun-microfrontend/ 可用"