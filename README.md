# 企业级微前端管理后台项目

基于 Qiankun + Vue3 + Vite + TypeScript 构建的企业级微前端管理后台系统。

## 🚀 项目架构

```
enterprise-microfrontend/
├── main-app/                    # 主应用（壳应用）
│   ├── src/
│   │   ├── components/         # 公共组件
│   │   ├── micro/             # 微前端配置
│   │   ├── router/            # 路由配置
│   │   ├── views/             # 页面组件
│   │   └── main.ts            # 入口文件
│   └── package.json
├── sub-apps/                   # 子应用目录
│   ├── user-management/        # 用户管理子应用
│   │   ├── src/
│   │   └── package.json
│   └── system-management/      # 系统管理子应用
│       ├── src/
│       └── package.json
├── scripts/                    # 部署脚本
├── docker/                     # Docker配置
├── nginx/                      # Nginx配置
└── package.json               # 根package.json
```

## 🛠️ 技术栈

- **主框架**: Vue 3.x + TypeScript
- **构建工具**: Vite 7.x
- **微前端**: Qiankun 2.x
- **UI组件库**: Element Plus
- **路由**: Vue Router 4.x
- **包管理**: pnpm

## 📦 安装依赖

```bash
# 安装根目录依赖
pnpm install

# 安装所有应用依赖
pnpm install:all
```

## 🚀 开发环境启动

### 方式1: 同时启动所有应用
```bash
pnpm dev
```

### 方式2: 分别启动各个应用
```bash
# 启动主应用 (端口: 8080)
pnpm --filter main-app dev

# 启动用户管理子应用 (端口: 8081)
pnpm --filter user-management dev

# 启动系统管理子应用 (端口: 8082)
pnpm --filter system-management dev
```

## 🏗️ 构建部署

### 构建所有应用
```bash
pnpm build
```

### 分别构建各个应用
```bash
# 构建主应用
pnpm build:main

# 构建用户管理子应用
pnpm build:user

# 构建系统管理子应用
pnpm build:system
```

## 🐳 Docker部署

### 构建Docker镜像
```bash
# 构建主应用镜像
docker build -f docker/main-app.Dockerfile -t main-app:latest .

# 构建用户管理子应用镜像
docker build -f docker/user-management.Dockerfile -t user-management:latest .

# 构建系统管理子应用镜像
docker build -f docker/system-management.Dockerfile -t system-management:latest .
```

### 使用Docker Compose启动
```bash
docker-compose up -d
```

## 🌐 Nginx配置

项目提供了完整的Nginx配置文件，支持：
- 静态资源代理
- 跨域配置
- 子应用路由配置
- 负载均衡

配置文件位置: `nginx/nginx.conf`

## 🔧 微前端配置说明

### 主应用配置
- **端口**: 8080
- **入口**: `/`
- **功能**: 提供应用壳、路由管理、子应用注册

### 子应用配置
- **用户管理**: 端口8081，路由前缀 `/user`
- **系统管理**: 端口8082，路由前缀 `/system`

### 应用间通信
支持以下通信方式：
- Props传递
- 全局事件总线
- 共享状态管理

## 📝 开发规范

### 目录结构
```
src/
├── components/     # 组件
├── views/         # 页面
├── router/        # 路由
├── assets/        # 静态资源
├── utils/         # 工具函数
└── types/         # 类型定义
```

### 命名规范
- 文件名: PascalCase (UserList.vue)
- 组件名: PascalCase
- 路由名: camelCase
- 变量名: camelCase

### Git提交规范
```
feat: 新功能
fix: 修复bug
docs: 文档更新
style: 代码格式化
refactor: 重构
test: 测试相关
chore: 构建过程或辅助工具的变动
```

## 🚀 自动部署

项目支持Git Push自动部署：

1. 推送到main分支触发生产环境部署
2. 推送到develop分支触发测试环境部署
3. 支持独立部署各个子应用

### GitHub Actions配置
```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main, develop]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install pnpm
        run: npm install -g pnpm
      - name: Install dependencies
        run: pnpm install:all
      - name: Build
        run: pnpm build
      - name: Deploy
        run: pnpm deploy
```

## 🔍 常见问题

### Q: 子应用无法加载？
A: 检查以下几点：
1. 子应用是否正常启动
2. 跨域配置是否正确
3. 网络连接是否正常

### Q: 路由跳转异常？
A: 确保：
1. 路由配置正确
2. 子应用路由基础路径设置正确
3. 主应用路由配置包含子应用路由

### Q: 样式冲突？
A: 使用以下方案：
1. 开启样式隔离
2. 使用CSS Modules
3. 添加应用前缀

## 📄 许可证

MIT License

## 🤝 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📞 联系方式

如有问题，请联系开发团队或提交Issue。