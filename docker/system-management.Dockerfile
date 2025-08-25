# 系统管理子应用 Dockerfile
FROM node:18-alpine as builder

WORKDIR /app

# 复制package文件
COPY package.json pnpm-workspace.yaml ./
COPY sub-apps/system-management/package.json ./sub-apps/system-management/

# 安装pnpm
RUN npm install -g pnpm

# 安装依赖
RUN pnpm install --frozen-lockfile

# 复制源代码
COPY sub-apps/system-management/ ./sub-apps/system-management/

# 构建应用
WORKDIR /app/sub-apps/system-management
RUN pnpm build

# 生产环境
FROM nginx:alpine

# 复制构建产物
COPY --from=builder /app/sub-apps/system-management/dist /usr/share/nginx/html

# 创建nginx配置
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    \
    # 支持单页应用路由 \
    location / { \
        try_files $uri $uri/ /index.html; \
        add_header Access-Control-Allow-Origin *; \
        add_header Access-Control-Allow-Methods "GET, POST, OPTIONS"; \
        add_header Access-Control-Allow-Headers "Origin, Content-Type, Accept, Authorization"; \
    } \
    \
    # 处理预检请求 \
    location ~ ^/(.*)$ { \
        if ($request_method = OPTIONS) { \
            add_header Access-Control-Allow-Origin *; \
            add_header Access-Control-Allow-Methods "GET, POST, OPTIONS"; \
            add_header Access-Control-Allow-Headers "Origin, Content-Type, Accept, Authorization"; \
            return 200; \
        } \
    } \
}' > /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 启动nginx
CMD ["nginx", "-g", "daemon off;"]