<template>
  <div class="row align-items-md-stretch">
    <div class="col-md-6 mb-4">
      <div class="p-5 box border rounded-3">
        <label for="inputCity" class="form-label">Last fetch was for {{ lastCity }}: {{ lastFetch }}</label>
        <input 
        v-model="city" 
        type="input"
        placeholder="Enter a city to see its weather!"
        id="inputCity" 
        class="form-control" 
        :disabled="loading">
        <button type="button" class="btn btn-outline-success mt-2" @click="fetchData">Submit</button>
      </div>
    </div>
    
    <div class="col-md-6 mb-4">
      <div class="p-5 box border rounded-3">
        <ContentLoader :loading="loading">
          <div v-if="weatherData && !loading">
            <WeatherOverview
            :weather-data="weatherData"
            />
          </div>
          <div v-else>
            <p>No weather data available</p>
          </div>
        </ContentLoader>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import WeatherOverview from '@/components/WeatherOverview.vue'
import ContentLoader from '@/shared/ContentLoader.vue'
import dayjs from 'dayjs'

export default {
  components: {
    ContentLoader,
    WeatherOverview
  },
  data() {
    return {
      weatherData: null as any,
      loading: false as boolean,
      city: null as string | null,
      lastFetchTime: localStorage.lastFetch as string,
      lastFetchedCity: localStorage.city as string,
    }
  },
  computed: {
    url(): string {
      if (this.city !== null){
        return "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+this.city+"?unitGroup=metric&key=XL48RQQY7M84CDS92HV6S5TW5&contentType=json"
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
    async fetchData():Promise<any> {
      if (this.city === null || this.url === ''){
        return
      }
      this.loading = true
      this.lastFetchTime = this.timeStamp
      localStorage.city = this.city
      this.lastFetchedCity = this.city
      localStorage.lastFetch = this.lastFetchTime
      fetch(this.url, {
      "method": "GET",
      "headers": {
      }
      })
      .then(resp => resp.json())
      .then(data => {
        this.weatherData = data
        this.loading = false
       })
      .catch(err => { console.log(err) });
    }
  }
}

</script>

<style lang="scss" scoped>
</style>