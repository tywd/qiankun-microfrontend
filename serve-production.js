#!/usr/bin/env node

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const app = express();

// 启动端口配置
const MAIN_PORT = 3000;
const USER_PORT = 3001;
const SYSTEM_PORT = 3002;

// 启动主应用服务器
function startMainApp() {
  const mainApp = express();
  
  // 服务主应用静态文件
  mainApp.use(express.static(path.join(__dirname, 'main-app/dist')));
  
  // SPA路由支持
  mainApp.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'main-app/dist/index.html'));
  });
  
  mainApp.listen(MAIN_PORT, () => {
    console.log(`🚀 主应用已启动: http://localhost:${MAIN_PORT}`);
  });
}

// 启动用户管理子应用服务器
function startUserApp() {
  const userApp = express();
  
  // 添加CORS支持
  userApp.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
  });
  
  // 服务用户管理应用静态文件
  userApp.use(express.static(path.join(__dirname, 'sub-apps/user-management/dist')));
  
  // 返回主要的JS文件（qiankun需要）
  userApp.get('*', (req, res) => {
    // 如果请求的是JS文件，直接返回
    if (req.path.endsWith('.js')) {
      res.sendFile(path.join(__dirname, 'sub-apps/user-management/dist', req.path));
    } else if (req.path.endsWith('.css')) {
      res.sendFile(path.join(__dirname, 'sub-apps/user-management/dist', req.path));
    } else {
      // 对于其他请求，返回主JS文件
      res.sendFile(path.join(__dirname, 'sub-apps/user-management/dist/user-management.js'));
    }
  });
  
  userApp.listen(USER_PORT, () => {
    console.log(`👤 用户管理子应用已启动: http://localhost:${USER_PORT}`);
  });
}

// 启动系统管理子应用服务器
function startSystemApp() {
  const systemApp = express();
  
  // 添加CORS支持
  systemApp.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
  });
  
  // 服务系统管理应用静态文件
  systemApp.use(express.static(path.join(__dirname, 'sub-apps/system-management/dist')));
  
  systemApp.get('*', (req, res) => {
    if (req.path.endsWith('.js')) {
      res.sendFile(path.join(__dirname, 'sub-apps/system-management/dist', req.path));
    } else if (req.path.endsWith('.css')) {
      res.sendFile(path.join(__dirname, 'sub-apps/system-management/dist', req.path));
    } else {
      res.sendFile(path.join(__dirname, 'sub-apps/system-management/dist/system-management.js'));
    }
  });
  
  systemApp.listen(SYSTEM_PORT, () => {
    console.log(`⚙️  系统管理子应用已启动: http://localhost:${SYSTEM_PORT}`);
  });
}

// 启动所有服务
console.log('🚀 正在启动微前端生产环境测试服务器...\n');

startMainApp();
startUserApp();
startSystemApp();

console.log('\n✅ 所有服务已启动！');
console.log('📱 访问主应用: http://localhost:3000');
console.log('\n🔍 服务状态:');
console.log(`   主应用:      http://localhost:${MAIN_PORT}`);
console.log(`   用户管理:    http://localhost:${USER_PORT}`);
console.log(`   系统管理:    http://localhost:${SYSTEM_PORT}`);
console.log('\n按 Ctrl+C 停止所有服务');

// 优雅关闭
process.on('SIGINT', () => {
  console.log('\n🛑 正在关闭所有服务...');
  process.exit(0);
});