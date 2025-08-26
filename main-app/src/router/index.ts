import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard.vue'),
    meta: {
      title: '仪表盘',
      icon: 'Dashboard'
    }
  },
  {
    // 处理精确的/user路径，重定向到/user/list
    path: '/user',
    redirect: '/user/list'
  },
  {
    path: '/user/:path(.*)*',
    name: 'UserManagement',
    component: () => import('@/components/MicroApp.vue'),
    meta: {
      title: '用户管理',
      icon: 'User',
      microApp: 'user-management'
    }
  },
  {
    // 处理精确的/system路径，重定向到/system/settings
    path: '/system',
    redirect: '/system/settings'
  },
  {
    path: '/system/:path(.*)*',
    name: 'SystemManagement',
    component: () => import('@/components/MicroApp.vue'),
    meta: {
      title: '系统管理',
      icon: 'Setting',
      microApp: 'system-management'
    }
  },
  {
    // 兜底路由：处理所有未匹配的路径
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/dashboard'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫
router.beforeEach((to, _from, next) => {
  // 设置页面标题
  if (to.meta?.title) {
    document.title = `企业管理后台 - ${to.meta.title}`
  }
  next()
})

export default router