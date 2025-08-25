<template>
  <div class="dashboard">
    <div class="dashboard-header">
      <h2>仪表盘</h2>
      <p>欢迎使用企业管理后台系统</p>
    </div>

    <!-- 统计卡片 -->
    <el-row :gutter="20" class="stats-row">
      <el-col :span="6">
        <el-card class="stats-card">
          <div class="stats-content">
            <div class="stats-icon user">
              <el-icon><User /></el-icon>
            </div>
            <div class="stats-info">
              <div class="stats-number">1,234</div>
              <div class="stats-label">用户总数</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="stats-card">
          <div class="stats-content">
            <div class="stats-icon order">
              <el-icon><Document /></el-icon>
            </div>
            <div class="stats-info">
              <div class="stats-number">5,678</div>
              <div class="stats-label">订单数量</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="stats-card">
          <div class="stats-content">
            <div class="stats-icon revenue">
              <el-icon><Money /></el-icon>
            </div>
            <div class="stats-info">
              <div class="stats-number">¥89,012</div>
              <div class="stats-label">总收入</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="stats-card">
          <div class="stats-content">
            <div class="stats-icon growth">
              <el-icon><TrendCharts /></el-icon>
            </div>
            <div class="stats-info">
              <div class="stats-number">+23.5%</div>
              <div class="stats-label">增长率</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 快捷操作 -->
    <el-row :gutter="20" class="quick-actions">
      <el-col :span="12">
        <el-card>
          <template #header>
            <span>快捷操作</span>
          </template>
          <div class="action-buttons">
            <el-button 
              type="primary" 
              :icon="User" 
              @click="$router.push('/user')"
            >
              用户管理
            </el-button>
            <el-button 
              type="success" 
              :icon="Setting" 
              @click="$router.push('/system')"
            >
              系统管理
            </el-button>
            <el-button type="info" :icon="Document">
              报表查看
            </el-button>
            <el-button type="warning" :icon="Bell">
              消息中心
            </el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <template #header>
            <span>系统信息</span>
          </template>
          <div class="system-info">
            <div class="info-item">
              <span class="label">系统版本：</span>
              <span class="value">v1.0.0</span>
            </div>
            <div class="info-item">
              <span class="label">运行环境：</span>
              <span class="value">{{ isProduction ? '生产环境' : '开发环境' }}</span>
            </div>
            <div class="info-item">
              <span class="label">微应用数量：</span>
              <span class="value">{{ microAppCount }}</span>
            </div>
            <div class="info-item">
              <span class="label">最后更新：</span>
              <span class="value">{{ lastUpdateTime }}</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 最近活动 -->
    <el-row>
      <el-col :span="24">
        <el-card>
          <template #header>
            <span>最近活动</span>
          </template>
          <el-timeline>
            <el-timeline-item timestamp="2024-01-20 15:30" placement="top">
              <el-card>
                <h4>用户管理模块更新</h4>
                <p>新增用户批量导入功能，优化用户列表查询性能</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2024-01-19 10:20" placement="top">
              <el-card>
                <h4>系统管理模块发布</h4>
                <p>发布系统配置管理功能，支持动态配置修改</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2024-01-18 14:15" placement="top">
              <el-card>
                <h4>微前端架构升级</h4>
                <p>升级Qiankun到最新版本，提升应用加载性能</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  User,
  Document,
  Money,
  TrendCharts,
  Setting,
  Bell
} from '@element-plus/icons-vue'

// 系统信息
const isProduction = computed(() => process.env.NODE_ENV === 'production')
const microAppCount = ref(2) // 微应用数量
const lastUpdateTime = ref('2024-01-20 15:30:00')
</script>

<style scoped>
.dashboard {
  padding: 0;
}

.dashboard-header {
  margin-bottom: 24px;
}

.dashboard-header h2 {
  margin: 0 0 8px 0;
  color: #303133;
}

.dashboard-header p {
  margin: 0;
  color: #606266;
}

.stats-row {
  margin-bottom: 24px;
}

.stats-card {
  border: none;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.stats-content {
  display: flex;
  align-items: center;
}

.stats-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  font-size: 24px;
  color: white;
}

.stats-icon.user {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.stats-icon.order {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.stats-icon.revenue {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.stats-icon.growth {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.stats-info {
  flex: 1;
}

.stats-number {
  font-size: 24px;
  font-weight: 600;
  color: #303133;
  margin-bottom: 4px;
}

.stats-label {
  font-size: 14px;
  color: #909399;
}

.quick-actions {
  margin-bottom: 24px;
}

.action-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.action-buttons .el-button {
  margin: 0;
}

.system-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}

.info-item:last-child {
  border-bottom: none;
}

.label {
  color: #606266;
  font-size: 14px;
}

.value {
  color: #303133;
  font-weight: 500;
}

:deep(.el-timeline-item__wrapper) {
  top: -4px;
}
</style>