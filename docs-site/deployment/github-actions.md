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
            # 预览部署
            echo "🔄 Deploying preview..."
            URL=$(vercel . --token="${{ env.VERCEL_TOKEN }}" --force)
            echo "url=${URL}" >> "$GITHUB_OUTPUT"
            echo "✅ Preview deployment: ${URL}"
          fi

  # 部署主应用
  deploy-main-app:
    runs-on: ubuntu-latest
    needs: [detect-changes, deploy-user-management, deploy-system-management]
    # 主应用总是需要部署，因为它需要知道子应用的最新URL
    if: always() && !failure() && !cancelled()
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
          VERCEL_PROJECT_ID: ${{ env.VERCEL_PROJECT_ID_MAIN }}
          VERCEL_ORG_ID: ${{ env.VERCEL_ORG_ID }}
        shell: bash
        run: |
          set -e
          
          # 进入主应用目录
          cd main-app
          
          # 清除可能存在的.vercel配置
          rm -rf .vercel || true
          
          # 使用固定的生产环境URL
          USER_URL="https://qiankun-user-management.vercel.app"
          SYSTEM_URL="https://qiankun-system-management.vercel.app"
          
          echo "🔧 Setting fixed production URLs..."
          echo "📍 User Management URL: $USER_URL"
          echo "📍 System Management URL: $SYSTEM_URL"
          
          vercel env add VITE_USER_MANAGEMENT_URL "$USER_URL" production --token="${{ env.VERCEL_TOKEN }}" || true
          vercel env add VITE_SYSTEM_MANAGEMENT_URL "$SYSTEM_URL" production --token="${{ env.VERCEL_TOKEN }}" || true
          
          if [[ "${{ github.event_name }}" == "push" && "${{ github.ref }}" == "refs/heads/main" ]]; then
            # 生产部署
            echo "🚀 Deploying main app to production..."
            URL=$(vercel . --prod --token="${{ env.VERCEL_TOKEN }}" --force)
            echo "production-url=${URL}" >> "$GITHUB_OUTPUT"
            echo "url=${URL}" >> "$GITHUB_OUTPUT"
            echo "✅ Main app production deployment: ${URL}"
          else
            # 预览部署
            echo "🔄 Deploying main app preview..."
            URL=$(vercel . --token="${{ env.VERCEL_TOKEN }}" --force)
            echo "url=${URL}" >> "$GITHUB_OUTPUT"
            echo "✅ Main app preview deployment: ${URL}"
          fi

  # 通知部署结果
  notify-deployment:
    runs-on: ubuntu-latest
    needs: [deploy-main-app, deploy-user-management, deploy-system-management]
    if: always() && !cancelled()
    steps:
      - name: Comment deployment status
        uses: actions/github-script@v7
        if: github.event_name == 'pull_request'
        with:
          script: |
            const mainUrl = '${{ needs.deploy-main-app.outputs.url }}';
            const userUrl = '${{ needs.deploy-user-management.outputs.url }}';
            const systemUrl = '${{ needs.deploy-system-management.outputs.url }}';
            
            let body = '🚀 **预览部署完成！**\n\n';
            body += '📍 **预览地址:**\n';
            if (mainUrl) body += `- 🏠 主应用: ${mainUrl}\n`;
            if (userUrl) body += `- 👥 用户管理: ${userUrl}\n`;
            if (systemUrl) body += `- ⚙️ 系统管理: ${systemUrl}\n`;
            body += '\n🔗 点击主应用链接即可访问完整的微前端应用！\n';
            body += '\n> 📝 *此部署为预览版本，不会影响生产环境*';
            
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: body
            });
            
      - name: Print production URLs
        if: github.event_name == 'push' && github.ref == 'refs/heads/main'
        run: |
          echo "🎉 生产部署完成！"
          echo "📍 主应用: ${{ needs.deploy-main-app.outputs.production-url }}"
          echo "📍 用户管理: ${{ needs.deploy-user-management.outputs.production-url }}"
          echo "📍 系统管理: ${{ needs.deploy-system-management.outputs.production-url }}"
```

#### 文档站点部署工作流 (deploy-docs.yml)：

```yaml
name: Deploy Docs to Vercel

on:
  push:
    branches: [ main ]
    paths:
      - 'docs-site/**'
  workflow_dispatch:

env:
  # Vercel配置 - 与微前端项目共用
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
  # 文档站点项目ID
  VERCEL_PROJECT_ID_DOCS: ${{ secrets.VERCEL_PROJECT_ID_DOCS }}

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install dependencies
        run: |
          cd docs-site
          npm install

      - name: Build
        run: |
          cd docs-site
          npm run docs:build

      - name: Deploy to Vercel
        env:
          VERCEL_PROJECT_ID: ${{ env.VERCEL_PROJECT_ID_DOCS }}
          VERCEL_ORG_ID: ${{ env.VERCEL_ORG_ID }}
        shell: bash
        run: |
          set -e
          
          # 进入文档站点目录
          cd docs-site
          
          # 安装Vercel CLI
          npm install --global vercel@latest
          
          # 清除可能存在的.vercel配置
          rm -rf .vercel || true
          
          if [[ "${{ github.event_name }}" == "push" && "${{ github.ref }}" == "refs/heads/main" ]]; then
            # 生产部署
            echo "🚀 Deploying docs to production..."
            URL=$(vercel . --prod --token="${{ env.VERCEL_TOKEN }}" --force)
            echo "✅ Production deployment: ${URL}"
          else
            # 预览部署
            echo "🔄 Deploying docs preview..."
            URL=$(vercel . --token="${{ env.VERCEL_TOKEN }}" --force)
            echo "✅ Preview deployment: ${URL}"
          fi
```

## 📋 GitHub Actions 配置详解

### 触发条件

GitHub Actions 工作流可以通过多种方式触发：

1. **push**: 当代码推送到指定分支时触发
2. **pull_request**: 当创建或更新 Pull Request 时触发
3. **workflow_dispatch**: 允许手动触发工作流
4. **schedule**: 按计划定时触发工作流
5. **paths**: 仅当特定路径下的文件发生变化时触发

```yaml
on:
  push:
    branches: [ main ]
    paths:
      - 'docs-site/**'  # 仅当 docs-site 目录下的文件变更时触发
  workflow_dispatch:  # 允许手动触发
```

### 环境变量与 Secrets

环境变量可以在工作流级别或作业级别定义：

```yaml
env:
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
  NODE_VERSION: '18'
```

### 作业与步骤

一个工作流由多个作业组成，每个作业包含多个步骤：

```yaml
jobs:
  deploy:  # 作业名称
    runs-on: ubuntu-latest  # 运行环境
    
    steps:  # 步骤列表
      - name: Checkout  # 步骤名称
        uses: actions/checkout@v4  # 使用的 Action
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:  # Action 的参数
          node-version: '18'
```

### 作业依赖与条件执行

作业可以依赖其他作业，并根据条件执行：

```yaml
deploy-main-app:
  runs-on: ubuntu-latest
  needs: [detect-changes, deploy-user-management, deploy-system-management]  # 依赖这些作业
  if: always() && !failure() && !cancelled()  # 条件执行
```

## 🔧 GitHub Actions 最佳实践

### 1. 精细控制触发条件

使用 `paths` 筛选器避免不必要的工作流执行：

```yaml
on:
  push:
    branches: [ main ]
    paths:
      - 'main-app/**'
      - 'sub-apps/**'
      - 'shared/**'
      - 'package.json'
```

### 2. 使用缓存加速构建

利用缓存减少依赖安装时间：

```yaml
- name: Cache dependencies
  uses: actions/cache@v3
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-
```

### 3. 并行执行独立作业

将独立的任务拆分为并行作业提高效率：

```yaml
jobs:
  deploy-user-management:
    runs-on: ubuntu-latest
    # ...

  deploy-system-management:
    runs-on: ubuntu-latest
    # ...
```

### 4. 设置超时限制

防止作业长时间运行消耗过多资源：

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    timeout-minutes: 10  # 设置超时时间
```

### 5. 使用工作流输出

在作业之间传递数据：

```yaml
jobs:
  job1:
    outputs:
      output1: ${{ steps.step1.outputs.result }}
    steps:
      - id: step1
        run: echo "result=value" >> $GITHUB_OUTPUT

  job2:
    needs: job1
    steps:
      - run: echo ${{ needs.job1.outputs.output1 }}
```

## 🔐 安全最佳实践

### 1. 使用 Secrets 保护敏感信息

永远不要在工作流文件中硬编码敏感信息：

```yaml
# 错误示例
run: vercel --token="abc123"

# 正确示例
run: vercel --token="${{ secrets.VERCEL_TOKEN }}"
```

### 2. 限制 Secret 访问权限

只在需要的地方使用 Secrets：

```yaml
env:
  VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
```

### 3. 定期轮换 Secret

定期更新 Vercel Token 等敏感信息。

### 4. 使用最小权限原则

为 GitHub Token 和第三方服务令牌设置最小必要权限。

## 🧪 调试 GitHub Actions

### 1. 启用调试日志

设置 Actions 的 Secret `ACTIONS_STEP_DEBUG` 为 `true` 启用详细日志。

### 2. 使用 `if: ${{ failure() }}` 条件执行诊断步骤

```yaml
- name: Debug on failure
  if: ${{ failure() }}
  run: |
    ls -la
    cat .vercel/project.json
    env
```

### 3. 使用工作流可视化工具

```yaml
- name: Upload workflow visualization
  uses: githubocto/repo-visualizer@v1
  with:
    output_file: ".github/workflows/workflow.svg"
    artifact_name: "workflow-diagram"
```

## 📊 监控和分析

### 1. 设置工作流状态通知

使用 Slack、钉钉或邮件通知部署状态：

```yaml
- name: Send Slack notification
  uses: slackapi/slack-github-action@v1
  with:
    payload: |
      {
        "text": "🚀 Deployment finished: ${{ job.status }}"
      }
  env:
    SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
```

### 2. 生成部署报告

```yaml
- name: Generate deployment report
  run: |
    echo "# Deployment Report" > report.md
    echo "- Date: $(date)" >> report.md
    echo "- Commit: ${{ github.sha }}" >> report.md
    echo "- URL: ${{ steps.deploy.outputs.url }}" >> report.md
```

## 🔄 常见问题解决

### 1. 工作流执行失败

- **检查 YAML 语法**：确保工作流文件格式正确
- **查看详细日志**：在 GitHub Actions 标签页中查看详细日志
- **检查 Secrets 配置**：确保所有必要的 Secrets 已配置
- **检查服务状态**：Vercel 或其他第三方服务可能暂时不可用

### 2. Vercel 部署失败

- **检查 Vercel 令牌**：确保 Vercel 令牌有效且具有适当权限
- **检查项目 ID**：确保项目 ID 正确
- **检查构建错误**：分析 Vercel 构建日志中的错误信息

### 3. 依赖安装失败

- **检查 Node.js 版本**：确保使用兼容的 Node.js 版本
- **尝试清除缓存**：在工作流中添加缓存清理步骤

## 🎯 下一步建议

1. **添加自动测试**：在部署前添加自动测试步骤
2. **实现 A/B 测试部署**：使用特性分支部署进行 A/B 测试
3. **实现蓝绿部署**：使用工作流实现蓝绿部署策略
4. **集成质量检查**：添加代码质量和安全检查步骤
5. **实现自动回滚**：在部署失败时自动回滚到上一个稳定版本