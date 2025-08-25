#!/bin/bash

# Vercel 微前端自动部署脚本
# 用于一键部署主应用和所有子应用到Vercel

set -e

echo "🚀 开始部署微前端应用到Vercel..."

# 检查是否安装了Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI 未安装，正在安装..."
    npm install -g vercel@latest
    echo "✅ Vercel CLI 安装完成"
fi

# 检查是否已登录Vercel
echo "🔐 检查Vercel登录状态..."
if ! vercel whoami &> /dev/null; then
    echo "请先登录Vercel:"
    vercel login
fi

echo "✅ Vercel登录状态正常"

# 部署用户管理子应用
echo "📦 部署用户管理子应用..."
cd sub-apps/user-management
echo "当前目录: $(pwd)"
echo "开始构建和部署..."
vercel --prod --yes --name=qiankun-user-management
USER_MANAGEMENT_URL=$(vercel ls qiankun-user-management 2>/dev/null | grep "qiankun-user-management" | head -n1 | awk '{print $2}')
echo "✅ 用户管理子应用部署完成: https://$USER_MANAGEMENT_URL"
cd ../..

# 部署系统管理子应用
echo "📦 部署系统管理子应用..."
cd sub-apps/system-management
echo "当前目录: $(pwd)"
echo "开始构建和部署..."
vercel --prod --yes --name=qiankun-system-management
SYSTEM_MANAGEMENT_URL=$(vercel ls qiankun-system-management 2>/dev/null | grep "qiankun-system-management" | head -n1 | awk '{print $2}')
echo "✅ 系统管理子应用部署完成: https://$SYSTEM_MANAGEMENT_URL"
cd ../..

# 部署主应用
echo "📦 部署主应用..."
cd main-app
echo "当前目录: $(pwd)"

# 设置环境变量
echo "🔧 设置主应用环境变量..."
if [ ! -z "$USER_MANAGEMENT_URL" ]; then
    vercel env add VITE_USER_MANAGEMENT_URL "https://$USER_MANAGEMENT_URL" production --yes || true
fi
if [ ! -z "$SYSTEM_MANAGEMENT_URL" ]; then
    vercel env add VITE_SYSTEM_MANAGEMENT_URL "https://$SYSTEM_MANAGEMENT_URL" production --yes || true
fi

echo "开始构建和部署主应用..."
vercel --prod --yes --name=qiankun-main-app
MAIN_APP_URL=$(vercel ls qiankun-main-app 2>/dev/null | grep "qiankun-main-app" | head -n1 | awk '{print $2}')
echo "✅ 主应用部署完成: https://$MAIN_APP_URL"
cd ..

echo ""
echo "🎉 所有应用部署完成！"
echo ""
echo "📍 部署结果:"
echo "   主应用: https://$MAIN_APP_URL"
echo "   用户管理: https://$USER_MANAGEMENT_URL"
echo "   系统管理: https://$SYSTEM_MANAGEMENT_URL"
echo ""
echo "🔗 请访问主应用URL进行测试"
echo ""
echo "💡 提示："
echo "   - 首次部署可能需要等待几分钟才能完全生效"
echo "   - 可以通过Vercel Dashboard监控部署状态"
echo "   - 后续git push会自动触发重新部署"