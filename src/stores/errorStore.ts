import { defineStore } from 'pinia'

export const useErrorStore = defineStore('errors', {
  state: () => {
    return {
      errorsList: [] as any[],
    }
  },
})
