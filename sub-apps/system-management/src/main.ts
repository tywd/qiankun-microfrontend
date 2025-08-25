import { createApp } from 'vue'
import type { App as VueApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
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
  
  // 全局属性
  app.config.globalProperties.$qiankun = props
  
  // 在微前端环境下直接使用主应用提供的容器
  const containerEl = container ? container : document.querySelector('#system-management-app')
  app.mount(containerEl)
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
