#!/bin/bash

# 企业级微前端部署脚本
# 支持本地部署和服务器部署

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 日志函数
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 检查依赖
check_dependencies() {
    log_info "检查依赖环境..."
    
    if ! command -v node &> /dev/null; then
        log_error "Node.js 未安装，请先安装 Node.js"
        exit 1
    fi
    
    if ! command -v pnpm &> /dev/null; then
        log_error "pnpm 未安装，正在安装..."
        npm install -g pnpm
    fi
    
    if ! command -v docker &> /dev/null; then
        log_warning "Docker 未安装，将跳过 Docker 部署"
    fi
    
    log_success "依赖检查完成"
}

# 安装依赖
install_dependencies() {
    log_info "安装项目依赖..."
    pnpm install:all
    log_success "依赖安装完成"
}

# 构建应用
build_applications() {
    log_info "构建所有应用..."
    
    # 构建主应用
    log_info "构建主应用..."
    pnpm build:main
    
    # 构建子应用
    log_info "构建用户管理子应用..."
    pnpm build:user
    
    log_info "构建系统管理子应用..."
    pnpm build:system
    
    log_success "所有应用构建完成"
}

# Docker 部署
deploy_with_docker() {
    log_info "使用 Docker 部署..."
    
    if ! command -v docker &> /dev/null; then
        log_error "Docker 未安装，无法进行 Docker 部署"
        return 1
    fi
    
    # 构建镜像
    log_info "构建 Docker 镜像..."
    docker build -f docker/main-app.Dockerfile -t main-app:latest .
    docker build -f docker/user-management.Dockerfile -t user-management:latest .
    docker build -f docker/system-management.Dockerfile -t system-management:latest .
    
    # 启动容器
    log_info "启动容器..."
    docker-compose up -d
    
    log_success "Docker 部署完成"
    log_info "访问地址:"
    log_info "  主应用: http://localhost:8080"
    log_info "  用户管理: http://localhost:8081"
    log_info "  系统管理: http://localhost:8082"
}

# 本地部署
deploy_local() {
    log_info "本地部署模式..."
    
    # 创建部署目录
    DEPLOY_DIR="./deploy"
    mkdir -p $DEPLOY_DIR
    
    # 复制构建产物
    cp -r main-app/dist $DEPLOY_DIR/main-app
    cp -r sub-apps/user-management/dist $DEPLOY_DIR/user-management
    cp -r sub-apps/system-management/dist $DEPLOY_DIR/system-management
    
    # 复制配置文件
    cp nginx/nginx.conf $DEPLOY_DIR/
    
    log_success "本地部署完成"
    log_info "部署文件位置: $DEPLOY_DIR"
}

# 服务器部署
deploy_to_server() {
    local server_host=$1
    local server_user=$2
    local deploy_path=$3
    
    if [ -z "$server_host" ] || [ -z "$server_user" ] || [ -z "$deploy_path" ]; then
        log_error "服务器部署参数不完整"
        log_info "用法: $0 server <host> <user> <deploy_path>"
        exit 1
    fi
    
    log_info "部署到服务器: $server_user@$server_host:$deploy_path"
    
    # 创建远程目录
    ssh $server_user@$server_host "mkdir -p $deploy_path"
    
    # 上传文件
    log_info "上传构建产物..."
    scp -r main-app/dist $server_user@$server_host:$deploy_path/main-app
    scp -r sub-apps/user-management/dist $server_user@$server_host:$deploy_path/user-management
    scp -r sub-apps/system-management/dist $server_user@$server_host:$deploy_path/system-management
    
    # 上传配置文件
    scp nginx/nginx.conf $server_user@$server_host:$deploy_path/
    scp docker-compose.yml $server_user@$server_host:$deploy_path/
    
    # 重启服务
    ssh $server_user@$server_host "cd $deploy_path && docker-compose up -d"
    
    log_success "服务器部署完成"
}

# 清理构建产物
clean() {
    log_info "清理构建产物..."
    pnpm clean
    rm -rf deploy
    docker system prune -f 2>/dev/null || true
    log_success "清理完成"
}

# 健康检查
health_check() {
    log_info "执行健康检查..."
    
    # 检查主应用
    if curl -f http://localhost:8080 >/dev/null 2>&1; then
        log_success "主应用运行正常"
    else
        log_error "主应用无法访问"
    fi
    
    # 检查用户管理子应用
    if curl -f http://localhost:8081 >/dev/null 2>&1; then
        log_success "用户管理子应用运行正常"
    else
        log_error "用户管理子应用无法访问"
    fi
    
    # 检查系统管理子应用
    if curl -f http://localhost:8082 >/dev/null 2>&1; then
        log_success "系统管理子应用运行正常"
    else
        log_error "系统管理子应用无法访问"
    fi
}

# 显示帮助信息
show_help() {
    echo "企业级微前端部署脚本"
    echo ""
    echo "用法:"
    echo "  $0 [command] [options]"
    echo ""
    echo "命令:"
    echo "  install     安装依赖"
    echo "  build       构建所有应用"
    echo "  docker      使用 Docker 部署"
    echo "  local       本地部署"
    echo "  server      部署到服务器"
    echo "  clean       清理构建产物"
    echo "  health      健康检查"
    echo "  help        显示帮助信息"
    echo ""
    echo "示例:"
    echo "  $0 install"
    echo "  $0 build"
    echo "  $0 docker"
    echo "  $0 local"
    echo "  $0 server user@host /opt/microfrontend"
    echo "  $0 clean"
}

# 主函数
main() {
    case $1 in
        "install")
            check_dependencies
            install_dependencies
            ;;
        "build")
            check_dependencies
            install_dependencies
            build_applications
            ;;
        "docker")
            check_dependencies
            install_dependencies
            build_applications
            deploy_with_docker
            ;;
        "local")
            check_dependencies
            install_dependencies
            build_applications
            deploy_local
            ;;
        "server")
            check_dependencies
            install_dependencies
            build_applications
            deploy_to_server $2 $3 $4
            ;;
        "clean")
            clean
            ;;
        "health")
            health_check
            ;;
        "help"|"--help"|"-h"|"")
            show_help
            ;;
        *)
            log_error "未知命令: $1"
            show_help
            exit 1
            ;;
    esac
}

# 执行主函数
main "$@"