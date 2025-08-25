<template>
  <div class="user-profile">
    <div class="page-header">
      <h2>用户详情</h2>
      <div class="header-actions">
        <el-button type="primary" @click="handleEdit">编辑</el-button>
        <el-button @click="handleBack">返回列表</el-button>
      </div>
    </div>

    <el-card v-loading="loading">
      <template #header>
        <span>基本信息</span>
      </template>
      
      <div class="user-info">
        <div class="avatar-section">
          <el-avatar :size="120" :src="userInfo.avatar">
            {{ userInfo.username?.charAt(0)?.toUpperCase() }}
          </el-avatar>
        </div>
        
        <div class="info-section">
          <div class="info-grid">
            <div class="info-item">
              <span class="label">用户ID：</span>
              <span class="value">{{ userInfo.id }}</span>
            </div>
            <div class="info-item">
              <span class="label">用户名：</span>
              <span class="value">{{ userInfo.username }}</span>
            </div>
            <div class="info-item">
              <span class="label">邮箱：</span>
              <span class="value">{{ userInfo.email }}</span>
            </div>
            <div class="info-item">
              <span class="label">手机号：</span>
              <span class="value">{{ userInfo.phone }}</span>
            </div>
            <div class="info-item">
              <span class="label">角色：</span>
              <el-tag :type="getRoleType(userInfo.role)">
                {{ getRoleText(userInfo.role) }}
              </el-tag>
            </div>
            <div class="info-item">
              <span class="label">状态：</span>
              <el-tag :type="userInfo.status === 'active' ? 'success' : 'danger'">
                {{ userInfo.status === 'active' ? '启用' : '禁用' }}
              </el-tag>
            </div>
            <div class="info-item">
              <span class="label">创建时间：</span>
              <span class="value">{{ userInfo.createdAt }}</span>
            </div>
            <div class="info-item">
              <span class="label">最后登录：</span>
              <span class="value">{{ userInfo.lastLoginAt || '从未登录' }}</span>
            </div>
          </div>
        </div>
      </div>
    </el-card>

    <!-- 操作记录 -->
    <el-card style="margin-top: 20px;">
      <template #header>
        <span>操作记录</span>
      </template>
      
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :timestamp="activity.timestamp"
          placement="top"
        >
          <el-card>
            <h4>{{ activity.action }}</h4>
            <p>{{ activity.description }}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'

interface UserInfo {
  id: number
  username: string
  email: string
  phone: string
  role: string
  status: 'active' | 'inactive'
  avatar?: string
  createdAt: string
  lastLoginAt?: string
}

interface Activity {
  action: string
  description: string
  timestamp: string
}

const router = useRouter()
const route = useRoute()
const loading = ref(false)

// 用户信息
const userInfo = reactive<UserInfo>({
  id: 0,
  username: '',
  email: '',
  phone: '',
  role: '',
  status: 'active',
  createdAt: '',
  lastLoginAt: ''
})

// 活动记录
const activities = ref<Activity[]>([])

// 获取用户详情
const fetchUserDetail = async (id: string) => {
  loading.value = true
  try {
    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // 模拟用户数据
    const mockUser = {
      id: parseInt(id),
      username: 'user1',
      email: 'user1@example.com',
      phone: '13800138001',
      role: 'user',
      status: 'active' as const,
      createdAt: '2024-01-16 14:20:00',
      lastLoginAt: '2024-01-20 09:30:00'
    }
    
    Object.assign(userInfo, mockUser)
    
    // 模拟活动记录
    activities.value = [
      {
        action: '用户登录',
        description: '用户通过Web端登录系统',
        timestamp: '2024-01-20 09:30:00'
      },
      {
        action: '修改密码',
        description: '用户修改了登录密码',
        timestamp: '2024-01-19 16:20:00'
      },
      {
        action: '用户注册',
        description: '新用户注册成功',
        timestamp: '2024-01-16 14:20:00'
      }
    ]
  } catch (error) {
    ElMessage.error('获取用户信息失败')
  } finally {
    loading.value = false
  }
}

// 角色类型
const getRoleType = (role: string) => {
  const types: Record<string, string> = {
    admin: 'danger',
    user: 'primary',
    guest: 'info'
  }
  return types[role] || 'info'
}

// 角色文本
const getRoleText = (role: string) => {
  const texts: Record<string, string> = {
    admin: '管理员',
    user: '普通用户',
    guest: '访客'
  }
  return texts[role] || '未知'
}

// 编辑用户
const handleEdit = () => {
  router.push(`/edit/${userInfo.id}`)
}

// 返回列表
const handleBack = () => {
  router.push('/list')
}

onMounted(() => {
  const userId = route.params.id as string
  if (userId) {
    fetchUserDetail(userId)
  }
})
</script>

<style scoped>
.user-profile {
  padding: 0;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.page-header h2 {
  margin: 0;
  color: #303133;
}

.header-actions {
  display: flex;
  gap: 12px;
}

.user-info {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

.avatar-section {
  flex-shrink: 0;
}

.info-section {
  flex: 1;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.label {
  color: #606266;
  font-weight: 500;
  min-width: 80px;
}

.value {
  color: #303133;
}

:deep(.el-timeline-item__wrapper) {
  top: -4px;
}

@media (max-width: 768px) {
  .user-info {
    flex-direction: column;
    align-items: center;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>