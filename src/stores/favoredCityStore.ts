import { defineStore } from 'pinia'

export const useFavoredCityStore = defineStore('favoredCities', {
  state: () => {
    return {
      favoredCities: [] as any[],
    }
  },
})
