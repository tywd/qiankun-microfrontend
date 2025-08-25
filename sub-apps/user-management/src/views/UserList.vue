<template>
  <div class="user-list">
    <!-- 测试内容：确保可见 -->
    <div class="test-banner" style="background: #409EFF; color: white; padding: 20px; margin-bottom: 20px; text-align: center; font-size: 18px; font-weight: bold;">
      🎉 用户管理子应用已成功加载！
    </div>
    
    <div class="page-header">
      <h2>用户管理</h2>
      <el-button type="primary" @click="handleAdd">添加用户</el-button>
    </div>

    <el-card>
      <el-table :data="userList" stripe border style="width: 100%">
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="username" label="用户名" width="120" />
        <el-table-column prop="email" label="邮箱" width="200" />
        <el-table-column prop="phone" label="手机号" width="130" />
        <el-table-column prop="role" label="角色" width="100">
          <template #default="{ row }">
            <el-tag>{{ row.role }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="200">
          <template #default="{ row }">
            <el-button type="primary" size="small" @click="handleView(row)">查看</el-button>
            <el-button type="success" size="small" @click="handleEdit(row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

interface User {
  id: number
  username: string
  email: string
  phone: string
  role: string
}

const router = useRouter()
const userList = ref<User[]>([])

const mockUsers: User[] = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@example.com',
    phone: '13800138000',
    role: 'admin'
  },
  {
    id: 2,
    username: 'user1',
    email: 'user1@example.com',
    phone: '13800138001',
    role: 'user'
  }
]

const handleAdd = () => {
  router.push('/add')
}

const handleView = (row: User) => {
  router.push(`/profile/${row.id}`)
}

const handleEdit = (row: User) => {
  router.push(`/edit/${row.id}`)
}

onMounted(() => {
  userList.value = mockUsers
})
</script>

<style scoped>
.user-list {
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.page-header h2 {
  margin: 0;
  color: #303133;
}
</style>