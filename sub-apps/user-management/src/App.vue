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
        <!-- 默认内容（当没有路由匹配时显示） -->
        <div class="user-dashboard">
          <el-card>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-card class="feature-card">
                  <h3>用户列表</h3>
                  <p>展示所有用户信息列表</p>
                  <el-button type="primary" @click="goToUserList">进入用户列表</el-button>
                </el-card>
              </el-col>
              <el-col :span="12">
                <el-card class="feature-card">
                  <h3>添加用户</h3>
                  <p>新增用户到用户列表</p>
                  <el-button type="success" @click="goAddUser">去新增用户</el-button>
                </el-card>
              </el-col>
            </el-row>
          </el-card>
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

const goAddUser = () => {
  router.push('/add')
}

onMounted(() => {
  console.log('用户管理App组件已挂载')
})
// 用户管理微应用
</script>

<style scoped>
.user-management-app {
  width: 100%;
  min-height: 600px;
  height: 100%;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  background-color: #f5f5f5;
  /* 确保在微前端环境下样式不被干扰 */
  position: relative;
}

/* 重置可能被父级影响的样式 */
.user-management-app * {
  box-sizing: border-box;
}

.debug-info p {
  margin: 5px 0;
  padding: 0;
}

.feature-card {
  text-align: center;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.feature-card h3 {
  margin-bottom: 10px;
  color: #409EFF;
  margin-top: 0;
  padding: 0;
}

.feature-card p {
  margin-bottom: 15px;
  color: #606266;
  margin-top: 0;
  padding: 0;
}

.fallback-content h3 {
  margin-top: 0;
  margin-bottom: 10px;
  padding: 0;
}

.fallback-content p {
  margin: 10px 0;
  padding: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.user-dashboard {
  padding: 20px;
  /* 确保内容区域正常显示 */
  width: 100%;
  box-sizing: border-box;
}

.user-dashboard h1 {
  margin-bottom: 20px;
  color: #303133;
  /* 重置可能的父级样式影响 */
  margin-top: 0;
  padding: 0;
}
</style>
