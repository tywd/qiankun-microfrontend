# 备用工作流文件

本目录包含已禁用或备用的GitHub Actions工作流文件，这些文件被移动到此处以避免在GitHub Actions中显示，但保留以备将来使用。

## 📁 文件说明

### 🚀 Vercel部署备用方案

#### `deploy-vercel.yml`
- **原用途**: Vercel原生GitHub集成部署
- **禁用原因**: 项目选择了更可控的GitHub Actions主动部署方式
- **保留原因**: 可作为Vercel原生集成的备用方案
- **特点**: 零配置自动部署，但缺乏精细控制

### 📦 Docker部署备用方案

#### `deploy-cloud-server.yml`
- **用途**: 云服务器Docker化部署
- **移动原因**: 当前主要使用Vercel部署，云服务器为备用方案
- **保留原因**: 将来可能需要迁移到自建服务器
- **特点**: 支持Docker容器化部署，适合大型生产环境

#### `deploy.yml`
- **原用途**: 通用微前端应用Docker部署
- **禁用原因**: 与`deploy-cloud-server.yml`功能重复
- **保留原因**: 作为Docker部署的参考配置
- **特点**: 包含完整的构建和测试流程

### 📊 静态部署备用方案

#### `deploy-pages.yml`
- **用途**: GitHub Pages静态站点部署
- **移动原因**: 当前主要使用Vercel部署，静态部署为备用方案
- **保留原因**: 免费的静态网站托管方案
- **特点**: 适合展示和演示，简单易用

## 🔄 如何重新启用

如果需要重新启用这些工作流：

1. 将文件从 `workflows-backup/` 移动回 `workflows/` 目录
2. 取消注释文件中的 `on:` 配置
3. 配置相应的GitHub Secrets
4. 推送代码后即可在GitHub Actions中看到

### 具体启用步骤

#### 启用Vercel原生集成
```bash
# 1. 移动文件
mv workflows-backup/deploy-vercel.yml workflows/

# 2. 在Vercel Dashboard中连接GitHub仓库
# 3. 配置Root Directory和构建设置
# 4. 禁用当前的deploy-vercel-auto.yml（注释on:配置）
```

#### 启用云服务器部署
```bash
# 1. 移动文件
mv workflows-backup/deploy-cloud-server.yml workflows/

# 2. 配置GitHub Secrets:
# - REGISTRY_URL
# - REGISTRY_USERNAME  
# - REGISTRY_PASSWORD
# - PROD_SERVER_HOST
# - PROD_SERVER_USER
# - PROD_SERVER_SSH_KEY
```

#### 启用GitHub Pages部署
```bash
# 1. 移动文件
mv workflows-backup/deploy-pages.yml workflows/

# 2. 确保gh-pages分支存在
# 3. 在仓库设置中启用GitHub Pages
```

## ⚠️ 注意事项

- **不要同时启用多个Vercel部署工作流**，会导致冲突
- **重新启用前请先禁用当前使用的deploy-vercel-auto.yml**
- **确保相关的Secrets和环境变量已正确配置**
- **Docker部署需要有可用的容器镜像仓库和服务器**
- **GitHub Pages部署适合静态展示，不支持服务端功能**

## 📊 部署方案对比

| 方案 | 复杂度 | 成本 | 控制力 | 适用场景 |
|------|--------|------|--------|----------|
| Vercel原生集成 | 低 | 免费 | 低 | 简单项目 |
| GitHub Actions + Vercel | 中 | 免费 | 高 | 复杂微前端 |
| 云服务器Docker | 高 | 付费 | 最高 | 企业生产 |
| GitHub Pages | 低 | 免费 | 低 | 静态展示 |

---

*这些文件被移动到此目录以保持GitHub Actions界面的整洁，同时保留配置以备将来使用。当前项目使用 `deploy-vercel-auto.yml` 作为唯一的活跃工作流。*