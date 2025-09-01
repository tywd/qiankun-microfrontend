# 项目结构说明

本文档详细介绍了企业级微前端项目的整体结构和各个目录、文件的作用。

## 项目整体结构

```
enterprise-microfrontend/
├── main-app/                  # 主应用（壳应用）
├── sub-apps/                  # 子应用目录
│   ├── user-management/       # 用户管理子应用
│   └── system-management/     # 系统管理子应用
├── shared/                    # 共享资源目录
├── docs-site/                 # 文档站点
├── docs/                      # 项目文档
├── docker/                    # Docker配置文件
├── nginx/                     # Nginx配置文件
├── scripts/                   # 部署脚本
├── .github/                   # GitHub配置
├── .gitignore                 # Git忽略文件配置
├── package.json               # 根项目配置文件
├── pnpm-workspace.yaml        # pnpm工作区配置
└── README.md                  # 项目说明文档
```

## 根目录文件说明

### package.json
根项目的配置文件，定义了工作区脚本命令：
- `pnpm dev` - 同时启动主应用和所有子应用
- `pnpm build` - 构建所有应用
- `pnpm install:all` - 安装所有应用的依赖

### pnpm-workspace.yaml
定义了pnpm工作区，包含：
- `main-app` - 主应用目录
- `sub-apps/*` - 所有子应用目录

### README.md
项目的主说明文档，包含项目概述、技术栈、快速开始等信息。

## 主应用 (main-app/)

主应用是微前端架构的壳应用，负责加载和管理所有子应用。

```
main-app/
├── src/
│   ├── App.vue              # 主应用根组件
│   ├── main.ts              # 主应用入口文件
│   ├── router/              # 路由配置
│   ├── components/          # 公共组件
│   ├── views/               # 主应用页面
│   ├── micro/               # 微前端配置
│   ├── shared/              # 主应用共享资源
│   ├── assets/              # 静态资源
│   └── style.css            # 全局样式
├── index.html               # HTML模板
├── package.json             # 主应用依赖配置
├── vite.config.ts           # Vite配置文件
├── tsconfig.json            # TypeScript配置
└── vercel.json              # Vercel部署配置
```

### 核心文件说明

#### src/main.ts
主应用的入口文件，负责：
- 初始化Vue应用
- 注册微前端应用
- 启动Qiankun微前端框架
- 配置全局事件总线

#### src/micro/index.ts
微前端配置文件，定义了：
- 子应用注册信息
- 生命周期管理
- 全局状态管理

#### src/App.vue
主应用的根组件，包含：
- 全局布局结构
- 导航菜单
- 子应用容器

## 子应用 (sub-apps/)

子应用是独立的Vue应用，可以独立开发、构建和部署。

### 用户管理子应用 (sub-apps/user-management/)

```
sub-apps/user-management/
├── src/
│   ├── App.vue              # 子应用根组件
│   ├── main.ts              # 子应用入口文件
│   ├── router/              # 路由配置
│   ├── components/          # 子应用组件
│   ├── views/               # 子应用页面
│   ├── assets/              # 静态资源
│   └── style.css            # 全局样式
├── index.html               # HTML模板
├── package.json             # 子应用依赖配置
├── vite.config.ts           # Vite配置文件
└── vercel.json              # Vercel部署配置
```

### 系统管理子应用 (sub-apps/system-management/)

结构与用户管理子应用类似，提供系统管理功能。

## 共享资源 (shared/)

共享资源目录包含所有应用间共享的代码和配置。

```
shared/
├── eventBus.ts              # 全局事件总线
├── http.ts                  # HTTP请求工具
├── index.ts                 # 共享依赖和工具函数
└── types.ts                 # 共享类型定义
```

### eventBus.ts
全局事件总线，用于主应用和子应用之间的通信：
- 提供事件发布/订阅机制
- 支持多种事件类型（用户、路由、应用等）
- 包含事件历史记录功能

### http.ts
统一的HTTP请求工具：
- 封装fetch API
- 统一错误处理
- 支持请求/响应拦截

### index.ts
共享依赖和工具函数：
- 共享依赖配置（Vue、Element Plus等）
- 共享工具函数（防抖、节流等）
- 共享状态管理

### types.ts
共享类型定义：
- 用户信息类型
- 路由信息类型
- API响应类型
- 全局事件类型

## 文档站点 (docs-site/)

VitePress文档站点，包含项目文档和部署指南。

```
docs-site/
├── .vitepress/              # VitePress配置
├── guide/                   # 使用指南
├── deployment/              # 部署文档
├── troubleshooting/         # 问题排查
├── public/                  # 静态资源
├── index.md                 # 首页文档
└── package.json             # 文档站点依赖配置
```

## 项目文档 (docs/)

项目相关的详细文档。

```
docs/
├── deploy-vercel-auto-setup.md  # Vercel自动部署配置
├── project-development-summary.md  # 项目开发总结
├── questions.md                 # 常见问题汇总
├── vercel-deployment-guide.md   # Vercel部署指南
├── performance-optimization.md  # 性能优化指南
└── deployment-comparison.md     # 部署方案对比
```

## 部署配置

### Docker配置 (docker/)

```
docker/
├── main-app.Dockerfile      # 主应用Docker配置
├── user-management.Dockerfile  # 用户管理子应用Docker配置
├── system-management.Dockerfile  # 系统管理子应用Docker配置
└── docker-compose.yml       # Docker Compose配置
```

### Nginx配置 (nginx/)

```
nginx/
├── nginx.conf               # Nginx主配置文件
└── conf.d/                  # 站点配置目录
```

### 部署脚本 (scripts/)

```
scripts/
├── deploy.sh                # 主部署脚本
├── deploy-vercel.sh         # Vercel部署脚本
├── cloud-server-deploy.sh   # 云服务器部署脚本
└── deploy-docs-manual.sh    # 文档手动部署脚本
```

### GitHub配置 (.github/)

```
.github/
└── workflows/               # GitHub Actions工作流
    ├── deploy-vercel-auto.yml  # Vercel自动部署
    └── deploy-docs.yml      # 文档站点部署
```

## 技术栈概览

- **前端框架**: Vue 3 + TypeScript
- **构建工具**: Vite
- **微前端框架**: Qiankun
- **UI组件库**: Element Plus
- **包管理**: pnpm
- **部署平台**: Vercel、Docker、Nginx
- **CI/CD**: GitHub Actions

## 开发规范

1. **命名规范**:
   - 文件名使用 PascalCase（如 UserList.vue）
   - 组件名使用 PascalCase
   - 路由名和变量名使用 camelCase

2. **Git提交规范**:
   - 遵循 feat/fix/docs 等规范

3. **代码规范**:
   - 使用 TypeScript 提升类型安全性
   - 遵循 Vue 3 Composition API 规范

通过以上结构，项目实现了模块化、可扩展的微前端架构，支持独立开发、测试和部署。