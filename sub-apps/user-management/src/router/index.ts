import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/list'
  },
  {
    path: '/list',
    name: 'UserList',
    component: () => import('@/views/UserList.vue'),
    meta: {
      title: '用户列表'
    }
  },
  {
    path: '/add',
    name: 'UserAdd',
    component: () => import('@/views/UserAdd.vue'),
    meta: {
      title: '添加用户'
    }
  },
  {
    path: '/edit/:id',
    name: 'UserEdit',
    component: () => import('@/views/UserEdit.vue'),
    meta: {
      title: '编辑用户'
    }
  },
  {
    path: '/profile/:id',
    name: 'UserProfile',
    component: () => import('@/views/UserProfile.vue'),
    meta: {
      title: '用户详情'
    }
  },
  {
    // 添加一个全局匹配路由，处理其他路径
    path: '/:pathMatch(.*)*',
    redirect: '/list'
  }
]

const router = createRouter({
  history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/user' : '/'),
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  console.log('用户管理子应用路由变化:', {
    to: to.path,
    from: from.path,
    fullPath: to.fullPath,
    matched: to.matched.length,
    qiankunEnv: qiankunWindow.__POWERED_BY_QIANKUN__
  })
  
  // 设置页面标题
  if (to.meta?.title) {
    document.title = `用户管理 - ${to.meta.title}`
  }
  next()
})

router.afterEach((to) => {
  console.log('用户管理子应用路由切换完成:', to.path)
})

export default router