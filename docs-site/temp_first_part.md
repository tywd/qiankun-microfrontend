# GitHub Actions 部署指南

GitHub Actions 是 GitHub 提供的持续集成和持续部署 (CI/CD) 服务，可以自动化构建、测试和部署流程。本指南将详细介绍如何使用 GitHub Actions 自动部署微前端应用。

## 🚀 快速开始

### 1. 配置 GitHub 仓库

确保你的项目已经推送到 GitHub 仓库。如果尚未创建仓库，可以按照以下步骤操作：

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交代码
git commit -m "初始化项目"

# 连接GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名称.git

# 推送代码
git push -u origin main
```

### 2. 配置 GitHub Secrets

在 GitHub 仓库中添加必要的 Secrets：

1. 打开你的 GitHub 仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中选择 "Secrets and variables" > "Actions"
4. 点击 "New repository secret" 添加以下 Secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID_MAIN`: 主应用项目 ID
   - `VERCEL_PROJECT_ID_USER`: 用户管理子应用项目 ID
   - `VERCEL_PROJECT_ID_SYSTEM`: 系统管理子应用项目 ID
   - `VERCEL_PROJECT_ID_DOCS`: 文档站点项目 ID

### 3. 创建工作流文件

在你的项目根目录下创建 `.github/workflows` 目录，并添加工作流文件。

#### 微前端应用部署工作流 (deploy-vercel-auto.yml)：

```yaml
name: Auto Deploy to Vercel

on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]

env:
  # Vercel配置
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
  # 项目ID
  VERCEL_PROJECT_ID_MAIN: ${{ secrets.VERCEL_PROJECT_ID_MAIN }}
  VERCEL_PROJECT_ID_USER: ${{ secrets.VERCEL_PROJECT_ID_USER }}
  VERCEL_PROJECT_ID_SYSTEM: ${{ secrets.VERCEL_PROJECT_ID_SYSTEM }}
  # Node.js配置
  NODE_VERSION: '18'

jobs:
  # 检测变更的应用
  detect-changes:
    runs-on: ubuntu-latest
    outputs:
      main-app-changed: ${{ steps.changes.outputs.main-app }}
      user-management-changed: ${{ steps.changes.outputs.user-management }}
      system-management-changed: ${{ steps.changes.outputs.system-management }}
      shared-changed: ${{ steps.changes.outputs.shared }}
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
          
      - name: Detect changes
        id: changes
        uses: dorny/paths-filter@v2
        with:
          filters: |
            main-app:
              - 'main-app/**'
            user-management:
              - 'sub-apps/user-management/**'
            system-management:
              - 'sub-apps/system-management/**'
            shared:
              - 'shared/**'
              - 'package.json'
              - 'pnpm-workspace.yaml'

  # 部署子应用 - 用户管理
  deploy-user-management:
    runs-on: ubuntu-latest
    needs: detect-changes
    if: needs.detect-changes.outputs.user-management-changed == 'true' || needs.detect-changes.outputs.shared-changed == 'true' || github.event_name == 'push'
    outputs:
      preview-url: ${{ steps.deploy.outputs.url }}
      production-url: ${{ steps.deploy.outputs.production-url }}
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          
      - name: Install Vercel CLI
        run: npm install --global vercel@latest
        
      - name: Deploy to Vercel
        id: deploy
        env:
          VERCEL_PROJECT_ID: ${{ env.VERCEL_PROJECT_ID_USER }}
          VERCEL_ORG_ID: ${{ env.VERCEL_ORG_ID }}
        shell: bash
        run: |
          set -e
          
          # 进入子应用目录
          cd sub-apps/user-management
          
          # 清除可能存在的.vercel配置
          rm -rf .vercel || true
          
          # 设置环境变量
          vercel env add NODE_ENV production production --token="${{ env.VERCEL_TOKEN }}" || true
          vercel env add VITE_APP_BASE_URL /user production --token="${{ env.VERCEL_TOKEN }}" || true
          
          if [[ "${{ github.event_name }}" == "push" && "${{ github.ref }}" == "refs/heads/main" ]]; then
            # 生产部署
            echo "🚀 Deploying to production..."
            URL=$(vercel . --prod --token="${{ env.VERCEL_TOKEN }}" --force)
            echo "production-url=${URL}" >> "$GITHUB_OUTPUT"
            echo "url=${URL}" >> "$GITHUB_OUTPUT"
            echo "✅ Production deployment: ${URL}"
          else
            # 预览部署
            echo "🔄 Deploying preview..."
            URL=$(vercel . --token="${{ env.VERCEL_TOKEN }}" --force)
            echo "url=${URL}" >> "$GITHUB_OUTPUT"
            echo "✅ Preview deployment: ${URL}"
          fi

  # 部署子应用 - 系统管理
  deploy-system-management:
    runs-on: ubuntu-latest
    needs: detect-changes
    if: needs.detect-changes.outputs.system-management-changed == 'true' || needs.detect-changes.outputs.shared-changed == 'true' || github.event_name == 'push'
    outputs:
      preview-url: ${{ steps.deploy.outputs.url }}
      production-url: ${{ steps.deploy.outputs.production-url }}
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          
      - name: Install Vercel CLI
        run: npm install --global vercel@latest
        
      - name: Deploy to Vercel
        id: deploy
        env:
          VERCEL_PROJECT_ID: ${{ env.VERCEL_PROJECT_ID_SYSTEM }}
          VERCEL_ORG_ID: ${{ env.VERCEL_ORG_ID }}
        shell: bash
        run: |
          set -e
          
          # 进入子应用目录
          cd sub-apps/system-management
          
          # 清除可能存在的.vercel配置
          rm -rf .vercel || true
          
          # 设置环境变量
          vercel env add NODE_ENV production production --token="${{ env.VERCEL_TOKEN }}" || true
          vercel env add VITE_APP_BASE_URL /system production --token="${{ env.VERCEL_TOKEN }}" || true
          
          if [[ "${{ github.event_name }}" == "push" && "${{ github.ref }}" == "refs/heads/main" ]]; then
            # 生产部署
            echo "🚀 Deploying to production..."
            URL=$(vercel . --prod --token="${{ env.VERCEL_TOKEN }}" --force)
            echo "production-url=${URL}" >> "$GITHUB_OUTPUT"
            echo "url=${URL}" >> "$GITHUB_OUTPUT"
            echo "✅ Production deployment: ${URL}"
          else
