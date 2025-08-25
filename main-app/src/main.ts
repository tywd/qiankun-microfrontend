import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router'
import App from './App.vue'
import { registerApps, startMicroApps, setupErrorHandler } from './micro'
import './style.css'

const app = createApp(App)

// 注册Element Plus
app.use(ElementPlus)

// 注册Element Plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 注册Vue Router
app.use(router)

// 注册微应用
registerApps()

// 设置错误处理
setupErrorHandler()

// 启动微前端
startMicroApps()

app.mount('#app')
