import { registerMicroApps, start, addGlobalUncaughtErrorHandler, initGlobalState } from 'qiankun'
import type { RegistrableApp } from 'qiankun'
import { globalEventBus, appEvents } from '../../../shared/eventBus'
import { SHARED_CONFIG } from '../../../shared/index'

// 微应用配置
const microApps: RegistrableApp<any>[] = [
  {
    name: 'user-management',
    entry: process.env.NODE_ENV === 'development' 
      ? '//localhost:8081'  // 开发环境
      : import.meta.env.VITE_USER_MANAGEMENT_URL || '//qiankun-user-management.vercel.app', // Vercel部署环境
    container: '#micro-app-container',
    activeRule: '/user',
    props: {
      routerBase: '/user',
      shared: {
        eventBus: globalEventBus,
        config: SHARED_CONFIG
      }
    }
  },
  {
    name: 'system-management',
    entry: process.env.NODE_ENV === 'development'
      ? '//localhost:8082'  // 开发环境
      : import.meta.env.VITE_SYSTEM_MANAGEMENT_URL || '//qiankun-system-management.vercel.app', // Vercel部署环境
    container: '#micro-app-container',
    activeRule: '/system',
    props: {
      routerBase: '/system',
      shared: {
        eventBus: globalEventBus,
        config: SHARED_CONFIG
      }
    }
  }
]

// 初始化全局状态
const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: null,
  theme: 'default',
  permissions: []
})

// 注册微应用
export function registerApps() {
  registerMicroApps(microApps, {
    beforeLoad: (app) => {
      console.log('before load', app)
      appEvents.mounted(app.name)
      return Promise.resolve()
    },
    beforeMount: (app) => {
      console.log('before mount', app)
      return Promise.resolve()
    },
    afterMount: (app) => {
      console.log('after mount', app)
      return Promise.resolve()
    },
    beforeUnmount: (app) => {
      console.log('before unmount', app)
      return Promise.resolve()
    },
    afterUnmount: (app) => {
      console.log('after unmount', app)
      appEvents.unmounted(app.name)
      return Promise.resolve()
    }
  })
}

// 启动微前端
export function startMicroApps() {
  start({
    prefetch: 'all', // 预加载所有微应用
    sandbox: {
      strictStyleIsolation: false,  // 关闭严格样式隔离，避免Element Plus样式问题
      experimentalStyleIsolation: true // 使用实验性样式隔离
    },
    singular: false, // 是否为单实例场景
    fetch: window.fetch // 自定义fetch
  })
}

// 全局错误处理
export function setupErrorHandler() {
  addGlobalUncaughtErrorHandler((event) => {
    console.error('微应用错误:', event)
    appEvents.error('unknown', event)
    // 这里可以添加错误上报逻辑
  })
}

// 导出全局状态管理
export { onGlobalStateChange, setGlobalState }
export { microApps }