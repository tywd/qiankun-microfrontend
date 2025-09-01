<template>
  <div class="enhanced-mermaid-container" :class="{ 'full-screen': isFullScreen }">
    <!-- 工具栏 -->
    <div class="mermaid-toolbar">
      <button class="toolbar-btn" @click="toggleView" :title="isCode ? '查看图表' : '查看代码'">
        <span v-if="isCode">📊</span>
        <span v-else>📝</span>
      </button>
      <button class="toolbar-btn" @click="zoomIn" title="放大" :disabled="isCode">
        <span>➕</span>
      </button>
      <button class="toolbar-btn" @click="zoomOut" title="缩小" :disabled="isCode">
        <span>➖</span>
      </button>
      <button class="toolbar-btn" @click="resetZoom" title="适应屏幕" :disabled="isCode">
        <span>🔄</span>
      </button>
      <button class="toolbar-btn" @click="toggleFullScreen" :title="isFullScreen ? '退出全屏' : '全屏查看'">
        <span v-if="isFullScreen">⬆️</span>
        <span v-else>⬇️</span>
      </button>
    </div>

    <!-- 加载指示器 -->
    <div v-if="loading" class="mermaid-loading">
      <div class="loading-spinner"></div>
      <div class="loading-text">图表渲染中...</div>
    </div>

    <!-- 错误提示 -->
    <div v-if="error" class="mermaid-error">
      <h3>图表渲染失败</h3>
      <pre>{{ error }}</pre>
    </div>

    <!-- Mermaid 图表或代码 -->
    <div class="mermaid-content" :class="{ 'code-view': isCode }">
      <!-- 代码视图 -->
      <pre v-if="isCode" class="mermaid-code"><code>{{ decodedCode }}</code></pre>
      
      <!-- 图表视图 -->
      <div 
        v-else
        ref="chartContainer" 
        class="mermaid-chart-container"
        :style="{ transform: `scale(${zoomLevel})` }"
      >
        <div v-html="renderedSvg" class="mermaid-svg-container"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch, onBeforeUnmount } from 'vue'
import { useRoute } from 'vitepress'
import { useData } from 'vitepress'
import mermaid from 'mermaid'

const props = defineProps({
  code: {
    type: String,
    required: true
  },
  id: {
    type: String,
    default: () => `mermaid-${Math.random().toString(36).substring(2, 9)}`
  }
})

// 获取当前主题
const { isDark } = useData()
const route = useRoute()

// 状态变量
const loading = ref(true)
const error = ref(null)
const isFullScreen = ref(false)
const isCode = ref(false)
const renderedSvg = ref('')
const chartContainer = ref(null)
const zoomLevel = ref(1)
const observer = ref(null)
const decodedCode = ref('')

// 在组件挂载后初始化Mermaid
onMounted(() => {
  console.log('组件挂载，开始初始化...')
  
  // 解码传入的代码
  if (props.code) {
    try {
      decodedCode.value = decodeURIComponent(props.code)
      console.log('解码后的代码:', decodedCode.value.substring(0, 50) + '...')
    } catch (e) {
      console.error('解码失败:', e)
      decodedCode.value = props.code
    }
  }
  
  // 立即渲染图表，不使用懒加载
  renderMermaid()
  
  window.addEventListener('keydown', handleKeyDown)
})

// 在组件卸载前清理
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown)
  if (observer.value) observer.value.disconnect()
  if (isFullScreen.value) {
    document.body.style.overflow = 'auto'
  }
})

// 监听主题变化，重新渲染图表
watch(() => isDark.value, () => {
  if (!isCode.value) renderMermaid()
})

// 监听路由变化，退出全屏
watch(() => route.path, () => {
  if (isFullScreen.value) {
    isFullScreen.value = false
    document.body.style.overflow = 'auto'
  }
})

// 渲染Mermaid图表
const renderMermaid = async () => {
  console.log('开始渲染Mermaid图表...')
  
  if (!decodedCode.value) {
    console.error('没有代码可渲染')
    error.value = '没有收到Mermaid图表代码'
    loading.value = false
    return
  }
  
  try {
    loading.value = true
    error.value = null
    
    // 配置Mermaid
    const config = {
      startOnLoad: false,
      theme: isDark.value ? 'dark' : 'default',
      securityLevel: 'loose',
      fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
      flowchart: {
        curve: 'basis',
        useMaxWidth: false,
        htmlLabels: true,
        padding: 10
      }
    }
    
    console.log('初始化Mermaid配置:', JSON.stringify(config))
    mermaid.initialize(config)
    
    // 渲染图表
    console.log('渲染图表，ID:', props.id)
    const { svg } = await mermaid.render(props.id, decodedCode.value)
    console.log('图表渲染成功!')
    
    renderedSvg.value = svg
    
    // 等待下一个DOM更新周期
    await nextTick()
    
    // 应用动画效果 - 让图表逐步显示
    applyAnimationToSvg()
    
    loading.value = false
  } catch (err) {
    console.error('Mermaid渲染错误:', err)
    error.value = err.message
    loading.value = false
  }
}

// 为SVG添加动画效果
const applyAnimationToSvg = () => {
  const svgElement = chartContainer.value?.querySelector('svg')
  if (!svgElement) {
    console.error('未找到SVG元素')
    return
  }
  
  console.log('找到SVG元素，添加动画效果')
  
  // 为SVG元素添加自定义动画类
  svgElement.classList.add('animated-svg')
  
  // 获取所有可动画的SVG元素
  const animatableElements = svgElement.querySelectorAll('g, path, rect, circle, ellipse, line, polyline, polygon, text, tspan')
  
  // 为每个元素添加动画延迟
  animatableElements.forEach((el, index) => {
    el.style.opacity = '0'
    el.style.animation = `fadeIn 0.5s ease forwards`
    el.style.animationDelay = `${index * 20}ms` // 每个元素延迟显示
  })
}

// 切换全屏模式
const toggleFullScreen = () => {
  isFullScreen.value = !isFullScreen.value
  
  // 控制页面滚动
  document.body.style.overflow = isFullScreen.value ? 'hidden' : 'auto'
  
  // 全屏模式下重置缩放
  if (isFullScreen.value) {
    zoomLevel.value = 1
  }
}

// 切换代码与图表视图
const toggleView = () => {
  isCode.value = !isCode.value
  
  // 如果从代码切换到图表，确保图表已渲染
  if (!isCode.value && !renderedSvg.value) {
    renderMermaid()
  }
}

// 放大图表
const zoomIn = () => {
  zoomLevel.value = Math.min(zoomLevel.value + 0.1, 2)
}

// 缩小图表
const zoomOut = () => {
  zoomLevel.value = Math.max(zoomLevel.value - 0.1, 0.5)
}

// 重置缩放
const resetZoom = () => {
  zoomLevel.value = 1
}

// 处理键盘事件
const handleKeyDown = (e) => {
  if (isFullScreen.value) {
    if (e.key === 'Escape') {
      toggleFullScreen()
    } else if (e.key === '+' || e.key === '=') {
      zoomIn()
    } else if (e.key === '-') {
      zoomOut()
    } else if (e.key === '0') {
      resetZoom()
    } else if (e.key === 'c') {
      toggleView()
    }
  }
}
</script>

<style scoped>
.enhanced-mermaid-container {
  position: relative;
  margin: 2rem 0;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;
}

/* 全屏模式 */
.full-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  margin: 0;
  padding: 20px;
  box-sizing: border-box;
  background-color: var(--vp-c-bg);
  display: flex;
  flex-direction: column;
}

/* 工具栏样式 */
.mermaid-toolbar {
  display: flex;
  justify-content: flex-end;
  padding: 8px;
  background-color: var(--vp-c-bg-alt);
  border-bottom: 1px solid var(--vp-c-divider);
}

.toolbar-btn {
  background: none;
  border: none;
  color: var(--vp-c-text-2);
  cursor: pointer;
  margin-left: 8px;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.toolbar-btn:hover {
  background-color: var(--vp-c-bg-mute);
  color: var(--vp-c-text-1);
}

.toolbar-btn[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

/* 内容区域 */
.mermaid-content {
  padding: 16px;
  overflow: auto;
  height: calc(100% - 44px);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 代码视图 */
.mermaid-code {
  width: 100%;
  overflow: auto;
  padding: 16px;
  background-color: var(--vp-c-bg-alt);
  border-radius: 6px;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  white-space: pre-wrap;
  max-height: 400px;
  margin: 0;
}

.full-screen .mermaid-code {
  max-height: none;
  height: 100%;
}

/* 图表容器 */
.mermaid-chart-container {
  transition: transform 0.3s ease;
  transform-origin: center center;
  width: 100%;
  display: flex;
  justify-content: center;
}

/* SVG容器 */
.mermaid-svg-container {
  overflow: visible;
  width: 100%;
  display: flex;
  justify-content: center;
}

/* 加载状态 */
.mermaid-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  color: var(--vp-c-text-2);
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: var(--vp-c-brand);
  animation: spin 1s linear infinite;
  margin-bottom: 16px;
}

.loading-text {
  font-style: italic;
}

/* 错误提示 */
.mermaid-error {
  padding: 16px;
  color: var(--vp-c-danger);
  background-color: var(--vp-c-danger-soft);
  border-radius: 6px;
  margin: 16px;
}

.mermaid-error pre {
  margin-top: 8px;
  overflow: auto;
  max-height: 200px;
  background-color: var(--vp-c-bg-alt);
  padding: 8px;
  border-radius: 4px;
}

/* 动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* 媒体查询 */
@media (max-width: 640px) {
  .toolbar-btn {
    width: 24px;
    height: 24px;
    margin-left: 4px;
  }
  
  .mermaid-content {
    padding: 8px;
  }
}
</style>