#!/bin/bash

# 云服务器自动部署脚本
# 支持阿里云ECS、华为云ECS、腾讯云CVM等

set -e

echo "🚀 开始微前端应用部署..."

# 配置变量
PROJECT_DIR="/var/www/qiankun-app"
BACKUP_DIR="/var/backups/qiankun-app"
NGINX_CONFIG="/etc/nginx/sites-available/qiankun-app"
LOG_FILE="/var/log/qiankun-deploy.log"

# 记录日志函数
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a $LOG_FILE
}

# 备份当前版本
backup_current_version() {
    if [ -d "$PROJECT_DIR" ]; then
        log "📦 备份当前版本..."
        sudo mkdir -p $BACKUP_DIR
        sudo cp -r $PROJECT_DIR $BACKUP_DIR/backup-$(date +%Y%m%d-%H%M%S)
        log "✅ 备份完成"
    fi
}

# 拉取最新代码
pull_latest_code() {
    log "📥 拉取最新代码..."
    cd $PROJECT_DIR
    sudo git fetch --all
    sudo git reset --hard origin/main
    log "✅ 代码更新完成"
}

# 安装依赖
install_dependencies() {
    log "📦 安装项目依赖..."
    sudo pnpm install --frozen-lockfile
    log "✅ 依赖安装完成"
}

# 构建项目
build_project() {
    log "🔨 构建项目..."
    
    # 构建主应用
    log "构建主应用..."
    cd $PROJECT_DIR/main-app
    sudo pnpm build
    
    # 构建用户管理子应用
    log "构建用户管理子应用..."
    cd $PROJECT_DIR/sub-apps/user-management
    sudo pnpm build
    
    # 构建系统管理子应用
    log "构建系统管理子应用..."
    cd $PROJECT_DIR/sub-apps/system-management
    sudo pnpm build
    
    log "✅ 项目构建完成"
}

# 部署到Nginx
deploy_to_nginx() {
    log "🌐 部署到Nginx..."
    
    # 创建部署目录
    sudo mkdir -p /var/www/html/qiankun-app
    
    # 复制主应用文件
    sudo cp -r $PROJECT_DIR/main-app/dist/* /var/www/html/qiankun-app/
    
    # 复制子应用文件
    sudo mkdir -p /var/www/html/qiankun-app/user-management
    sudo cp -r $PROJECT_DIR/sub-apps/user-management/dist/* /var/www/html/qiankun-app/user-management/
    
    sudo mkdir -p /var/www/html/qiankun-app/system-management
    sudo cp -r $PROJECT_DIR/sub-apps/system-management/dist/* /var/www/html/qiankun-app/system-management/
    
    # 设置权限
    sudo chown -R www-data:www-data /var/www/html/qiankun-app
    sudo chmod -R 755 /var/www/html/qiankun-app
    
    log "✅ Nginx部署完成"
}

# 重启Nginx
restart_nginx() {
    log "🔄 重启Nginx服务..."
    sudo nginx -t && sudo systemctl reload nginx
    log "✅ Nginx重启完成"
}

# 健康检查
health_check() {
    log "🩺 进行健康检查..."
    
    # 检查主应用
    if curl -f -s http://localhost/ > /dev/null; then
        log "✅ 主应用健康检查通过"
    else
        log "❌ 主应用健康检查失败"
        return 1
    fi
    
    # 检查子应用
    if curl -f -s http://localhost/user-management/ > /dev/null; then
        log "✅ 用户管理子应用健康检查通过"
    else
        log "⚠️ 用户管理子应用健康检查失败"
    fi
    
    log "✅ 健康检查完成"
}

# 主流程
main() {
    log "🚀 开始部署流程..."
    
    backup_current_version
    pull_latest_code
    install_dependencies
    build_project
    deploy_to_nginx
    restart_nginx
    health_check
    
    log "🎉 部署完成！"
    log "📍 访问地址: http://your-domain.com"
}

# 错误处理
trap 'log "❌ 部署过程中发生错误，请检查日志: $LOG_FILE"' ERR

# 执行主流程
main "$@"