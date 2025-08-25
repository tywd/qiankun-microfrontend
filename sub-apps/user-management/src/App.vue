<template>
  <div class="user-management-app">
    <!-- 调试信息 -->
    <div class="debug-info" style="background: #e6f7ff; padding: 10px; margin-bottom: 10px; border: 1px solid #91d5ff; border-radius: 4px;">
      <p><strong>用户管理子应用已加载</strong></p>
      <p>当前时间: {{ new Date().toLocaleTimeString() }}</p>
      <p>qiankun环境: {{ isQiankunEnv ? '是' : '否' }}</p>
    </div>
    
    <!-- 路由内容 -->
    <router-view v-slot="{ Component }">
      <template v-if="Component">
        <component :is="Component" />
      </template>
      <template v-else>
        <div class="fallback-content" style="background: #fff2e8; padding: 20px; border: 1px solid #ffbb96; border-radius: 4px; text-align: center;">
          <h3>✨ 用户管理子应用</h3>
          <p>路由未匹配到内容，请检查路由配置</p>
          <el-button type="primary" @click="goToUserList">跳转到用户列表</el-button>
        </div>
      </template>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const router = useRouter()
const isQiankunEnv = ref(qiankunWindow.__POWERED_BY_QIANKUN__)

const goToUserList = () => {
  router.push('/list')
}

onMounted(() => {
  console.log('用户管理App组件已挂载')
})
// 用户管理微应用
</script>

<style scoped>
.user-management-app {
  width: 100%;
  min-height: 600px; /* 设置最小高度 */
  height: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  background-color: #f5f5f5;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
