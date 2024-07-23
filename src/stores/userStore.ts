import type { User } from '@/shared/types'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      currentUser: null as User | null,
    }
  },
})
