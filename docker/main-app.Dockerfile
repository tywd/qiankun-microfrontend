# 主应用 Dockerfile
FROM node:18-alpine as builder

WORKDIR /app

# 复制package文件
COPY package.json pnpm-workspace.yaml ./
COPY main-app/package.json ./main-app/

# 安装pnpm
RUN npm install -g pnpm

# 安装依赖
RUN pnpm install --frozen-lockfile

# 复制源代码
COPY main-app/ ./main-app/

# 构建应用
WORKDIR /app/main-app
RUN pnpm build

# 生产环境
FROM nginx:alpine

# 复制构建产物
COPY --from=builder /app/main-app/dist /usr/share/nginx/html/main-app

# 复制nginx配置
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 启动nginx
CMD ["nginx", "-g", "daemon off;"]