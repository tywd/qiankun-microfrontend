# Railway 部署配置

## 主应用 (railway.json)
{
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "cd main-app && pnpm install && pnpm build",
    "watchPatterns": ["main-app/**"]
  },
  "deploy": {
    "startCommand": "cd main-app && pnpm preview --host 0.0.0.0 --port $PORT",
    "healthcheckPath": "/",
    "healthcheckTimeout": 30
  },
  "environments": {
    "NODE_VERSION": "18",
    "PNPM_VERSION": "8"
  }
}

## 子应用部署配置

### 用户管理子应用
- **服务名**: user-management-app
- **构建命令**: `cd sub-apps/user-management && pnpm install && pnpm build`
- **启动命令**: `cd sub-apps/user-management && pnpm preview --host 0.0.0.0 --port $PORT`

### 系统管理子应用
- **服务名**: system-management-app  
- **构建命令**: `cd sub-apps/system-management && pnpm install && pnpm build`
- **启动命令**: `cd sub-apps/system-management && pnpm preview --host 0.0.0.0 --port $PORT`

## 环境变量配置
```
NODE_ENV=production
VITE_USER_MANAGEMENT_URL=https://user-management-app.railway.app
VITE_SYSTEM_MANAGEMENT_URL=https://system-management-app.railway.app
```

## 域名配置
- 主应用: `your-app.railway.app`
- 用户管理: `user-management-app.railway.app`
- 系统管理: `system-management-app.railway.app`