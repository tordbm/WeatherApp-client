<template>
  <div class="row align-items-md-stretch">
    <ErrorToast v-if="error"
    :error-msg="err"
    />
    <div class="col-md-5 mb-3">
      <div class="p-5 box border rounded-3">
        <label for="inputCity" class="form-label">Last fetch was for {{ lastCity }}: {{ lastFetch }}</label>
        <input 
        v-model="city" 
        type="input"
        placeholder="Enter a city to see its weather!"
        id="inputCity" 
        class="form-control"
        @keyup.enter="fetchData"
        :disabled="loading">
        <button type="button" class="btn btn-outline-success mt-2" @click="fetchData">Submit</button>
        <button type="button" class="btn btn-no-outline ml-5" @click="getLocation()">
          <svg class="pa-0 ma-0" width="20" height="20" fill="red" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
          </svg>
        </button>
      </div>
    </div>
    
    <div class="col-md-6 mb-4">
        <ContentLoader :loading="loading">
          <div v-if="weatherData && !loading">
            <div class="p-5 box border rounded-3">
            <WeatherOverview
            :weather-data="weatherData"
            />
          </div>
          </div>
        </ContentLoader>
    </div>
  </div>
</template>

<script lang="ts">
import ErrorToast from '@/ErrorToast.vue'
import WeatherOverview from '@/components/WeatherOverview.vue'
import ContentLoader from '@/shared/ContentLoader.vue'
import dayjs from 'dayjs'
import { V_CR_KEY } from '@/shared/utils'

export default {
  components: {
    ContentLoader,
    WeatherOverview,
    ErrorToast
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
    url(): string {
      if (this.city !== null){
        return "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
        +this.city+"?unitGroup=metric&key="+V_CR_KEY+"&contentType=json"
      }
      return ''
    },
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
    async getLocation(){
      this.loading = true
      const success = (position:any) => {
              const latitude  = position.coords.latitude
              const longitude = position.coords.longitude
              this.getCityNameFromCoordinates(latitude, longitude)
              this.loading = false
          }

          const error = (err:any) => {
              this.error = true
              this.err = err.message
              this.loading = false
          }
        navigator.geolocation.getCurrentPosition(success, error)
      },
    async getCityNameFromCoordinates(latitude: number, longitude: number) {
      const reverseGeocodingUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`
      try {
          const response = await fetch(reverseGeocodingUrl)
          const data = await response.json()
          const city = data.address.city || data.address.town || data.address.village || data.address.hamlet
          this.city = city
      } catch (error) {
          this.error = true
          this.err = 'Error fetching city name from coordinates.'
          console.error(error)
          this.loading = false
      }
    },
    async fetchData(): Promise<any> {
      if (this.city === null || this.url === ''){
        return
      }
      this.loading = true
      this.lastFetchTime = this.timeStamp
      localStorage.city = this.city
      this.lastFetchedCity = this.city
      localStorage.lastFetch = this.lastFetchTime
      fetch(this.url, {
      signal: AbortSignal.timeout(30000),
      method: "GET",
      })
      .then(resp => resp.json())
      .then(data => {
        this.weatherData = data
        this.loading = false
       })
      .catch((err) => { 
        console.error(err)
        this.error = true
        this.err = err.message
        this.loading = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
