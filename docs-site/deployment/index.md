# 部署概览

本项目支持多种部署方案，从免费的静态部署到企业级的容器化部署，满足不同场景的需求。

## 🚀 部署方案对比

| 部署方案 | 平台 | 成本 | 复杂度 | 适用场景 | 推荐指数 |
|----------|------|------|--------|----------|----------|
| **Vercel部署** | Vercel | 免费 | ⭐ | 快速原型、小型项目 | ⭐⭐⭐⭐⭐ |
| **GitHub Pages** | GitHub | 免费 | ⭐⭐ | 开源项目、文档站点 | ⭐⭐⭐⭐ |
| **云服务器** | 阿里云/腾讯云 | 付费 | ⭐⭐⭐⭐ | 生产环境、企业应用 | ⭐⭐⭐⭐ |
| **容器化部署** | Docker + K8s | 付费 | ⭐⭐⭐⭐⭐ | 大型企业、微服务架构 | ⭐⭐⭐ |

## 🎯 当前部署状态

### ✅ 线上环境
- **主应用**: [https://qiankun-main-app.vercel.app](https://qiankun-main-app.vercel.app)
- **用户管理**: [https://qiankun-user-management.vercel.app](https://qiankun-user-management.vercel.app)
- **系统管理**: [https://qiankun-system-management.vercel.app](https://qiankun-system-management.vercel.app)

### 🔄 自动化部署

当前项目采用 **GitHub Actions + Vercel** 的自动化部署方案：

```mermaid
graph LR
    A[代码推送] --> B[GitHub Actions]
    B --> C[智能检测变更]
    C --> D[并行构建]
    D --> E[部署到Vercel]
    E --> F[更新环境变量]
    F --> G[部署完成通知]
```

#### 部署触发条件
- **生产部署**：推送到 `main` 分支
- **预览部署**：创建 Pull Request
- **智能部署**：只部署发生变更的应用

#### 部署特性
- ✅ **智能变更检测** - 只部署变更的应用，提升效率
- ✅ **并行部署** - 子应用并行部署，减少等待时间
- ✅ **自动配置** - 自动设置子应用URL到主应用
- ✅ **预览环境** - PR自动生成预览链接
- ✅ **状态通知** - 部署结果实时通知

## 📋 部署前准备

### 环境要求
- Node.js >= 18.0.0
- pnpm >= 8.0.0
- Git 最新版本

### 账号准备
根据选择的部署方案，准备相应的账号：

| 部署方案 | 需要账号 | 备注 |
|----------|----------|------|
| Vercel | Vercel账号 | 支持GitHub登录 |
| GitHub Pages | GitHub账号 | 免费额度充足 |
| 云服务器 | 云厂商账号 | 需要购买服务器 |

### 代码准备

确保代码已推送到GitHub仓库：

```bash
# 检查远程仓库
git remote -v

# 推送最新代码
git add .
git commit -m "feat: 准备部署"
git push origin main
```

## 🛠️ 部署配置文件

### Vercel配置

每个应用都需要 `vercel.json` 配置文件：

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Access-Control-Allow-Origin",
          "value": "*"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### GitHub Actions配置

项目使用 `.github/workflows/deploy-vercel-auto.yml` 进行自动化部署：

::: details 查看完整配置
```yaml
name: Auto Deploy to Vercel

on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]

env:
  VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  # ... 其他配置
```
:::

## 🎯 选择部署方案

### 快速部署 (推荐新手)

如果您是第一次部署，推荐使用 **Vercel部署**：

1. **优点**：配置简单、自动HTTPS、全球CDN
2. **适合**：个人项目、小型团队、快速原型
3. **开始**：[Vercel部署指南](./vercel)

### 稳定部署 (推荐团队)

如果您需要更多控制权，推荐使用 **云服务器部署**：

1. **优点**：完全控制、可自定义、性能稳定
2. **适合**：生产环境、企业应用、大型项目
3. **开始**：[云服务器部署指南](./cloud-server)

### 免费部署 (推荐开源)

如果您的项目是开源的，推荐使用 **GitHub Pages**：

1. **优点**：完全免费、与GitHub集成、简单可靠
2. **适合**：开源项目、文档站点、展示页面
3. **限制**：只支持静态内容、有流量限制

## 🚨 常见部署问题

### 构建失败

**问题**：`Build failed with exit code 1`

**解决方案**：
1. 检查Node.js版本是否 >= 18
2. 确认所有依赖都在 `dependencies` 中
3. 本地先执行 `pnpm build` 测试

### 跨域问题

**问题**：子应用无法加载，CORS错误

**解决方案**：
1. 检查 `vercel.json` 中的 headers 配置
2. 确认子应用URL配置正确
3. 查看浏览器控制台错误信息

### 路由404

**问题**：刷新页面出现404错误

**解决方案**：
1. 添加 `rewrites` 配置重定向到 `index.html`
2. 确认路由模式为 `history` 模式
3. 检查服务器配置是否支持SPA

## 📈 性能优化建议

### 构建优化
- **代码分割**：合理配置动态导入
- **Tree Shaking**：移除未使用的代码
- **压缩优化**：启用Gzip和Brotli压缩

### 加载优化
- **CDN加速**：使用全球CDN分发静态资源
- **缓存策略**：配置合理的缓存头
- **预加载**：预加载关键资源

### 监控优化
- **性能监控**：集成Vercel Analytics或其他监控工具
- **错误追踪**：配置错误监控和报警
- **用户体验**：监控Core Web Vitals指标

## 🔗 相关资源

### 官方文档
- [Vercel官方文档](https://vercel.com/docs)
- [GitHub Actions文档](https://docs.github.com/actions)
- [Docker官方文档](https://docs.docker.com/)

### 项目文档
- [Vercel部署详细指南](./vercel)
- [GitHub Actions配置](./github-actions)
- [云服务器部署](./cloud-server)
- [部署方案对比](./comparison)

---

选择合适的部署方案对项目的成功至关重要。建议从简单的方案开始，随着项目发展逐步升级到更高级的部署方案。