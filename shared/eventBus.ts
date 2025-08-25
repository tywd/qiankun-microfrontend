/**
 * 微前端全局事件总线
 * 用于主应用和子应用之间的通信
 */

import type { GlobalEvent } from './types'

// 事件类型常量
export const EVENT_TYPES = {
  // 用户相关事件
  USER_LOGIN: 'user:login',
  USER_LOGOUT: 'user:logout',
  USER_INFO_UPDATE: 'user:info:update',
  
  // 路由相关事件
  ROUTE_CHANGE: 'route:change',
  ROUTE_BEFORE_CHANGE: 'route:before:change',
  
  // 应用相关事件
  APP_MOUNTED: 'app:mounted',
  APP_UNMOUNTED: 'app:unmounted',
  APP_ERROR: 'app:error',
  
  // 数据相关事件
  DATA_REFRESH: 'data:refresh',
  DATA_UPDATE: 'data:update',
  
  // 主题相关事件
  THEME_CHANGE: 'theme:change',
  
  // 权限相关事件
  PERMISSION_CHANGE: 'permission:change'
} as const

// 事件监听器类型
type EventListener = (event: GlobalEvent) => void

// 全局事件总线类
class GlobalEventBus {
  private static instance: GlobalEventBus
  private listeners: Map<string, Set<EventListener>> = new Map()
  private history: GlobalEvent[] = []
  private maxHistorySize = 100

  // 单例模式
  static getInstance(): GlobalEventBus {
    if (!GlobalEventBus.instance) {
      GlobalEventBus.instance = new GlobalEventBus()
    }
    return GlobalEventBus.instance
  }

  // 发送事件
  emit(type: string, payload?: any, source = 'unknown'): void {
    const event: GlobalEvent = {
      type,
      payload,
      source,
      timestamp: Date.now()
    }

    // 记录事件历史
    this.addToHistory(event)

    // 通知所有监听器
    const eventListeners = this.listeners.get(type)
    if (eventListeners) {
      eventListeners.forEach(listener => {
        try {
          listener(event)
        } catch (error) {
          console.error(`Error in event listener for ${type}:`, error)
        }
      })
    }

    // 通知通配符监听器
    const wildcardListeners = this.listeners.get('*')
    if (wildcardListeners) {
      wildcardListeners.forEach(listener => {
        try {
          listener(event)
        } catch (error) {
          console.error(`Error in wildcard listener:`, error)
        }
      })
    }
  }

  // 监听事件
  on(type: string, listener: EventListener): () => void {
    if (!this.listeners.has(type)) {
      this.listeners.set(type, new Set())
    }
    
    this.listeners.get(type)!.add(listener)

    // 返回取消监听函数
    return () => {
      this.off(type, listener)
    }
  }

  // 取消监听
  off(type: string, listener: EventListener): void {
    const eventListeners = this.listeners.get(type)
    if (eventListeners) {
      eventListeners.delete(listener)
      if (eventListeners.size === 0) {
        this.listeners.delete(type)
      }
    }
  }

  // 一次性监听
  once(type: string, listener: EventListener): () => void {
    const onceListener = (event: GlobalEvent) => {
      listener(event)
      this.off(type, onceListener)
    }
    
    return this.on(type, onceListener)
  }

  // 获取事件历史
  getHistory(type?: string): GlobalEvent[] {
    if (type) {
      return this.history.filter(event => event.type === type)
    }
    return [...this.history]
  }

  // 清空事件历史
  clearHistory(): void {
    this.history = []
  }

  // 获取所有监听器信息
  getListenersInfo(): Record<string, number> {
    const info: Record<string, number> = {}
    this.listeners.forEach((listeners, type) => {
      info[type] = listeners.size
    })
    return info
  }

  // 添加到历史记录
  private addToHistory(event: GlobalEvent): void {
    this.history.push(event)
    
    // 限制历史记录大小
    if (this.history.length > this.maxHistorySize) {
      this.history.shift()
    }
  }
}

// 导出全局事件总线实例
export const globalEventBus = GlobalEventBus.getInstance()

// 便捷的事件发送函数
export const emitGlobalEvent = (type: string, payload?: any, source?: string) => {
  globalEventBus.emit(type, payload, source)
}

// 便捷的事件监听函数
export const onGlobalEvent = (type: string, listener: EventListener) => {
  return globalEventBus.on(type, listener)
}

// 便捷的一次性监听函数
export const onceGlobalEvent = (type: string, listener: EventListener) => {
  return globalEventBus.once(type, listener)
}

// 便捷的取消监听函数
export const offGlobalEvent = (type: string, listener: EventListener) => {
  globalEventBus.off(type, listener)
}

// 用户相关事件的便捷函数
export const userEvents = {
  login: (userInfo: any) => emitGlobalEvent(EVENT_TYPES.USER_LOGIN, userInfo),
  logout: () => emitGlobalEvent(EVENT_TYPES.USER_LOGOUT),
  updateInfo: (userInfo: any) => emitGlobalEvent(EVENT_TYPES.USER_INFO_UPDATE, userInfo)
}

// 路由相关事件的便捷函数
export const routeEvents = {
  change: (routeInfo: any) => emitGlobalEvent(EVENT_TYPES.ROUTE_CHANGE, routeInfo),
  beforeChange: (routeInfo: any) => emitGlobalEvent(EVENT_TYPES.ROUTE_BEFORE_CHANGE, routeInfo)
}

// 应用相关事件的便捷函数
export const appEvents = {
  mounted: (appName: string) => emitGlobalEvent(EVENT_TYPES.APP_MOUNTED, { appName }),
  unmounted: (appName: string) => emitGlobalEvent(EVENT_TYPES.APP_UNMOUNTED, { appName }),
  error: (appName: string, error: any) => emitGlobalEvent(EVENT_TYPES.APP_ERROR, { appName, error })
}