# GitHub Actions 自动部署到 Vercel 配置指南

## 📋 概述

新创建的 `deploy-vercel-auto.yml` 配置文件可以实现：

- ✅ **Git Push 后自动部署** - 推送到 main/master 分支时自动部署到生产环境
- ✅ **PR 预览部署** - Pull Request 时自动创建预览环境
- ✅ **智能变更检测** - 只部署发生变更的应用，提升效率
- ✅ **环境变量自动配置** - 自动设置子应用URL到主应用
- ✅ **部署状态通知** - 在PR中自动评论部署结果

## 🔧 配置步骤

### 1. 获取 Vercel Token

1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 点击右上角头像 → **Settings** → **Tokens**
3. 点击 **Create Token**，输入名称（如 `GitHub Actions`）
4. 复制生成的 Token（格式类似：`vercel_1a2b3c4d...`）

### 2. 获取 Vercel Organization ID

1. 在 Vercel Dashboard 点击右上角头像 → **Settings**
2. 在 **General** 标签页找到 **Organization ID**
3. 复制该 ID（格式类似：`team_abcd1234...`）

### 3. 获取 Vercel Project IDs

分别进入三个项目的设置页面获取 Project ID：

#### 主应用 Project ID：
1. 进入主应用项目：https://vercel.com/dashboard/[your-project]/qiankun-microfrontend
2. 点击 **Settings** → **General**
3. 复制 **Project ID**

#### 用户管理 Project ID：
1. 进入用户管理项目：https://vercel.com/dashboard/[your-project]/qiankun-user-management
2. 点击 **Settings** → **General**
3. 复制 **Project ID**

#### 系统管理 Project ID：
1. 进入系统管理项目：https://vercel.com/dashboard/[your-project]/qiankun-system-management
2. 点击 **Settings** → **General**
3. 复制 **Project ID**

### 4. 在GitHub中配置 Secrets

1. 进入您的GitHub仓库
2. 点击 **Settings** → **Secrets and variables** → **Actions**
3. 点击 **New repository secret** 添加以下配置：

```
VERCEL_TOKEN = vercel_1a2b3c4d... (步骤1获取的Token)
VERCEL_ORG_ID = team_abcd1234... (步骤2获取的组织ID)
VERCEL_PROJECT_ID_MAIN = prj_main123... (主应用Project ID)
VERCEL_PROJECT_ID_USER = prj_user456... (用户管理Project ID)
VERCEL_PROJECT_ID_SYSTEM = prj_system789... (系统管理Project ID)
```

## 🚀 使用方法

### 自动部署到生产环境
```bash
git add .
git commit -m "feat: 添加新功能"
git push origin main  # 自动触发生产部署
```

### 创建预览部署
```bash
git checkout -b feature/new-feature
git add .
git commit -m "feat: 新功能开发"
git push origin feature/new-feature
# 创建Pull Request后自动触发预览部署
```

## 🔄 工作流程

1. **变更检测**：自动检测哪些应用发生了变更
2. **并行部署**：子应用并行部署，提升效率
3. **依赖部署**：主应用等待子应用部署完成后部署
4. **环境变量更新**：自动将最新的子应用URL配置到主应用
5. **结果通知**：在PR中评论部署结果和预览链接

## ⚡ 优化特性

### 智能变更检测
- 只有相关文件变更时才部署对应应用
- 共享依赖变更时部署所有应用
- 减少不必要的部署，节省时间和资源

### 环境区分
- **生产环境**：main分支推送触发，使用 `--prod` 标志
- **预览环境**：PR触发，生成独立的预览URL

### 错误处理
- 单个应用部署失败不影响其他应用
- 提供详细的部署日志便于排查问题

## 🛠️ 故障排除

### 常见问题

1. **Token权限不足**
   - 确保Vercel Token有项目部署权限
   - 检查Token是否过期

2. **Project ID错误**
   - 确认Project ID与实际项目匹配
   - 检查项目是否在正确的组织下

3. **环境变量未生效**
   - 检查GitHub Secrets配置是否正确
   - 确认Secret名称拼写无误

### 调试方法
```bash
# 本地测试Vercel CLI
vercel --token=your-token
vercel pull --yes --environment=production
vercel build --prod
```

## 📝 注意事项

1. **首次部署**：第一次使用需要手动执行一次 `vercel link` 关联项目
2. **权限管理**：确保GitHub Actions有足够权限访问Vercel
3. **配额限制**：注意Vercel的部署次数限制
4. **安全性**：不要在代码中硬编码敏感信息

## 🎯 后续优化建议

1. **添加测试阶段**：部署前执行单元测试和集成测试
2. **性能监控**：集成性能监控和错误追踪
3. **回滚机制**：添加快速回滚功能
4. **通知增强**：集成Slack/邮件通知

---

配置完成后，每次推送代码到main分支或创建Pull Request时，都会自动触发部署流程！🎉