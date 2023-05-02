<template>
  <el-menu mode="horizontal" :ellipsis="false">
    <el-menu-item index="1">Micro FE with Vite Module Federation</el-menu-item>
    <div class="spacer" />
    <el-menu-item :index="null" @click="() => toggleDark()">
      <span>
        <el-icon>
          <Moon v-if="isDark" />
          <Sunny v-else />
        </el-icon>
      </span>
    </el-menu-item>
    <el-sub-menu v-if="user" index="3">
      <template #title>{{ user.name }}</template>
      <el-menu-item @click="userStore.logout">Logout</el-menu-item>
    </el-sub-menu>
    <el-menu-item v-else index="3" @click="userStore.login">Login</el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { isDark, toggleDark } from '@/composables'
import { Moon, Sunny } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores'

const userStore = useUserStore()
const user = computed(() => userStore.user)
</script>

<style scoped lang="scss">
.spacer {
  flex-grow: 1;
}
</style>
