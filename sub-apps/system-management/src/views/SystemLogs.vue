<template>
  <div class="system-logs">
    <el-card>
      <h2>日志管理</h2>
      <el-space wrap>
        <el-button type="primary" @click="refreshLogs">刷新日志</el-button>
        <el-button @click="clearLogs">清空日志</el-button>
      </el-space>
      
      <el-table :data="logs" stripe style="margin-top: 20px;">
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="timestamp" label="时间" width="180" />
        <el-table-column prop="level" label="级别" width="100">
          <template #default="{ row }">
            <el-tag :type="getLevelType(row.level)">{{ row.level }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="message" label="日志信息" />
        <el-table-column prop="source" label="来源" width="150" />
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const logs = ref([
  {
    id: 1,
    timestamp: '2024-01-20 10:30:15',
    level: 'INFO',
    message: '用户登录成功',
    source: 'user-management'
  },
  {
    id: 2,
    timestamp: '2024-01-20 10:25:08',
    level: 'WARNING',
    message: '系统配置变更',
    source: 'system-management'
  },
  {
    id: 3,
    timestamp: '2024-01-20 10:20:33',
    level: 'ERROR',
    message: '数据库连接失败',
    source: 'database'
  }
])

const getLevelType = (level: string) => {
  switch (level) {
    case 'INFO': return 'success'
    case 'WARNING': return 'warning'
    case 'ERROR': return 'danger'
    default: return 'info'
  }
}

const refreshLogs = () => {
  ElMessage.success('日志已刷新！')
}

const clearLogs = async () => {
  try {
    await ElMessageBox.confirm('确定要清空所有日志吗？', '确认操作', {
      type: 'warning'
    })
    logs.value = []
    ElMessage.success('日志已清空！')
  } catch {
    ElMessage.info('已取消操作')
  }
}
</script>

<style scoped>
.system-logs {
  padding: 20px;
}

.system-logs h2 {
  margin-bottom: 20px;
  color: #303133;
}
</style>