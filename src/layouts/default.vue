<template>
  <div class="layout">
    <el-container>
      <el-header style="--el-header-padding: unset">
        <BaseHeader />
      </el-header>
      <el-container>
        <el-aside width="200px" class="container">
          <BaseSidebar />
        </el-aside>
        <el-main class="container">
          <slot />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader.vue'
import BaseSidebar from '@/components/BaseSidebar.vue'
</script>

<style scoped lang="scss">
.container {
  height: calc(100vh - 60px);
}
</style>
