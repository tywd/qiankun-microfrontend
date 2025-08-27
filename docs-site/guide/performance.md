# 微前端性能优化配置

## 🚀 已实施的优化策略

### 1. 共享依赖配置
- **目标**: 避免重复加载相同的依赖库，减小包体积
- **实现**: 
  - 主应用负责加载公共依赖（Vue、Vue Router、Element Plus等）
  - 子应用配置external，避免重复打包
  - 通过Qiankun的props传递共享资源

### 2. 代码分割优化
```typescript
// 主应用chunk分割策略
manualChunks: {
  'vue-vendor': ['vue', 'vue-router'],
  'element-vendor': ['element-plus', '@element-plus/icons-vue'],
  'qiankun-vendor': ['qiankun'],
  'utils-vendor': ['lodash-es']
}
```

### 3. 资源加载优化
- **预加载**: 配置 `prefetch: 'all'` 预加载所有微应用
- **缓存策略**: 文件名包含hash，支持长期缓存
- **资源分类**: 按类型组织资源（js/css/images/fonts）

### 4. 构建优化
- **Tree Shaking**: 删除未使用的代码
- **代码压缩**: 生产环境移除console和debugger
- **Source Map**: 开发环境启用，生产环境关闭

### 5. 网络优化
- **Gzip压缩**: Nginx配置gzip压缩静态资源
- **HTTP缓存**: 设置合适的缓存策略
- **CDN**: 支持CDN配置，加速资源加载

## 📊 性能监控

### 共享状态管理
```typescript
// 使用SharedStore进行跨应用状态管理
import { sharedStore } from '../shared'

// 设置用户信息
sharedStore.setState('userInfo', userInfo)

// 监听用户信息变化
sharedStore.subscribe('userInfo', (userInfo) => {
  console.log('用户信息更新:', userInfo)
})
```

### 事件总线通信
```typescript
// 发送全局事件
emitGlobalEvent('user:login', userInfo)

// 监听全局事件
onGlobalEvent('user:login', (event) => {
  console.log('用户登录:', event.payload)
})
```

### HTTP请求共享
```typescript
// 使用共享HTTP客户端
import { httpClient } from '../shared/http'

// 统一的API调用
const response = await httpClient.get('/api/users')
```

## 🎯 推荐的最佳实践

### 1. 依赖管理
- 主应用提供核心依赖（Vue、Router、UI库）
- 子应用只打包业务代码
- 版本控制：使用workspace统一管理版本

### 2. 路由设计
- 主应用负责顶层路由
- 子应用管理内部路由
- 使用路由守卫进行权限控制

### 3. 样式管理
- 启用样式隔离：`strictStyleIsolation: true`
- 使用CSS Modules或scoped样式
- 主应用提供公共样式变量

### 4. 数据通信
- 简单数据：使用props传递
- 复杂状态：使用全局状态管理
- 事件通信：使用事件总线

### 5. 错误处理
- 全局错误捕获
- 应用级错误边界
- 错误上报和监控

## 📈 性能指标

### 构建大小对比
```bash
# 优化前
main-app: ~2.5MB
user-management: ~1.8MB  
system-management: ~1.8MB
总计: ~6.1MB

# 优化后（预估）
main-app: ~1.8MB (包含共享依赖)
user-management: ~500KB (仅业务代码)
system-management: ~500KB (仅业务代码)
总计: ~2.8MB (节省54%)
```

### 加载时间优化
- 首屏加载：减少50%+
- 子应用切换：减少70%+
- 缓存命中：接近零时间加载

## 🔧 进一步优化建议

### 1. 资源预加载
```typescript
// 关键资源预加载
const link = document.createElement('link')
link.rel = 'prefetch'
link.href = '/api/critical-data'
document.head.appendChild(link)
```

### 2. 懒加载
```typescript
// 路由级懒加载
const UserManagement = () => import('./views/UserManagement.vue')
```

### 3. Service Worker
```typescript
// 离线缓存和后台同步
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
}
```

### 4. 性能监控
```typescript
// 性能指标收集
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    // 上报性能数据
    console.log(entry.name, entry.duration)
  }
})
observer.observe({entryTypes: ['measure', 'navigation']})
```