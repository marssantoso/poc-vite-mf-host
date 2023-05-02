import { createRouter, createWebHistory } from 'vue-router'
import Index from './pages/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
    },
    // code split
    {
      path: '/settings',
      name: 'settings',
      component: () => import('./pages/settings/index.vue'),
    },
    {
      path: '/app-1',
      name: 'app-1',
      component: () => import('remote/app-1/index.vue'),
    },
    {
      path: '/app-1/subpage',
      name: 'app-1-subpage',
      component: () => import('remote/app-1/subpage/index.vue'),
    },
  ],
})

export default router
