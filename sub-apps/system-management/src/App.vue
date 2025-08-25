<template>
  <div id="system-management-app" class="system-management-app">
    <div class="system-dashboard">
      <h1>系统管理模块</h1>
      <el-card>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-card class="feature-card">
              <h3>系统配置</h3>
              <p>管理系统基础配置信息</p>
              <el-button type="primary">进入配置</el-button>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="feature-card">
              <h3>权限管理</h3>
              <p>配置用户角色和权限</p>
              <el-button type="success">权限设置</el-button>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="feature-card">
              <h3>日志管理</h3>
              <p>查看系统操作日志</p>
              <el-button type="info">查看日志</el-button>
            </el-card>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
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
}

.system-dashboard {
  padding: 20px;
}

.system-dashboard h1 {
  margin-bottom: 20px;
  color: #303133;
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
}

.feature-card p {
  margin-bottom: 15px;
  color: #606266;
}
</style>
