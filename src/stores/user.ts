import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@/utils/types'

const DUMMY_USER: User = {
  id: 1,
  name: 'Ashlie Schaefer',
  role: 'superadmin',
}

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)

  const login = () => {
    user.value = DUMMY_USER
  }

  const logout = () => {
    user.value = null
  }

  return { user, login, logout }
})
