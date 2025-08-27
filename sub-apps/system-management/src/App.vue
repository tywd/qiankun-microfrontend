<template>
  <div id="system-management-app" class="system-management-app">
    <!-- 调试信息 -->
    <div class="debug-info" style="background: #e6f7ff; padding: 10px; margin-bottom: 10px; border: 1px solid #91d5ff; border-radius: 4px;">
      <p><strong>系统管理子应用已加载</strong></p>
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
        <div class="system-dashboard">
          <el-card>
            <el-row :gutter="20">
              <el-col :span="8">
                <el-card class="feature-card">
                  <h3>系统配置</h3>
                  <p>管理系统基础配置信息</p>
                  <el-button type="primary" @click="goToSettings">进入配置</el-button>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card class="feature-card">
                  <h3>权限管理</h3>
                  <p>配置用户角色和权限</p>
                  <el-button type="success" @click="goToPermissions">权限设置</el-button>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card class="feature-card">
                  <h3>日志管理</h3>
                  <p>查看系统操作日志</p>
                  <el-button type="info" @click="goToLogs">查看日志</el-button>
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const router = useRouter()
const isQiankunEnv = ref(qiankunWindow.__POWERED_BY_QIANKUN__)

const goToSettings = () => {
  router.push('/settings')
}

const goToPermissions = () => {
  router.push('/permissions')
}

const goToLogs = () => {
  router.push('/logs')
}
// 系统管理微应用
</script>

<style scoped>
.system-management-app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  /* 确保在微前端环境下样式不被干扰 */
  position: relative;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.system-dashboard {
  padding: 20px;
  /* 确保内容区域正常显示 */
  width: 100%;
  box-sizing: border-box;
}

.system-dashboard h1 {
  margin-bottom: 20px;
  color: #303133;
  /* 重置可能的父级样式影响 */
  margin-top: 0;
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

.debug-info p {
  margin: 5px 0;
  padding: 0;
}
</style>
