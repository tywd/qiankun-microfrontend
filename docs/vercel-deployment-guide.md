# Vercel 微前端部署指南

## 🚀 快速开始

### 方式一：使用自动部署脚本 (推荐)

```bash
# 1. 确保已安装Node.js 18+和pnpm
node --version
pnpm --version

# 2. 运行一键部署脚本
./scripts/deploy-vercel.sh
```

### 方式二：手动部署

#### 1. 安装Vercel CLI
```bash
npm install -g vercel@latest
```

#### 2. 登录Vercel
```bash
vercel login
```

#### 3. 分别部署每个应用

##### 部署用户管理子应用
```bash
cd sub-apps/user-management
vercel --prod
```

##### 部署系统管理子应用
```bash
cd sub-apps/system-management
vercel --prod
```

##### 部署主应用
```bash
cd main-app
# 设置环境变量
vercel env add VITE_USER_MANAGEMENT_URL "https://qiankun-user-management.vercel.app" production
vercel env add VITE_SYSTEM_MANAGEMENT_URL "https://qiankun-system-management.vercel.app" production
# 部署
vercel --prod
```

## 📋 配置说明

### 项目结构
```
qoder/
├── main-app/
│   ├── vercel.json          # 主应用Vercel配置
│   └── src/
├── sub-apps/
│   ├── user-management/
│   │   └── vercel.json      # 用户管理子应用配置
│   └── system-management/
│       └── vercel.json      # 系统管理子应用配置
├── scripts/
│   └── deploy-vercel.sh     # 一键部署脚本
└── .github/workflows/
    └── deploy-vercel.yml    # GitHub Actions自动部署
```

### 环境变量配置

#### 主应用环境变量
- `VITE_USER_MANAGEMENT_URL`: 用户管理子应用的URL
- `VITE_SYSTEM_MANAGEMENT_URL`: 系统管理子应用的URL

#### GitHub Secrets配置 (用于自动部署)
```
VERCEL_TOKEN: Vercel访问令牌
VERCEL_ORG_ID: Vercel组织ID
VERCEL_PROJECT_ID_MAIN: 主应用项目ID
VERCEL_PROJECT_ID_USER: 用户管理项目ID
VERCEL_PROJECT_ID_SYSTEM: 系统管理项目ID
```

## 🔧 自动部署配置

### GitHub Actions自动部署
1. 推送代码到main分支会自动触发部署
2. 部署顺序：子应用 → 主应用
3. 自动设置子应用URL环境变量

### 获取Vercel配置信息

#### 1. 获取Vercel Token
```bash
# 访问 https://vercel.com/account/tokens
# 创建新的token并复制
```

#### 2. 获取项目ID和组织ID
```bash
# 在项目目录中运行
vercel link
# 查看 .vercel/project.json 文件获取projectId和orgId
```

## 🌐 访问地址

### 开发环境
- 主应用: http://localhost:8080
- 用户管理: http://localhost:8081
- 系统管理: http://localhost:8082

### 生产环境 (Vercel)
- 主应用: https://qiankun-main-app.vercel.app
- 用户管理: https://qiankun-user-management.vercel.app
- 系统管理: https://qiankun-system-management.vercel.app

## 🔍 故障排除

### 常见问题

#### 1. 子应用跨域问题
**解决方案**: 确保vercel.json中配置了CORS头部
```json
{
  "headers": {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
  }
}
```

#### 2. 路由404问题
**解决方案**: 确保所有路由都重定向到index.html
```json
{
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

#### 3. 环境变量未生效
**解决方案**: 
1. 检查环境变量名是否以`VITE_`开头
2. 重新部署应用
3. 清除浏览器缓存

#### 4. 构建失败
**解决方案**:
1. 检查Node.js版本 (需要18+)
2. 清除依赖重新安装: `rm -rf node_modules && pnpm install`
3. 检查TypeScript错误

### 性能优化

#### 1. 启用构建缓存
Vercel自动启用构建缓存，无需额外配置

#### 2. 优化包大小
```bash
# 分析包大小
cd main-app && pnpm build:analyze
```

#### 3. 启用压缩
Vercel自动启用Gzip和Brotli压缩

## 📊 监控和分析

### Vercel Analytics
1. 在Vercel Dashboard中启用Analytics
2. 查看页面性能和用户访问数据

### 部署日志
```bash
# 查看部署日志
vercel logs [deployment-url]
```

## 🔄 回滚部署

```bash
# 查看部署历史
vercel ls

# 回滚到指定版本
vercel rollback [deployment-url]
```

## 💡 最佳实践

1. **分支管理**: 使用preview部署测试功能
2. **环境变量**: 敏感信息使用Vercel环境变量
3. **域名配置**: 配置自定义域名提升专业度
4. **监控告警**: 设置部署失败通知
5. **缓存策略**: 利用Vercel Edge Network加速访问

## 🎯 后续步骤

1. 配置自定义域名
2. 设置监控告警
3. 优化SEO设置
4. 配置Web Analytics
5. 设置安全头部