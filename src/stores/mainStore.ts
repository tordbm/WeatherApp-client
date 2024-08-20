import type { User } from '@/shared/types'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('store', {
  state: () => {
    return {
      errorsList: [] as any[],
      favoredCities: [] as any[],
      currentUser: null as User | null,
    }
  },
})
