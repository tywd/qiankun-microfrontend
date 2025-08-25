/**
 * 微前端共享依赖配置
 * 用于优化加载性能，避免重复加载相同的依赖
 */

// 共享的核心依赖库
export const SHARED_DEPENDENCIES = {
  // Vue 核心
  vue: {
    singleton: true,
    requiredVersion: '^3.5.0'
  },
  'vue-router': {
    singleton: true,
    requiredVersion: '^4.5.0'
  },
  
  // UI 组件库
  'element-plus': {
    singleton: true,
    requiredVersion: '^2.11.0'
  },
  '@element-plus/icons-vue': {
    singleton: true,
    requiredVersion: '^2.3.0'
  },
  
  // 工具库
  'lodash-es': {
    singleton: false,
    requiredVersion: '^4.17.0'
  },
  axios: {
    singleton: true,
    requiredVersion: '^1.6.0'
  }
}

// 共享的全局配置
export const SHARED_CONFIG = {
  // API 基础路径
  API_BASE_URL: process.env.NODE_ENV === 'production' 
    ? 'https://api.your-domain.com' 
    : 'http://localhost:3000',
    
  // 静态资源CDN路径
  CDN_BASE_URL: process.env.NODE_ENV === 'production'
    ? 'https://cdn.your-domain.com'
    : '',
    
  // 应用配置
  APP_CONFIG: {
    title: '企业管理后台',
    version: '1.0.0',
    theme: 'default'
  }
}

// 共享的工具函数
export const SHARED_UTILS = {
  // 格式化日期
  formatDate: (date: Date | string, format = 'YYYY-MM-DD HH:mm:ss') => {
    const d = new Date(date)
    const year = d.getFullYear()
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    const hours = String(d.getHours()).padStart(2, '0')
    const minutes = String(d.getMinutes()).padStart(2, '0')
    const seconds = String(d.getSeconds()).padStart(2, '0')
    
    return format
      .replace('YYYY', year.toString())
      .replace('MM', month)
      .replace('DD', day)
      .replace('HH', hours)
      .replace('mm', minutes)
      .replace('ss', seconds)
  },
  
  // 防抖函数
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait: number,
    immediate = false
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout | null = null
    return (...args: Parameters<T>) => {
      const later = () => {
        timeout = null
        if (!immediate) func(...args)
      }
      const callNow = immediate && !timeout
      if (timeout) clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func(...args)
    }
  },
  
  // 节流函数
  throttle: <T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
  }
}

// 共享的状态管理
export class SharedStore {
  private static instance: SharedStore
  private store: Map<string, any> = new Map()
  private listeners: Map<string, Set<Function>> = new Map()

  static getInstance(): SharedStore {
    if (!SharedStore.instance) {
      SharedStore.instance = new SharedStore()
    }
    return SharedStore.instance
  }

  // 设置共享状态
  setState(key: string, value: any): void {
    this.store.set(key, value)
    this.notifyListeners(key, value)
  }

  // 获取共享状态
  getState(key: string): any {
    return this.store.get(key)
  }

  // 订阅状态变化
  subscribe(key: string, callback: Function): () => void {
    if (!this.listeners.has(key)) {
      this.listeners.set(key, new Set())
    }
    this.listeners.get(key)!.add(callback)

    // 返回取消订阅函数
    return () => {
      this.listeners.get(key)?.delete(callback)
    }
  }

  // 通知监听器
  private notifyListeners(key: string, value: any): void {
    this.listeners.get(key)?.forEach(callback => callback(value))
  }
}

// 导出全局共享实例
export const sharedStore = SharedStore.getInstance()