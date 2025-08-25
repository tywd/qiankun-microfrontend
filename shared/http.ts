/**
 * 共享HTTP请求工具
 * 统一处理API请求、响应拦截、错误处理
 */

import type { ApiResponse } from './types'

// HTTP状态码
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503
} as const

// 请求配置接口
export interface RequestConfig {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  data?: any
  params?: any
  headers?: Record<string, string>
  timeout?: number
}

// HTTP客户端类
export class HttpClient {
  private baseURL: string
  private timeout: number
  private defaultHeaders: Record<string, string>

  constructor(baseURL = '', timeout = 10000) {
    this.baseURL = baseURL
    this.timeout = timeout
    this.defaultHeaders = {
      'Content-Type': 'application/json'
    }
  }

  // 设置默认头部
  setDefaultHeader(key: string, value: string): void {
    this.defaultHeaders[key] = value
  }

  // 设置认证token
  setAuthToken(token: string): void {
    this.setDefaultHeader('Authorization', `Bearer ${token}`)
  }

  // 发送请求
  async request<T = any>(config: RequestConfig): Promise<ApiResponse<T>> {
    const {
      url,
      method = 'GET',
      data,
      params,
      headers = {},
      timeout = this.timeout
    } = config

    // 构建完整URL
    const fullUrl = this.buildUrl(url, params)

    // 合并请求头
    const requestHeaders = {
      ...this.defaultHeaders,
      ...headers
    }

    try {
      const response = await this.fetchWithTimeout(fullUrl, {
        method,
        headers: requestHeaders,
        body: data ? JSON.stringify(data) : undefined
      }, timeout)

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`)
      }

      const result = await response.json()
      return this.handleResponse<T>(result)
    } catch (error) {
      return this.handleError(error)
    }
  }

  // GET请求
  async get<T = any>(url: string, params?: any): Promise<ApiResponse<T>> {
    return this.request<T>({ url, method: 'GET', params })
  }

  // POST请求
  async post<T = any>(url: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>({ url, method: 'POST', data })
  }

  // PUT请求
  async put<T = any>(url: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>({ url, method: 'PUT', data })
  }

  // DELETE请求
  async delete<T = any>(url: string): Promise<ApiResponse<T>> {
    return this.request<T>({ url, method: 'DELETE' })
  }

  // 构建URL
  private buildUrl(url: string, params?: any): string {
    const fullUrl = this.baseURL + url
    if (!params) return fullUrl

    const searchParams = new URLSearchParams()
    Object.keys(params).forEach(key => {
      if (params[key] !== null && params[key] !== undefined) {
        searchParams.append(key, String(params[key]))
      }
    })

    const queryString = searchParams.toString()
    return queryString ? `${fullUrl}?${queryString}` : fullUrl
  }

  // 带超时的fetch
  private async fetchWithTimeout(
    url: string,
    options: RequestInit,
    timeout: number
  ): Promise<Response> {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeout)

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal
      })
      clearTimeout(timeoutId)
      return response
    } catch (error) {
      clearTimeout(timeoutId)
      throw error
    }
  }

  // 处理响应
  private handleResponse<T>(result: any): ApiResponse<T> {
    // 标准化响应格式
    if (typeof result === 'object' && result !== null) {
      return {
        code: result.code || HTTP_STATUS.OK,
        message: result.message || 'Success',
        data: result.data || result,
        success: result.success !== false && (result.code || HTTP_STATUS.OK) === HTTP_STATUS.OK
      }
    }

    return {
      code: HTTP_STATUS.OK,
      message: 'Success',
      data: result,
      success: true
    }
  }

  // 处理错误
  private handleError(error: any): ApiResponse<any> {
    console.error('HTTP Request Error:', error)

    let message = '请求失败'
    let code = HTTP_STATUS.INTERNAL_SERVER_ERROR

    if (error.name === 'AbortError') {
      message = '请求超时'
      code = HTTP_STATUS.BAD_GATEWAY
    } else if (error.message) {
      message = error.message
    }

    return {
      code,
      message,
      data: null,
      success: false
    }
  }
}

// 创建默认HTTP客户端实例
export const httpClient = new HttpClient()

// 设置基础URL（可以在各个应用中重新配置）
if (typeof window !== 'undefined') {
  const baseURL = process.env.NODE_ENV === 'production'
    ? 'https://api.your-domain.com'
    : 'http://localhost:3000'
  httpClient.setBaseURL = function(url: string) {
    this.baseURL = url
  }
}