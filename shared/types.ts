/**
 * 微前端共享资源类型定义
 */

// 共享依赖配置类型
export interface SharedDependency {
  singleton: boolean
  requiredVersion: string
  strictVersion?: boolean
}

// 应用配置类型
export interface AppConfig {
  title: string
  version: string
  theme: string
  [key: string]: any
}

// 共享配置类型
export interface SharedConfig {
  API_BASE_URL: string
  CDN_BASE_URL: string
  APP_CONFIG: AppConfig
}

// 用户信息类型
export interface UserInfo {
  id: number
  username: string
  email: string
  avatar?: string
  roles: string[]
  permissions: string[]
}

// 微应用信息类型
export interface MicroAppInfo {
  name: string
  entry: string
  container: string
  activeRule: string
  status: 'loading' | 'mounted' | 'unmounted' | 'error'
}

// 全局事件类型
export interface GlobalEvent {
  type: string
  payload: any
  source: string
  timestamp: number
}

// 路由信息类型
export interface RouteInfo {
  path: string
  name: string
  title: string
  icon?: string
  children?: RouteInfo[]
}

// API响应类型
export interface ApiResponse<T = any> {
  code: number
  message: string
  data: T
  success: boolean
}

// 分页数据类型
export interface PaginationData<T = any> {
  list: T[]
  total: number
  pageNum: number
  pageSize: number
}

// 表单验证规则类型
export interface ValidationRule {
  required?: boolean
  message?: string
  trigger?: string | string[]
  validator?: (rule: any, value: any, callback: any) => void
}

// 表格列配置类型
export interface TableColumn {
  prop: string
  label: string
  width?: number | string
  minWidth?: number | string
  align?: 'left' | 'center' | 'right'
  sortable?: boolean
  formatter?: (row: any, column: any, cellValue: any) => string
}