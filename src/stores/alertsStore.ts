import { defineStore } from 'pinia'

export const useAlertsStore = defineStore('alerts', {
  state: () => {
    return {
      alertsList: [] as any[],
    }
  },
})
