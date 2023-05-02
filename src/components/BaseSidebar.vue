<template>
  <el-menu router :default-active="$route.path" style="height: 100%">
    <el-menu-item index="/">Home</el-menu-item>
    <template v-for="menu in MENUS">
      <el-sub-menu v-if="menu.submenus" :key="menu.path" :index="menu.path">
        <template #title>{{ menu.label }}</template>
        <el-menu-item v-for="submenu in menu.submenus" :key="submenu.path" :index="submenu.path">
          {{ submenu.label }}
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item v-else :key="menu.path" :index="menu.path">
        {{ menu.label }}
      </el-menu-item>
    </template>
    <el-menu-item index="/settings">Settings</el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { MENUS } from '@/utils/constants'
</script>

<style scoped lang="scss"></style>
