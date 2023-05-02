import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Federation from '@originjs/vite-plugin-federation'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import importMetaEnv from "@import-meta-env/unplugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));
  const remotes = require('./remotes').default
  return {
    plugins: [
      vue(),
      ElementPlus({}),
      AutoImport({resolvers: [ElementPlusResolver()]}),
      Components({resolvers: [ElementPlusResolver()]}),
      Federation({
        name: 'host',
        remotes,
        shared: ['vue', 'vue-router', 'element-plus'],
      }),
      importMetaEnv.vite({
        example: '.env.example',
        transformMode: 'runtime',
      }),
    ],
    build: {
      minify: false,
      target: ['chrome89', 'edge89', 'firefox89', 'safari15'],
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
