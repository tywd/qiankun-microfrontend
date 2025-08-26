import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
  },
  {
    path: '/settings',
    name: 'SystemSettings',
    component: () => import('@/views/SystemSettings.vue'),
    meta: {
      title: '系统配置'
    }
  },
  {
    path: '/permissions',
    name: 'SystemPermissions',
    component: () => import('@/views/SystemPermissions.vue'),
    meta: {
      title: '权限管理'
    }
  },
  {
    path: '/logs',
    name: 'SystemLogs',
    component: () => import('@/views/SystemLogs.vue'),
    meta: {
      title: '日志管理'
    }
  },
//   {
//     // 添加一个全局匹配路由，处理其他路径
//     path: '/:pathMatch(.*)*',
//     redirect: '/settings'
//   }
]

const router = createRouter({
  history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/system' : '/'),
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  console.log('系统管理子应用路由变化:', {
    to: to.path,
    from: from.path,
    fullPath: to.fullPath,
    matched: to.matched.length,
    qiankunEnv: qiankunWindow.__POWERED_BY_QIANKUN__
  })
  
  // 设置页面标题
  if (to.meta?.title) {
    document.title = `系统管理 - ${to.meta.title}`
  }
  next()
})

router.afterEach((to) => {
  console.log('系统管理子应用路由切换完成:', to.path)
})

export default router