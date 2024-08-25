<template>
  <div class="row align-items-center">
    <Alerts v-if="weatherData.alerts.length > 0" :weather-data="weatherData" />
    <div class="col-md d-flex align-items-center">
      <h2>
        {{ weatherData.address }}
      </h2>
      <template v-if="store.currentUser">
        <button
          v-if="!isFavoredCity"
          type="button"
          class="btn btn-lg mb-2"
          @click="favoredCity">
          <i class="bi bi-heart"></i>
        </button>
        <button v-else-if="isFavoredCity" type="button" class="btn btn-lg mb-2">
          <i style="color: #f25ac9" class="bi bi-heart-fill"></i>
        </button>
      </template>
    </div>
    <div class="col-md-auto">
      <nav class="nav justify-content-end">
        <div v-for="option in options" :key="option.id">
          <input
            type="radio"
            class="btn-check"
            :id="option.id"
            v-model="today"
            :value="option.value"
            @click="option.action" />
          <label class="btn" :for="option.id">{{ option.label }}</label>
        </div>
      </nav>
    </div>
  </div>

  <h5>
    {{ weatherData.resolvedAddress }}
  </h5>
  <WeatherDataToday v-if="today" :weather-data="weatherData" />
  <WeatherData15Day v-else :weather-data="weatherData" />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import WeatherData15Day from './WeatherData15Day.vue'
import WeatherDataToday from './WeatherDataToday.vue'
import Alerts from './Alerts.vue'
import { useMainStore } from '@/stores/mainStore'
import { addFavoredCity } from '@/shared/api'

export default defineComponent({
  components: {
    WeatherData15Day,
    WeatherDataToday,
    Alerts,
  },
  props: {
    weatherData: { type: Object, required: true },
  },
  setup() {
    const store = useMainStore()
    const setClickedDayIndex = (index: number) =>
      store.setClickedDayIndex(index)
    return {
      store,
      setClickedDayIndex,
    }
  },
  data() {
    return {
      today: true,
      options: [
        {
          id: 'Today',
          label: 'Today',
          action: () => this.setClickedDayIndex(0),
          value: true,
        },
        {
          id: '15Day',
          label: '15 Day',
          value: false,
        },
      ],
    }
  },
  computed: {
    isFavoredCity(): boolean {
      return this.store.favoredCities.some(
        (item) =>
          item.city.toLowerCase() === this.weatherData.address.toLowerCase()
      )
    },
  },
  methods: {
    async favoredCity() {
      if (this.isFavoredCity) {
        return
      }
      try {
        const response = await addFavoredCity(this.weatherData.address)
        this.store.favoredCities.push({
          favored_id: response.favored_id,
          city: response.city,
        })
      } catch (error: any) {
        this.store.addError(error.message)
      }
    },
  },
})
</script>

<style lang="scss" scoped>
h2::first-letter {
  text-transform: capitalize;
}
</style>
