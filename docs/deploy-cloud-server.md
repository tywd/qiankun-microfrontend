# Cloudflare Pages 部署配置

## 主应用配置
- **项目名称**: qiankun-main-app
- **构建命令**: `cd main-app && pnpm install && pnpm build`
- **构建输出目录**: `main-app/dist`
- **Node.js版本**: 18

## 子应用配置

### 用户管理子应用
- **项目名称**: user-management-app
- **构建命令**: `cd sub-apps/user-management && pnpm install && pnpm build`
- **构建输出目录**: `sub-apps/user-management/dist`

### 系统管理子应用
- **项目名称**: system-management-app
- **构建命令**: `cd sub-apps/system-management && pnpm install && pnpm build`
- **构建输出目录**: `sub-apps/system-management/dist`

## 重定向规则 (_redirects 文件)
```
/user/* https://user-management-app.pages.dev/:splat 200
/system/* https://system-management-app.pages.dev/:splat 200
/* /index.html 200
```

## 环境变量
```
NODE_VERSION=18
PNPM_VERSION=8
```