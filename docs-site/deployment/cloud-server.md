# 云服务器部署指南

本指南将详细介绍如何在云服务器上部署微前端应用，包括环境配置、构建部署、Nginx配置和持续集成方案。

## 🚀 快速开始

### 方式一：使用自动部署脚本 (推荐)

```bash
# 1. 确保已安装Node.js 18+和pnpm
node --version
pnpm --version

# 2. 运行一键部署脚本
./scripts/deploy-cloud-server.sh
```

### 方式二：手动部署

#### 1. 服务器环境准备

```bash
# 更新系统包
sudo apt update && sudo apt upgrade -y

# 安装Node.js和npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# 安装Nginx
sudo apt install -y nginx

# 安装pnpm
npm install -g pnpm

# 安装Git
sudo apt install -y git
```

#### 2. 克隆项目

```bash
# 克隆项目
git clone https://github.com/tywd/qiankun-microfrontend.git
cd qiankun-microfrontend
```

#### 3. 安装依赖

```bash
# 安装根目录依赖
pnpm install

# 安装所有应用依赖
pnpm run install:all
```

#### 4. 构建应用

```bash
# 构建所有应用
pnpm run build
```

#### 5. 配置Nginx

```bash
# 创建Nginx配置文件
sudo nano /etc/nginx/sites-available/microfrontend.conf
```

添加以下配置：

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/microfrontend;
    index index.html;

    # 主应用配置
    location / {
        alias /var/www/microfrontend/main-app/;
        try_files $uri $uri/ /index.html;
    }

    # 用户管理子应用
    location /user/ {
        alias /var/www/microfrontend/user-management/;
        try_files $uri $uri/ /index.html;
    }

    # 系统管理子应用
    location /system/ {
        alias /var/www/microfrontend/system-management/;
        try_files $uri $uri/ /index.html;
    }

    # 启用gzip压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

启用配置并重启Nginx：

```bash
# 创建符号链接
sudo ln -s /etc/nginx/sites-available/microfrontend.conf /etc/nginx/sites-enabled/

# 测试Nginx配置
sudo nginx -t

# 重启Nginx
sudo systemctl restart nginx
```

#### 6. 部署应用

```bash
# 创建部署目录
sudo mkdir -p /var/www/microfrontend

# 复制构建文件
sudo cp -r main-app/dist /var/www/microfrontend/main-app
sudo cp -r sub-apps/user-management/dist /var/www/microfrontend/user-management
sudo cp -r sub-apps/system-management/dist /var/www/microfrontend/system-management

# 设置权限
sudo chown -R www-data:www-data /var/www/microfrontend
```

## 📋 配置说明

### 项目结构

```
/var/www/microfrontend/
├── main-app/             # 主应用
│   ├── index.html
│   ├── assets/
│   └── ...
├── user-management/      # 用户管理子应用
│   ├── index.html
│   ├── assets/
│   └── ...
└── system-management/    # 系统管理子应用
    ├── index.html
    ├── assets/
    └── ...
```

### Nginx配置详解

#### 基本配置

```nginx
server {
    listen 80;                           # 监听端口
    server_name your-domain.com;         # 域名
    root /var/www/microfrontend;         # 根目录
    index index.html;                    # 默认索引文件
}
```

#### 路径映射

```nginx
# 主应用配置
location / {
    alias /var/www/microfrontend/main-app/;
    try_files $uri $uri/ /index.html;  # 支持SPA路由
}

# 子应用配置
location /user/ {
    alias /var/www/microfrontend/user-management/;
    try_files $uri $uri/ /index.html;
}
```

#### 跨域配置

```nginx
# 允许跨域请求
location /api/ {
    # 允许跨域
    add_header 'Access-Control-Allow-Origin' '*';
    add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, PUT, DELETE';
    add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
    
    # 预检请求处理
    if ($request_method = 'OPTIONS') {
        add_header 'Access-Control-Max-Age' 1728000;
        add_header 'Content-Type' 'text/plain charset=UTF-8';
        add_header 'Content-Length' 0;
        return 204;
    }
    
    proxy_pass http://backend-api;
}
```

#### 缓存配置

```nginx
# 静态资源缓存
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 30d;
    add_header Cache-Control "public, max-age=2592000";
}

# HTML文件不缓存
location ~* \.html$ {
    expires -1;
    add_header Cache-Control "no-store, no-cache, must-revalidate, proxy-revalidate";
}
```

#### HTTPS配置

```nginx
server {
    listen 443 ssl http2;
    server_name your-domain.com;
    
    # SSL证书配置
    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    
    # 其他配置...
}
```

### 环境变量配置

#### 主应用环境变量

创建 `.env.production` 文件：

```bash
# 主应用环境变量
VITE_USER_MANAGEMENT_URL=/user
VITE_SYSTEM_MANAGEMENT_URL=/system
```

#### 子应用环境变量

```bash
# 用户管理子应用
VITE_APP_BASE_URL=/user

# 系统管理子应用
VITE_APP_BASE_URL=/system
```

## 🔧 持续集成/持续部署

### GitHub Actions自动部署

创建 `.github/workflows/deploy-cloud-server.yml` 文件：

```yaml
name: Deploy to Cloud Server

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          
      - name: Install pnpm
        run: npm install -g pnpm
        
      - name: Install dependencies
        run: pnpm install && pnpm run install:all
        
      - name: Build
        run: pnpm run build
        
      - name: Deploy to server
        uses: appleboy/scp-action@master
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USERNAME }}
          key: ${{ secrets.SERVER_SSH_KEY }}
          port: ${{ secrets.SERVER_PORT }}
          source: "main-app/dist/,sub-apps/user-management/dist/,sub-apps/system-management/dist/"
          target: "/tmp/microfrontend-deploy"
          strip_components: 2
          
      - name: Execute deployment script
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USERNAME }}
          key: ${{ secrets.SERVER_SSH_KEY }}
          port: ${{ secrets.SERVER_PORT }}
          script: |
            sudo mkdir -p /var/www/microfrontend/{main-app,user-management,system-management}
            sudo cp -r /tmp/microfrontend-deploy/main-app/* /var/www/microfrontend/main-app/
            sudo cp -r /tmp/microfrontend-deploy/user-management/* /var/www/microfrontend/user-management/
            sudo cp -r /tmp/microfrontend-deploy/system-management/* /var/www/microfrontend/system-management/
            sudo chown -R www-data:www-data /var/www/microfrontend
            sudo systemctl restart nginx
```

### 手动部署脚本

创建 `scripts/deploy-cloud-server.sh` 脚本：

```bash
#!/bin/bash

# 云服务器部署脚本
set -e

echo "🚀 开始部署微前端应用到云服务器..."

# 配置信息
SERVER_HOST="your-server-ip"
SERVER_USER="your-username"
SERVER_PATH="/var/www/microfrontend"
SSH_KEY="~/.ssh/id_rsa"

# 构建应用
echo "📦 构建应用..."
pnpm run build

# 创建部署目录
echo "📂 创建远程部署目录..."
ssh -i $SSH_KEY $SERVER_USER@$SERVER_HOST "sudo mkdir -p $SERVER_PATH/{main-app,user-management,system-management}"

# 复制文件
echo "📤 上传构建文件..."
scp -i $SSH_KEY -r main-app/dist/* $SERVER_USER@$SERVER_HOST:$SERVER_PATH/main-app/
scp -i $SSH_KEY -r sub-apps/user-management/dist/* $SERVER_USER@$SERVER_HOST:$SERVER_PATH/user-management/
scp -i $SSH_KEY -r sub-apps/system-management/dist/* $SERVER_USER@$SERVER_HOST:$SERVER_PATH/system-management/

# 设置权限
echo "🔒 设置文件权限..."
ssh -i $SSH_KEY $SERVER_USER@$SERVER_HOST "sudo chown -R www-data:www-data $SERVER_PATH"

# 重启Nginx
echo "🔄 重启Nginx..."
ssh -i $SSH_KEY $SERVER_USER@$SERVER_HOST "sudo systemctl restart nginx"

echo "✅ 部署完成！"
echo "🌐 访问地址: http://your-domain.com"
```

## 🌐 访问地址

- 生产环境: http://your-domain.com
- 用户管理: http://your-domain.com/user
- 系统管理: http://your-domain.com/system

## 🔍 故障排除

### 常见问题

#### 1. 子应用无法加载

**问题描述**: 主应用加载正常，但子应用显示404或白屏。

**解决方案**:
1. 检查Nginx配置中的路径映射是否正确
2. 确保子应用构建时的 `base` 路径设置正确
3. 验证子应用构建产物中的资源路径是否正确
4. 检查浏览器控制台是否有网络错误或JavaScript错误

#### 2. 资源加载404

**问题描述**: 页面样式或脚本文件加载404错误。

**解决方案**:
1. 检查资源路径是否正确
2. 验证文件是否已正确部署到服务器
3. 检查Nginx配置中的路径别名设置
4. 确保构建配置中的 `publicPath` 设置正确

#### 3. 跨域问题

**问题描述**: 浏览器控制台显示CORS错误。

**解决方案**:
1. 在Nginx配置中添加正确的CORS头
2. 确保所有子应用都设置了正确的CORS头
3. 对于预检请求，确保正确处理OPTIONS请求

#### 4. 部署后缓存问题

**问题描述**: 更新代码后，用户仍然看到旧版本内容。

**解决方案**:
1. 配置正确的缓存控制头
2. 使用版本化的文件名或查询参数
3. 在部署后清除CDN缓存（如果使用）
4. 添加缓存破坏技术，如在文件名中添加哈希值

### Nginx日志分析

```bash
# 查看Nginx错误日志
sudo tail -f /var/log/nginx/error.log

# 查看Nginx访问日志
sudo tail -f /var/log/nginx/access.log
```

### 检查服务状态

```bash
# 检查Nginx状态
sudo systemctl status nginx

# 检查服务器资源使用情况
htop
```

## 📊 监控和日志

### 服务器监控

推荐使用以下工具监控服务器状态：

1. **Prometheus + Grafana**: 全面的监控解决方案
2. **Netdata**: 轻量级实时监控
3. **Datadog**: 企业级监控和分析平台

```bash
# 安装Netdata示例
bash <(curl -Ss https://my-netdata.io/kickstart.sh)

# 访问监控面板
# http://your-server-ip:19999
```

### 日志聚合

推荐使用以下工具进行日志管理：

1. **ELK Stack** (Elasticsearch, Logstash, Kibana): 完整的日志分析平台
2. **Graylog**: 集中式日志管理
3. **Loki + Grafana**: 轻量级日志聚合方案

### 应用健康检查

创建健康检查端点并配置监控：

```nginx
# Nginx健康检查配置
location /health {
    access_log off;
    return 200 'OK';
}
```

## 💡 最佳实践

1. **使用容器化部署**: 考虑使用Docker容器化部署应用
2. **实现蓝绿部署**: 使用蓝绿部署策略减少部署风险
3. **配置HTTPS**: 使用Let's Encrypt免费配置HTTPS
4. **设置监控和告警**: 实时监控应用状态并设置关键指标告警
5. **实现自动化备份**: 定期备份应用数据和配置
6. **优化静态资源**: 使用CDN加速静态资源访问
7. **实现灰度发布**: 支持小比例用户测试新功能

## 🔄 版本控制与回滚

### 版本控制策略

```bash
# 部署时创建版本目录
sudo mkdir -p /var/www/microfrontend/versions/v1.0.0
sudo cp -r /var/www/microfrontend/{main-app,user-management,system-management} /var/www/microfrontend/versions/v1.0.0/
```

### 回滚脚本

创建 `scripts/rollback.sh` 脚本：

```bash
#!/bin/bash

# 版本回滚脚本
set -e

if [ -z "$1" ]; then
  echo "请指定要回滚的版本，例如: ./rollback.sh v1.0.0"
  exit 1
fi

VERSION=$1
SERVER_HOST="your-server-ip"
SERVER_USER="your-username"
SERVER_PATH="/var/www/microfrontend"
SSH_KEY="~/.ssh/id_rsa"

echo "🔄 开始回滚到版本: $VERSION..."

# 执行回滚
ssh -i $SSH_KEY $SERVER_USER@$SERVER_HOST "
  if [ ! -d $SERVER_PATH/versions/$VERSION ]; then
    echo '❌ 版本不存在!'
    exit 1
  fi
  
  sudo cp -r $SERVER_PATH/versions/$VERSION/* $SERVER_PATH/
  sudo chown -R www-data:www-data $SERVER_PATH
  sudo systemctl restart nginx
  echo '✅ 回滚完成!'
"

echo "🌐 已回滚到版本: $VERSION"
```

## 🛡️ 安全配置

### 防火墙配置

```bash
# 安装UFW
sudo apt install ufw

# 配置防火墙规则
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https

# 启用防火墙
sudo ufw enable
```

### 设置SSL证书

使用Let's Encrypt免费SSL证书：

```bash
# 安装Certbot
sudo apt install certbot python3-certbot-nginx

# 获取证书
sudo certbot --nginx -d your-domain.com

# 证书自动续期
sudo certbot renew --dry-run
```

### 安全头配置

在Nginx中添加安全相关的HTTP头：

```nginx
# 安全相关的HTTP头
add_header X-Content-Type-Options nosniff;
add_header X-Frame-Options SAMEORIGIN;
add_header X-XSS-Protection "1; mode=block";
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self' https://api.example.com;";
add_header Referrer-Policy "strict-origin-when-cross-origin";
```

## 🎯 后续步骤

1. **自动化部署**: 完善CI/CD流程，实现全自动化部署
2. **性能优化**: 实施前端性能优化策略，提升用户体验
3. **多环境部署**: 配置开发、测试、预发布和生产环境
4. **负载均衡**: 实现多实例部署和负载均衡
5. **容灾备份**: 设计容灾策略和自动备份方案# 云服务器部署指南

本指南将详细介绍如何在云服务器上部署微前端应用，包括环境配置、构建部署、Nginx配置和持续集成方案。

## 🚀 快速开始

### 方式一：使用自动部署脚本 (推荐)

```bash
# 1. 确保已安装Node.js 18+和pnpm
node --version
pnpm --version

# 2. 运行一键部署脚本
./scripts/deploy-cloud-server.sh
```

### 方式二：手动部署

#### 1. 服务器环境准备

```bash
# 更新系统包
sudo apt update && sudo apt upgrade -y

# 安装Node.js和npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# 安装Nginx
sudo apt install -y nginx

# 安装pnpm
npm install -g pnpm

# 安装Git
sudo apt install -y git
```

#### 2. 克隆项目

```bash
# 克隆项目
git clone https://github.com/tywd/qiankun-microfrontend.git
cd qiankun-microfrontend
```

#### 3. 安装依赖

```bash
# 安装根目录依赖
pnpm install

# 安装所有应用依赖
pnpm run install:all
```

#### 4. 构建应用

```bash
# 构建所有应用
pnpm run build
```

#### 5. 配置Nginx

```bash
# 创建Nginx配置文件
sudo nano /etc/nginx/sites-available/microfrontend.conf
```

添加以下配置：

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/microfrontend;
    index index.html;

    # 主应用配置
    location / {
        alias /var/www/microfrontend/main-app/;
        try_files $uri $uri/ /index.html;
    }

    # 用户管理子应用
    location /user/ {
        alias /var/www/microfrontend/user-management/;
        try_files $uri $uri/ /index.html;
    }

    # 系统管理子应用
    location /system/ {
        alias /var/www/microfrontend/system-management/;
        try_files $uri $uri/ /index.html;
    }

    # 启用gzip压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

启用配置并重启Nginx：

```bash
# 创建符号链接
sudo ln -s /etc/nginx/sites-available/microfrontend.conf /etc/nginx/sites-enabled/

# 测试Nginx配置
sudo nginx -t

# 重启Nginx
sudo systemctl restart nginx
```

#### 6. 部署应用

```bash
# 创建部署目录
sudo mkdir -p /var/www/microfrontend

# 复制构建文件
sudo cp -r main-app/dist /var/www/microfrontend/main-app
sudo cp -r sub-apps/user-management/dist /var/www/microfrontend/user-management
sudo cp -r sub-apps/system-management/dist /var/www/microfrontend/system-management

# 设置权限
sudo chown -R www-data:www-data /var/www/microfrontend
```

## 📋 配置说明

### 项目结构

```
/var/www/microfrontend/
├── main-app/             # 主应用
│   ├── index.html
│   ├── assets/
│   └── ...
├── user-management/      # 用户管理子应用
│   ├── index.html
│   ├── assets/
│   └── ...
└── system-management/    # 系统管理子应用
    ├── index.html
    ├── assets/
    └── ...
```

### Nginx配置详解

#### 基本配置

```nginx
server {
    listen 80;                           # 监听端口
    server_name your-domain.com;         # 域名
    root /var/www/microfrontend;         # 根目录
    index index.html;                    # 默认索引文件
}
```

#### 路径映射

```nginx
# 主应用配置
location / {
    alias /var/www/microfrontend/main-app/;
    try_files $uri $uri/ /index.html;  # 支持SPA路由
}

# 子应用配置
location /user/ {
    alias /var/www/microfrontend/user-management/;
    try_files $uri $uri/ /index.html;
}
```

#### 跨域配置

```nginx
# 允许跨域请求
location /api/ {
    # 允许跨域
    add_header 'Access-Control-Allow-Origin' '*';
    add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, PUT, DELETE';
    add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
    
    # 预检请求处理
    if ($request_method = 'OPTIONS') {
        add_header 'Access-Control-Max-Age' 1728000;
        add_header 'Content-Type' 'text/plain charset=UTF-8';
        add_header 'Content-Length' 0;
        return 204;
    }
    
    proxy_pass http://backend-api;
}
```

#### 缓存配置

```nginx
# 静态资源缓存
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 30d;
    add_header Cache-Control "public, max-age=2592000";
}

# HTML文件不缓存
location ~* \.html$ {
    expires -1;
    add_header Cache-Control "no-store, no-cache, must-revalidate, proxy-revalidate";
}
```

#### HTTPS配置

```nginx
server {
    listen 443 ssl http2;
    server_name your-domain.com;
    
    # SSL证书配置
    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    
    # 其他配置...
}
```

### 环境变量配置

#### 主应用环境变量

创建 `.env.production` 文件：

```bash
# 主应用环境变量
VITE_USER_MANAGEMENT_URL=/user
VITE_SYSTEM_MANAGEMENT_URL=/system
```

#### 子应用环境变量

```bash
# 用户管理子应用
VITE_APP_BASE_URL=/user

# 系统管理子应用
VITE_APP_BASE_URL=/system
```

## 🔧 持续集成/持续部署

### GitHub Actions自动部署

创建 `.github/workflows/deploy-cloud-server.yml` 文件：

```yaml
name: Deploy to Cloud Server

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          
      - name: Install pnpm
        run: npm install -g pnpm
        
      - name: Install dependencies
        run: pnpm install && pnpm run install:all
        
      - name: Build
        run: pnpm run build
        
      - name: Deploy to server
        uses: appleboy/scp-action@master
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USERNAME }}
          key: ${{ secrets.SERVER_SSH_KEY }}
          port: ${{ secrets.SERVER_PORT }}
          source: "main-app/dist/,sub-apps/user-management/dist/,sub-apps/system-management/dist/"
          target: "/tmp/microfrontend-deploy"
          strip_components: 2
          
      - name: Execute deployment script
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USERNAME }}
          key: ${{ secrets.SERVER_SSH_KEY }}
          port: ${{ secrets.SERVER_PORT }}
          script: |
            sudo mkdir -p /var/www/microfrontend/{main-app,user-management,system-management}
            sudo cp -r /tmp/microfrontend-deploy/main-app/* /var/www/microfrontend/main-app/
            sudo cp -r /tmp/microfrontend-deploy/user-management/* /var/www/microfrontend/user-management/
            sudo cp -r /tmp/microfrontend-deploy/system-management/* /var/www/microfrontend/system-management/
            sudo chown -R www-data:www-data /var/www/microfrontend
            sudo systemctl restart nginx
```

### 手动部署脚本

创建 `scripts/deploy-cloud-server.sh` 脚本：

```bash
#!/bin/bash

# 云服务器部署脚本
set -e

echo "🚀 开始部署微前端应用到云服务器..."

# 配置信息
SERVER_HOST="your-server-ip"
SERVER_USER="your-username"
SERVER_PATH="/var/www/microfrontend"
SSH_KEY="~/.ssh/id_rsa"

# 构建应用
echo "📦 构建应用..."
pnpm run build

# 创建部署目录
echo "📂 创建远程部署目录..."
ssh -i $SSH_KEY $SERVER_USER@$SERVER_HOST "sudo mkdir -p $SERVER_PATH/{main-app,user-management,system-management}"

# 复制文件
echo "📤 上传构建文件..."
scp -i $SSH_KEY -r main-app/dist/* $SERVER_USER@$SERVER_HOST:$SERVER_PATH/main-app/
scp -i $SSH_KEY -r sub-apps/user-management/dist/* $SERVER_USER@$SERVER_HOST:$SERVER_PATH/user-management/
scp -i $SSH_KEY -r sub-apps/system-management/dist/* $SERVER_USER@$SERVER_HOST:$SERVER_PATH/system-management/

# 设置权限
echo "🔒 设置文件权限..."
ssh -i $SSH_KEY $SERVER_USER@$SERVER_HOST "sudo chown -R www-data:www-data $SERVER_PATH"

# 重启Nginx
echo "🔄 重启Nginx..."
ssh -i $SSH_KEY $SERVER_USER@$SERVER_HOST "sudo systemctl restart nginx"

echo "✅ 部署完成！"
echo "🌐 访问地址: http://your-domain.com"
```

## 🌐 访问地址

- 生产环境: http://your-domain.com
- 用户管理: http://your-domain.com/user
- 系统管理: http://your-domain.com/system

## 🔍 故障排除

### 常见问题

#### 1. 子应用无法加载

**问题描述**: 主应用加载正常，但子应用显示404或白屏。

**解决方案**:
1. 检查Nginx配置中的路径映射是否正确
2. 确保子应用构建时的 `base` 路径设置正确
3. 验证子应用构建产物中的资源路径是否正确
4. 检查浏览器控制台是否有网络错误或JavaScript错误

#### 2. 资源加载404

**问题描述**: 页面样式或脚本文件加载404错误。

**解决方案**:
1. 检查资源路径是否正确
2. 验证文件是否已正确部署到服务器
3. 检查Nginx配置中的路径别名设置
4. 确保构建配置中的 `publicPath` 设置正确

#### 3. 跨域问题

**问题描述**: 浏览器控制台显示CORS错误。

**解决方案**:
1. 在Nginx配置中添加正确的CORS头
2. 确保所有子应用都设置了正确的CORS头
3. 对于预检请求，确保正确处理OPTIONS请求

#### 4. 部署后缓存问题

**问题描述**: 更新代码后，用户仍然看到旧版本内容。

**解决方案**:
1. 配置正确的缓存控制头
2. 使用版本化的文件名或查询参数
3. 在部署后清除CDN缓存（如果使用）
4. 添加缓存破坏技术，如在文件名中添加哈希值

### Nginx日志分析

```bash
# 查看Nginx错误日志
sudo tail -f /var/log/nginx/error.log

# 查看Nginx访问日志
sudo tail -f /var/log/nginx/access.log
```

### 检查服务状态

```bash
# 检查Nginx状态
sudo systemctl status nginx

# 检查服务器资源使用情况
htop
```

## 📊 监控和日志

### 服务器监控

推荐使用以下工具监控服务器状态：

1. **Prometheus + Grafana**: 全面的监控解决方案
2. **Netdata**: 轻量级实时监控
3. **Datadog**: 企业级监控和分析平台

```bash
# 安装Netdata示例
bash <(curl -Ss https://my-netdata.io/kickstart.sh)

# 访问监控面板
# http://your-server-ip:19999
```

### 日志聚合

推荐使用以下工具进行日志管理：

1. **ELK Stack** (Elasticsearch, Logstash, Kibana): 完整的日志分析平台
2. **Graylog**: 集中式日志管理
3. **Loki + Grafana**: 轻量级日志聚合方案

### 应用健康检查

创建健康检查端点并配置监控：

```nginx
# Nginx健康检查配置
location /health {
    access_log off;
    return 200 'OK';
}
```

## 💡 最佳实践

1. **使用容器化部署**: 考虑使用Docker容器化部署应用
2. **实现蓝绿部署**: 使用蓝绿部署策略减少部署风险
3. **配置HTTPS**: 使用Let's Encrypt免费配置HTTPS
4. **设置监控和告警**: 实时监控应用状态并设置关键指标告警
5. **实现自动化备份**: 定期备份应用数据和配置
6. **优化静态资源**: 使用CDN加速静态资源访问
7. **实现灰度发布**: 支持小比例用户测试新功能

## 🔄 版本控制与回滚

### 版本控制策略

```bash
# 部署时创建版本目录
sudo mkdir -p /var/www/microfrontend/versions/v1.0.0
sudo cp -r /var/www/microfrontend/{main-app,user-management,system-management} /var/www/microfrontend/versions/v1.0.0/
```

### 回滚脚本

创建 `scripts/rollback.sh` 脚本：

```bash
#!/bin/bash

# 版本回滚脚本
set -e

if [ -z "$1" ]; then
  echo "请指定要回滚的版本，例如: ./rollback.sh v1.0.0"
  exit 1
fi

VERSION=$1
SERVER_HOST="your-server-ip"
SERVER_USER="your-username"
SERVER_PATH="/var/www/microfrontend"
SSH_KEY="~/.ssh/id_rsa"

echo "🔄 开始回滚到版本: $VERSION..."

# 执行回滚
ssh -i $SSH_KEY $SERVER_USER@$SERVER_HOST "
  if [ ! -d $SERVER_PATH/versions/$VERSION ]; then
    echo '❌ 版本不存在!'
    exit 1
  fi
  
  sudo cp -r $SERVER_PATH/versions/$VERSION/* $SERVER_PATH/
  sudo chown -R www-data:www-data $SERVER_PATH
  sudo systemctl restart nginx
  echo '✅ 回滚完成!'
"

echo "🌐 已回滚到版本: $VERSION"
```

## 🛡️ 安全配置

### 防火墙配置

```bash
# 安装UFW
sudo apt install ufw

# 配置防火墙规则
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https

# 启用防火墙
sudo ufw enable
```

### 设置SSL证书

使用Let's Encrypt免费SSL证书：

```bash
# 安装Certbot
sudo apt install certbot python3-certbot-nginx

# 获取证书
sudo certbot --nginx -d your-domain.com

# 证书自动续期
sudo certbot renew --dry-run
```

### 安全头配置

在Nginx中添加安全相关的HTTP头：

```nginx
# 安全相关的HTTP头
add_header X-Content-Type-Options nosniff;
add_header X-Frame-Options SAMEORIGIN;
add_header X-XSS-Protection "1; mode=block";
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self' https://api.example.com;";
add_header Referrer-Policy "strict-origin-when-cross-origin";
```

## 🎯 后续步骤

1. **自动化部署**: 完善CI/CD流程，实现全自动化部署
2. **性能优化**: 实施前端性能优化策略，提升用户体验
3. **多环境部署**: 配置开发、测试、预发布和生产环境
4. **负载均衡**: 实现多实例部署和负载均衡
5. **容灾备份**: 设计容灾策略和自动备份方案