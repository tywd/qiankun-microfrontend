# 快速开始

本指南将帮助您快速搭建和运行企业级微前端项目。

## 📋 环境要求

在开始之前，请确保您的开发环境满足以下要求：

| 工具 | 版本要求 | 说明 |
|------|----------|------|
| Node.js | >= 18.0.0 | 建议使用LTS版本 |
| pnpm | >= 8.0.0 | 包管理器 |
| Git | 最新版本 | 版本控制 |

::: tip 环境检查
```bash
# 检查Node.js版本
node --version

# 检查pnpm版本
pnpm --version

# 如果没有pnpm，请先安装
npm install -g pnpm
```
:::

## 🚀 克隆项目

```bash
# 克隆项目
git clone https://github.com/tywd/qiankun-microfrontend.git

# 进入项目目录
cd qiankun-microfrontend
```

## 📦 安装依赖

项目采用pnpm workspace管理多包结构，一键安装所有依赖：

```bash
# 安装根目录依赖
pnpm install

# 安装所有应用依赖
pnpm install:all
```

::: details 依赖安装详情
- 主应用依赖：Vue 3、Vite、TypeScript、Qiankun、Element Plus
- 子应用依赖：Vue 3、Vite、TypeScript、Element Plus
- 开发依赖：ESLint、Prettier、Husky等
:::

## 🎯 启动项目

### 方式一：一键启动所有应用 (推荐)

```bash
pnpm dev
```

这将同时启动：
- 主应用 (端口: 8080)
- 用户管理子应用 (端口: 8081) 
- 系统管理子应用 (端口: 8082)

### 方式二：分别启动各个应用

```bash
# 启动主应用
pnpm --filter main-app dev

# 启动用户管理子应用
pnpm --filter user-management dev

# 启动系统管理子应用
pnpm --filter system-management dev
```

## 🌐 访问应用

启动成功后，在浏览器中访问：

- **主应用**: [http://localhost:8080](http://localhost:8080)
- **用户管理**: [http://localhost:8081](http://localhost:8081) (独立访问)
- **系统管理**: [http://localhost:8082](http://localhost:8082) (独立访问)

::: tip 推荐访问方式
建议通过主应用 (localhost:8080) 访问，这样可以体验完整的微前端功能，包括子应用的无缝切换。
:::

## 🔧 开发工具配置

### VSCode配置

推荐安装以下VSCode插件：

```json
{
  "recommendations": [
    "Vue.volar",
    "Vue.vscode-typescript-vue-plugin",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint"
  ]
}
```

### 代码规范

项目已配置ESLint和Prettier，保存时自动格式化：

```bash
# 手动运行代码检查
pnpm lint

# 手动格式化代码
pnpm format
```

## 📂 项目结构说明

```
qiankun-microfrontend/
├── main-app/                    # 主应用（壳应用）
│   ├── src/
│   │   ├── components/         # 公共组件
│   │   ├── micro/             # 微前端配置 ⭐
│   │   ├── router/            # 路由配置
│   │   ├── shared/            # 共享模块
│   │   ├── views/             # 页面组件
│   │   └── main.ts            # 入口文件
│   ├── vite.config.ts         # Vite配置
│   └── package.json
├── sub-apps/                   # 子应用目录
│   ├── user-management/        # 用户管理子应用
│   │   ├── src/
│   │   │   ├── components/    # 子应用组件
│   │   │   ├── views/         # 子应用页面
│   │   │   ├── router/        # 子应用路由
│   │   │   └── main.ts        # 子应用入口 ⭐
│   │   ├── vite.config.ts     # 子应用Vite配置 ⭐
│   │   └── package.json
│   └── system-management/      # 系统管理子应用
│       └── ...                # 结构同用户管理
├── docs/                       # 项目文档
├── docs-site/                  # VitePress文档站点
├── .github/workflows/          # CI/CD配置
└── package.json               # 根配置文件
```

::: warning 重要文件
标记⭐的文件是微前端架构的关键配置文件，修改时需要特别注意。
:::

## 🛠️ 核心配置说明

### 主应用配置

主应用的关键配置在 `main-app/src/micro/index.ts`：

```typescript
import { registerMicroApps, start } from 'qiankun'

// 注册微应用
registerMicroApps([
  {
    name: 'user-management',
    entry: '//localhost:8081',
    container: '#subapp-viewport',
    activeRule: '/user',
  },
  {
    name: 'system-management', 
    entry: '//localhost:8082',
    container: '#subapp-viewport',
    activeRule: '/system',
  }
])

// 启动qiankun
start()
```

### 子应用配置

子应用需要导出qiankun生命周期函数：

```typescript
// src/main.ts
import { createApp } from 'vue'
import App from './App.vue'

let app: any = null

// 导出qiankun生命周期函数
export async function bootstrap() {
  console.log('应用启动')
}

export async function mount(props: any) {
  app = createApp(App)
  app.mount(props.container ? props.container.querySelector('#app') : '#app')
}

export async function unmount() {
  app?.unmount()
  app = null
}

// 独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  mount({})
}
```

## 🎯 下一步

现在您已经成功运行了项目，可以：

1. **[了解项目架构](./architecture)** - 深入理解微前端架构设计
2. **[开始开发](./development)** - 学习开发新功能和子应用
3. **[部署上线](../deployment/)** - 了解各种部署方案
4. **[性能优化](./performance)** - 优化应用性能

## ❓ 常见问题

### 端口冲突

如果端口被占用，可以修改各应用的端口配置：

```typescript
// vite.config.ts
export default defineConfig({
  server: {
    port: 8080, // 修改为其他端口
    host: '0.0.0.0'
  }
})
```

### 子应用无法加载

1. 确保所有应用都已启动
2. 检查网络连接和防火墙设置
3. 查看浏览器控制台是否有错误信息

### 依赖安装失败

```bash
# 清除缓存重新安装
pnpm store prune
rm -rf node_modules
pnpm install:all
```

---

🎉 恭喜！您已经成功启动了企业级微前端项目。如有问题，请查看[问题排查](../troubleshooting/)页面。