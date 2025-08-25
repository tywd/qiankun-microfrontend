<template>
  <el-container class="layout-container">
    <!-- 头部 -->
    <el-header class="layout-header">
      <div class="header-left">
        <el-button
          :icon="Fold"
          class="collapse-btn"
          @click="toggleCollapse"
          text
        />
        <span class="title">企业管理后台</span>
      </div>
      <div class="header-right">
        <el-dropdown>
          <span class="user-info">
            <el-avatar :size="32">管</el-avatar>
            <span class="username">管理员</span>
            <el-icon><ArrowDown /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-header>

    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '240px'" class="layout-aside">
        <el-scrollbar>
          <el-menu
            :default-active="activeMenu"
            :collapse="isCollapse"
            :collapse-transition="false"
            background-color="#304156"
            text-color="#bfcbd9"
            active-text-color="#409EFF"
            router
          >
            <template v-for="route in menuRoutes" :key="route.path">
              <el-sub-menu 
                v-if="route.children && route.children.length > 0"
                :index="route.path"
              >
                <template #title>
                  <el-icon><component :is="route.meta?.icon" /></el-icon>
                  <span>{{ route.meta?.title }}</span>
                </template>
                <el-menu-item
                  v-for="child in route.children"
                  :key="child.path"
                  :index="child.path"
                >
                  {{ child.meta?.title }}
                </el-menu-item>
              </el-sub-menu>
              <el-menu-item v-else :index="route.path">
                <el-icon><component :is="route.meta?.icon" /></el-icon>
                <span>{{ route.meta?.title }}</span>
              </el-menu-item>
            </template>
          </el-menu>
        </el-scrollbar>
      </el-aside>

      <!-- 主内容区 -->
      <el-main class="layout-main">
        <!-- 面包屑 -->
        <div class="breadcrumb-container">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item
              v-for="item in breadcrumbList"
              :key="item.path"
              :to="item.path"
            >
              {{ item.title }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        
        <!-- 页面内容 -->
        <div class="main-content">
          <router-view />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  Fold,
  ArrowDown,
  User,
  Setting
} from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()

const isCollapse = ref(false)

// 菜单路由
const menuRoutes = computed(() => {
  return router.getRoutes().filter(route => route.meta?.title && route.path !== '/')
})

// 当前激活的菜单
const activeMenu = computed(() => {
  const { path } = route
  if (path.startsWith('/user')) return '/user'
  if (path.startsWith('/system')) return '/system'
  return path
})

// 面包屑导航
const breadcrumbList = computed(() => {
  const matched = route.matched.filter(item => item.meta?.title)
  const breadcrumbs = matched.map(item => ({
    path: item.path,
    title: item.meta?.title
  }))
  
  // 添加首页
  if (breadcrumbs.length && breadcrumbs[0].path !== '/dashboard') {
    breadcrumbs.unshift({
      path: '/dashboard',
      title: '首页'
    })
  }
  
  return breadcrumbs
})

// 切换侧边栏折叠状态
const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value
}

// 监听路由变化，处理微应用路由
watch(
  () => route.path,
  (newPath) => {
    // 这里可以添加路由变化的处理逻辑
    console.log('Route changed to:', newPath)
  }
)
</script>

<style scoped>
.layout-container {
  height: 100vh;
}

.layout-header {
  background: #fff;
  border-bottom: 1px solid #e4e7ed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.header-left {
  display: flex;
  align-items: center;
}

.collapse-btn {
  margin-right: 15px;
  font-size: 18px;
}

.title {
  font-size: 20px;
  font-weight: 600;
  color: #303133;
}

.header-right {
  display: flex;
  align-items: center;
}

.user-info {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 12px;
}

.username {
  margin: 0 8px;
  color: #606266;
}

.layout-aside {
  background: #304156;
  transition: width 0.3s;
}

.layout-main {
  background: #f0f2f5;
  padding: 0;
}

.breadcrumb-container {
  background: #fff;
  padding: 16px 20px;
  border-bottom: 1px solid #e4e7ed;
}

.main-content {
  padding: 20px;
  min-height: calc(100vh - 60px - 60px); /* 最小高度：减去header和breadcrumb的高度 */
  height: calc(100vh - 60px - 60px); /* 设置固定高度 */
  overflow: auto;
  display: flex;
  flex-direction: column;
}

:deep(.el-menu) {
  border-right: none;
}

:deep(.el-sub-menu .el-menu-item) {
  background-color: #1f2d3d !important;
}

:deep(.el-sub-menu .el-menu-item:hover) {
  background-color: #001528 !important;
}
</style>