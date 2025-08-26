<template>
  <div class="micro-app-container">
    <!-- 加载状态 -->
    <div v-if="loading" class="loading-container">
      <el-icon class="is-loading"><Loading /></el-icon>
      <span>正在加载微应用...</span>
    </div>
    
    <!-- 微应用容器 -->
    <div 
      id="micro-app-container" 
      ref="containerRef"
      class="micro-app-content"
      v-show="!loading"
    ></div>
    
    <!-- 错误状态 -->
    <div v-if="error" class="error-container">
      <el-alert
        title="微应用加载失败"
        type="error"
        :description="error"
        show-icon
      />
      <el-button @click="retry" type="primary" style="margin-top: 10px;">重试</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { Loading } from '@element-plus/icons-vue'
import { startMicroAppsOnDemand } from '../micro'

const loading = ref(true)
const error = ref('')
const containerRef = ref<HTMLElement>()

const retry = () => {
  error.value = ''
  loading.value = true
  // 重新加载页面
  window.location.reload()
}

onMounted(async () => {
  await nextTick()
  
  // 确保容器元素存在
  if (containerRef.value) {
    console.log('微应用容器已就绪:', containerRef.value)
    
    try {
      // 容器就绪后，立即启动qiankun（如果还没有启动的话）
      await startMicroAppsOnDemand()
      console.log('qiankun启动成功，微应用将被加载')
      loading.value = false
    } catch (startError) {
      console.error('qiankun启动失败:', startError)
      error.value = `qiankun启动失败: ${(startError as Error).message || '未知错误'}`
      loading.value = false
    }
  } else {
    error.value = '微应用容器初始化失败'
    loading.value = false
  }
})

// 微应用容器组件
// qiankun会自动将子应用挂载到 #micro-app-container 容器中
</script>

<style scoped>
.micro-app-container {
  width: 100%;
  flex: 1;
  min-height: 600px;
  position: relative;
  /* 移除可能影响子应用的样式 */
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
}

.micro-app-content {
  width: 100%;
  height: 100%;
  min-height: 600px;
  /* 确保子应用有完整的空间 */
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  color: #909399;
  font-size: 14px;
}

.loading-container .el-icon {
  font-size: 24px;
  margin-bottom: 10px;
}

.error-container {
  padding: 20px;
  text-align: center;
}
</style>