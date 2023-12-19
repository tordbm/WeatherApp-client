<template>
  <div class="row align-items-md-stretch">
    <ErrorToast v-if="error"
    :error-msg="err"
    />
    <div class="col-md-4">
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
    </div>
    
    <div class="col-md-6 mb-4 mt-4">
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
      err: Error
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
      });
    }
  }
}

</script>
<style lang="scss" scoped>
</style>
