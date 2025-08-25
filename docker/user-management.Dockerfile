# 用户管理子应用 Dockerfile
FROM node:18-alpine as builder

WORKDIR /app

# 复制package文件
COPY package.json pnpm-workspace.yaml ./
COPY sub-apps/user-management/package.json ./sub-apps/user-management/

# 安装pnpm
RUN npm install -g pnpm

# 安装依赖
RUN pnpm install --frozen-lockfile

# 复制源代码
COPY sub-apps/user-management/ ./sub-apps/user-management/

# 构建应用
WORKDIR /app/sub-apps/user-management
RUN pnpm build

# 生产环境
FROM nginx:alpine

# 复制构建产物
COPY --from=builder /app/sub-apps/user-management/dist /usr/share/nginx/html/user-management

# 复制nginx配置
COPY nginx/user-management.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 启动nginx
CMD ["nginx", "-g", "daemon off;"]