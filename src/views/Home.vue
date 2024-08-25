<template>
  <div class="row align-items-md-stretch">
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
            <i style="color: #d40000" class="bi bi-geo-alt-fill fs-4"></i>
          </button>
          <FavoriteCityDropdown
            v-if="store.currentUser"
            class="mt-1"
            @selected-city="setCity" />
        </div>
      </div>
      <WeatherOverview
        v-if="weatherData && !loading"
        :weather-data="weatherData" />
    </div>

    <ContentLoader :loading="loading">
      <div v-if="weatherData && !loading" class="col-md-6">
        <nav class="nav justify-content-center mt-custom-4-3">
          <div v-for="chart in charts" :key="chart.id">
            <input
              type="radio"
              class="btn-check"
              :id="chart.id"
              :checked="showChart === chart.id"
              @click="showChart = chart.id" />
            <label class="btn" :for="chart.id">{{ chart.label }}</label>
          </div>
        </nav>
        <div v-if="showChart === 'temp'" class="p-5">
          <TempChart :weather-data="weatherData" />
        </div>

        <div v-if="showChart === 'precip'" class="p-5">
          <PrecipChart :weather-data="weatherData" />
        </div>
        <div v-if="showChart === 'uv'" class="p-5">
          <UVChart :weather-data="weatherData" />
        </div>
        <div v-if="showChart === 'wind'" class="p-5">
          <WindChart :weather-data="weatherData" />
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
import { reverseGeocodingUrl, visualCrossingUrl } from '@/shared/api'
import { useMainStore } from '@/stores/mainStore'
import FavoriteCityDropdown from '@/components/FavoriteCityDropdown.vue'
import UVChart from '@/components/UVChart.vue'

export default {
  components: {
    ContentLoader,
    WeatherOverview,
    FavoriteCityDropdown,
    ErrorToast,
    PrecipChart,
    TempChart,
    WindChart,
    UVChart,
  },
  setup() {
    const store = useMainStore()
    return {
      store,
    }
  },
  data() {
    return {
      weatherData: null as any,
      loading: false as boolean,
      city: localStorage.city as string | null,
      lastFetchedCity: localStorage.city as string,
      showChart: 'temp' as string,
      charts: [
        { id: 'temp', label: 'Temperature' },
        { id: 'precip', label: 'Precipitation' },
        { id: 'uv', label: 'UV Index' },
        { id: 'wind', label: 'Wind' },
      ],
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
        this.store.addError(err.message)
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
        this.city = data.address.city || data.address.town
        this.fetchData()
      } catch (error: any) {
        this.store.addError(error.message)
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
        this.store.setClickedDayIndex(0)
      } catch (error: any) {
        console.error(error)
        this.store.addError(error.message)
      } finally {
        this.loading = false
      }
    },
    setCity(city: string) {
      this.city = city
      this.fetchData()
    },
  },
}
</script>
<style lang="scss" scoped>
@media (min-width: 768px) {
  .mt-custom-4-3 {
    margin-top: 4.3rem;
  }
}
</style>
