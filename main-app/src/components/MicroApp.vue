<template>
  <div class="micro-app-container">
    <div id="micro-app-container" class="micro-app-content"></div>
  </div>
</template>

<script setup lang="ts">
// 微应用容器组件
// qiankun会自动将子应用挂载到 #micro-app-container 容器中
</script>

<style scoped>
.micro-app-container {
  width: 100%;
  flex: 1;
  min-height: 600px; /* 设置最小高度 */
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.micro-app-content {
  width: 100%;
  height: 100%;
  min-height: 600px; /* 设置最小高度 */
}
</style>