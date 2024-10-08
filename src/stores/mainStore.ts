import type { User } from '@/shared/types'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('store', {
  state: () => {
    return {
      errorsList: [] as any[],
      favoredCities: [] as any[],
      currentUser: null as User | null,
      clickedDayIndex: 0 as number,
      theme: 'light' as string,
    }
  },
  actions: {
    setClickedDayIndex(index: number) {
      this.clickedDayIndex = index
    },
    addError(error: string) {
      this.errorsList.push(error)
    },
    setTheme(theme: string) {
      this.theme = theme
      localStorage.setItem('theme', theme)
    },
  },
})
