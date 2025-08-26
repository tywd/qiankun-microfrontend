# 🚀 简化部署方案

## 当前问题分析

微前端在Vercel上部署面临的主要挑战：

1. **跨域资源加载** - 子应用资源需要被主应用跨域加载
2. **qiankun生命周期暴露** - 子应用需要正确暴露微前端接口
3. **环境变量同步** - 生产环境配置复杂
4. **构建输出格式** - 需要特殊的UMD格式支持

## 💡 推荐方案：单一应用架构

### 方案优势
- ✅ 零配置部署，直接用Vercel部署
- ✅ 无跨域问题
- ✅ 构建速度快，包体积小
- ✅ SEO友好
- ✅ 调试简单

### 实施步骤

#### 1. 重构为单一应用
```bash
# 创建新的统一应用
mkdir unified-app
cd unified-app

# 初始化项目
npm create vue@latest . --typescript
```

#### 2. 迁移现有功能
- 将 `sub-apps/user-management` 的功能迁移为 `/src/views/user/` 路由
- 将 `sub-apps/system-management` 的功能迁移为 `/src/views/system/` 路由
- 保持现有的共享组件和工具函数

#### 3. 路由配置
```typescript
const routes = [
  {
    path: '/user',
    children: [
      { path: 'list', component: () => import('@/views/user/UserList.vue') },
      { path: 'edit/:id?', component: () => import('@/views/user/UserEdit.vue') }
    ]
  },
  {
    path: '/system',
    children: [
      { path: 'settings', component: () => import('@/views/system/Settings.vue') },
      { path: 'logs', component: () => import('@/views/system/Logs.vue') }
    ]
  }
]
```

## 🔧 备选方案：修复当前微前端

如果坚持使用微前端架构，需要以下修复：

### 1. 子应用UMD构建配置
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'userManagement',
      formats: ['umd'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: {
        globals: {
          vue: 'Vue',
          'vue-router': 'VueRouter'
        }
      }
    }
  }
})
```

### 2. 修改entry配置
```typescript
// 主应用micro/index.ts
entry: 'https://qiankun-user-management.vercel.app/index.umd.js'
```

### 3. 添加全局window暴露
```typescript
// 子应用main.ts
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}

// 暴露qiankun生命周期到全局
window.userManagement = {
  mount: render,
  unmount: () => app?.unmount()
}
```

## 📊 方案对比

| 特性 | 单一应用 | 微前端 |
|------|----------|--------|
| 部署复杂度 | ⭐ 简单 | ⭐⭐⭐⭐⭐ 复杂 |
| 开发效率 | ⭐⭐⭐⭐⭐ 高 | ⭐⭐⭐ 中等 |
| 维护成本 | ⭐⭐⭐⭐⭐ 低 | ⭐⭐ 高 |
| 性能 | ⭐⭐⭐⭐⭐ 优秀 | ⭐⭐⭐ 良好 |
| 团队协作 | ⭐⭐⭐ 适中 | ⭐⭐⭐⭐⭐ 优秀 |

## 🎯 建议

对于当前项目规模，**强烈推荐使用单一应用方案**：
1. 开发和部署更简单
2. 性能更好
3. 维护成本更低
4. 可以后续再考虑微前端重构