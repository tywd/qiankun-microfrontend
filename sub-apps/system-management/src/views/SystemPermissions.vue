<template>
  <div class="system-permissions">
    <el-card>
      <h2>权限管理</h2>
      <el-table :data="permissions" stripe>
        <el-table-column prop="name" label="权限名称" width="200" />
        <el-table-column prop="code" label="权限代码" width="200" />
        <el-table-column prop="description" label="权限描述" />
        <el-table-column label="状态" width="100">
          <template #default="{ row }">
            <el-tag :type="row.enabled ? 'success' : 'danger'">
              {{ row.enabled ? '启用' : '禁用' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template #default="{ row }">
            <el-button 
              :type="row.enabled ? 'danger' : 'success'"
              size="small"
              @click="togglePermission(row)"
            >
              {{ row.enabled ? '禁用' : '启用' }}
            </el-button>
            <el-button size="small" @click="editPermission(row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const permissions = ref([
  {
    id: 1,
    name: '用户管理',
    code: 'user:manage',
    description: '用户增删改查权限',
    enabled: true
  },
  {
    id: 2,
    name: '系统配置',
    code: 'system:config',
    description: '系统配置修改权限',
    enabled: true
  },
  {
    id: 3,
    name: '日志查看',
    code: 'log:view',
    description: '系统日志查看权限',
    enabled: false
  }
])

const togglePermission = (permission: any) => {
  permission.enabled = !permission.enabled
  ElMessage.success(`权限${permission.enabled ? '启用' : '禁用'}成功！`)
}

const editPermission = (permission: any) => {
  ElMessage.info(`编辑权限: ${permission.name}`)
}
</script>

<style scoped>
.system-permissions {
  padding: 20px;
}

.system-permissions h2 {
  margin-bottom: 20px;
  color: #303133;
}
</style>