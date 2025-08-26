import { createApp } from 'vue'
import type { App as VueApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import router from './router'
import App from './App.vue'
import './style.css'

let app: VueApp<Element> | null = null

function render(props: any = {}) {
  const { container } = props
  
  app = createApp(App)
  
  // 注册Element Plus
  app.use(ElementPlus)
  
  // 注册Element Plus图标
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  
  // 注册Vue Router
  app.use(router)
  
  // 全局属性
  app.config.globalProperties.$qiankun = props
  
  // 修复挂载逻辑：在微前端环境下直接使用container，独立运行时使用默认容器
  let containerElement
  if (container) {
    // 微前端环境：直接使用qiankun提供的container
    containerElement = container
    console.log('微前端模式 - 使用qiankun容器:', container)
  } else {
    // 独立运行：使用默认容器
    containerElement = document.querySelector('#system-management-app') || document.querySelector('#app') || document.body
    console.log('独立运行模式 - 使用默认容器:', containerElement)
  }
  
  if (!containerElement) {
    console.error('找不到挂载容器！')
    return
  }
  
  console.log('系统管理应用挂载容器:', containerElement)
  app.mount(containerElement)
  
  // 添加路由就绪检查
  router.isReady().then(() => {
    console.log('系统管理子应用路由就绪')
    console.log('当前路由:', router.currentRoute.value.path)
    console.log('当前路由匹配:', router.currentRoute.value.matched.length)
  })
}

// 独立运行时
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}

// qiankun生命周期
renderWithQiankun({
  mount(props) {
    console.log('系统管理模块 mount', props)
    render(props)
  },
  bootstrap() {
    console.log('系统管理模块 bootstrap')
  },
  unmount() {
    console.log('系统管理模块 unmount')
    if (app) {
      app.unmount()
      app = null
    }
  },
  update() {
    console.log('系统管理模块 update')
  }
})
