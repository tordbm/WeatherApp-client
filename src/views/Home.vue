<template>
  <div class="row align-items-md-stretch">
    <ErrorToast v-if="error" :error-msg="err" />
    <div class="col-md-6 mb-3">
      <div class="col-md-8 mb-3">
        <div class="input-group mb-3">
          <input
            v-model="city"
            type="input"
            placeholder="Enter a city to see its weather!"
            id="inputCity"
            class="form-control form-control-lg"
            @keyup.enter="fetchData"
            :disabled="loading" />
          <button
            type="button"
            class="btn btn-no-outline"
            @click="getLocation"
            :disabled="loading">
            <svg
              class="pa-0 ma-0"
              width="20"
              height="20"
              fill="#d40000"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3
            32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
            </svg>
          </button>
        </div>
      </div>
      <WeatherOverview
        v-if="weatherData && !loading"
        :weather-data="weatherData"
        @accordion-click="handleAccordionClick" />
    </div>

    <ContentLoader v-slot :loading="loading">
      <div v-if="weatherData && !loading" class="col-md-6 mb-4">
        <div class="p-5">
          <TempChart
            :weather-data="weatherData"
            :index="clickedAccordionIndex" />
        </div>

        <div class="p-5">
          <PrecipChart
            :weather-data="weatherData"
            :index="clickedAccordionIndex" />
        </div>
        <div class="p-5">
          <WindChart
            :weather-data="weatherData"
            :index="clickedAccordionIndex" />
        </div>
      </div>
    </ContentLoader>
  </div>
</template>

<script lang="ts">
import ErrorToast from '@/ErrorToast.vue'
import WeatherOverview from '@/components/WeatherOverview.vue'
import PrecipChart from '@/components/PrecipChart.vue'
import TempChart from '@/components/TempChart.vue'
import WindChart from '@/components/WindChart.vue'
import ContentLoader from '@/shared/ContentLoader.vue'
import { reverseGeocodingUrl, visualCrossingUrl } from '@/shared/utils'

export default {
  components: {
    ContentLoader,
    WeatherOverview,
    ErrorToast,
    PrecipChart,
    TempChart,
    WindChart,
  },
  data() {
    return {
      weatherData: null as any,
      loading: false as boolean,
      city: localStorage.city as string | null,
      lastFetchedCity: localStorage.city as string,
      error: false as boolean,
      err: null as string | null,
      clickedAccordionIndex: 0 as number,
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    getLocation() {
      this.loading = true
      const success = (position: any) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        this.getCityNameFromCoordinates(latitude, longitude)
      }
      const error = (err: any) => {
        this.error = true
        this.err = err.message
        this.loading = false
      }
      navigator.geolocation.getCurrentPosition(success, error, {
        timeout: 10000,
        maximumAge: 30000,
      })
    },
    async getCityNameFromCoordinates(latitude: number, longitude: number) {
      try {
        const response = await fetch(reverseGeocodingUrl(latitude, longitude))
        const data = await response.json()
        const city =
          data.address.city ||
          data.address.town ||
          data.address.village ||
          data.address.hamlet
        this.city = city
        this.fetchData()
      } catch (error: any) {
        this.error = true
        this.err = error.message
        console.error(error)
      }
    },
    async fetchData() {
      if (this.city == null || this.city === '') {
        return
      }
      try {
        ;[this.loading, this.lastFetchedCity] = [true, this.city]
        localStorage.city = this.city
        const response = await fetch(visualCrossingUrl(this.city))
        const data = await response.json()
        this.weatherData = data
        this.clickedAccordionIndex = 0
      } catch (error: any) {
        console.error(error)
        this.error = true
        this.err = error.message
      } finally {
        this.loading = false
      }
    },
    handleAccordionClick(index: number) {
      if (typeof index === 'number') {
        this.clickedAccordionIndex = index
      } else {
        const msg = 'Invalid index:' + index
        console.error(msg)
        this.err = msg
      }
    },
  },
}
</script>
