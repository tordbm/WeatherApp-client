<template>
  <div class="row align-items-md-stretch">
    <ErrorToast v-if="error"
    :error-msg="err"
    />
    <div class="col-md-6 mb-3">
      <div class="p-5 box border rounded-3">
        <label for="inputCity" class="form-label">Last fetch was for {{ lastCity }}: {{ lastFetch }}</label>
        <div class="input-group mb-3">
        <input 
        v-model="city" 
        type="input"
        placeholder="Enter a city to see its weather!"
        id="inputCity" 
        class="form-control"
        @keyup.enter="fetchData"
        :disabled="loading">
        <button type="button" class="btn btn-no-outline" @click="getLocation()">
          <svg class="pa-0 ma-0" width="20" height="20" fill="#d40000" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3
            32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"/>
          </svg>
        </button>
        <button type="button" class="btn btn-outline-primary" @click="fetchData">Submit</button>
        </div>
      </div>
      <div v-if="weatherData && !loading">
          <div class="p-5 mt-3 box border rounded-3">
          <WeatherOverview
          :weather-data="weatherData"
          />
          </div>
      </div>
    </div>
    <ContentLoader :loading="loading"/>
    
    <div v-if="weatherData && !loading" class="col-md-6 mb-4">
      <div class="p-5 box border rounded-3">
        <TempChart
        :weather-data="weatherData"
        />
      </div>
      <div class="p-5 mt-3 box border rounded-3">
        <PrecipChart
        :weather-data="weatherData"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ErrorToast from '@/ErrorToast.vue'
import WeatherOverview from '@/components/WeatherOverview.vue'
import PrecipChart from '@/components/PrecipChart.vue'
import TempChart from '@/components/TempChart.vue'
import ContentLoader from '@/shared/ContentLoader.vue'
import dayjs from 'dayjs'
import { reverseGeocodingUrl, visualCrossingUrl } from '@/shared/utils'

export default {
  components: {
    ContentLoader,
    WeatherOverview,
    ErrorToast,
    PrecipChart,
    TempChart,
},
  data() {
    return {
      weatherData: null as any,
      loading: false as boolean,
      city: null as string | null,
      lastFetchTime: localStorage.lastFetch as string,
      lastFetchedCity: localStorage.city as string,
      error: false as boolean,
      err: null as string | null,
    }
  },
  computed: {
    lastFetch(): string {
      return this.lastFetchTime
    },
    lastCity(): string {
      return this.lastFetchedCity
    },
    timeStamp(): string {
      return dayjs().format("HH:mm:ss DD.MM.YYYY")
    }
  },
  methods: {
    getLocation(){
      this.loading = true
      const success = (position:any) => {
              const latitude  = position.coords.latitude
              const longitude = position.coords.longitude
              this.getCityNameFromCoordinates(latitude, longitude)
          }
      const error = (err:any) => {
          this.error = true
          this.err = err.message
          this.loading = false
          }
      navigator.geolocation.getCurrentPosition(success, error)
    },
    async getCityNameFromCoordinates(latitude: number, longitude: number) {
      try {
          const response = await fetch(reverseGeocodingUrl(latitude, longitude))
          const data = await response.json()
          const city = data.address.city || data.address.town || data.address.village || data.address.hamlet
          this.city = city
          this.fetchData()
      } catch (error:any) {
          this.error = true
          this.err = error.message
          console.error(error)
      }
    },
    async fetchData() {
      if (this.city == null){
        return
      }
      try {
          [this.loading, this.lastFetchTime, this.lastFetchedCity] = [true, this.timeStamp, this.city]
          localStorage.city = this.city
          localStorage.lastFetch = this.lastFetchTime
          const response = await fetch(visualCrossingUrl(this.city))
          const data = await response.json()
          this.weatherData = data
      } catch(error:any) {
          console.error(error)
          this.error = true
          this.err = error.message
      } finally {
          this.loading = false
      }
    }
  }
}
</script>
