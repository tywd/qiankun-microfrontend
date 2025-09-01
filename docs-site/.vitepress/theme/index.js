// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './styles/mermaid-custom.css'

export default {
  extends: DefaultTheme,
  
  enhanceApp({ app }) {
    // 不再需要注册自定义组件
  },
  
  setup() {
    // 移除自定义的Mermaid交互功能，让vitepress-plugin-mermaid处理
  }
}
