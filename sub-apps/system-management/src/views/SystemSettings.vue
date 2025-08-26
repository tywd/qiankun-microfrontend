<template>
  <div class="system-settings">
    <el-card>
      <h2>系统配置</h2>
      <el-form label-width="120px">
        <el-form-item label="系统名称">
          <el-input v-model="settings.systemName" placeholder="请输入系统名称" />
        </el-form-item>
        <el-form-item label="系统版本">
          <el-input v-model="settings.version" placeholder="请输入系统版本" />
        </el-form-item>
        <el-form-item label="系统描述">
          <el-input 
            v-model="settings.description" 
            type="textarea" 
            placeholder="请输入系统描述"
            :rows="4"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveSettings">保存配置</el-button>
          <el-button @click="resetSettings">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const settings = ref({
  systemName: '企业管理后台',
  version: 'v1.0.0',
  description: '基于Vue3 + Qiankun的企业级微前端管理系统'
})

const saveSettings = () => {
  ElMessage.success('配置保存成功！')
}

const resetSettings = () => {
  settings.value = {
    systemName: '企业管理后台',
    version: 'v1.0.0',
    description: '基于Vue3 + Qiankun的企业级微前端管理系统'
  }
  ElMessage.info('配置已重置')
}
</script>

<style scoped>
.system-settings {
  padding: 20px;
}

.system-settings h2 {
  margin-bottom: 20px;
  color: #303133;
}
</style>