<template>
  <div class="row align-items-center">
    <Alerts v-if="weatherData.alerts.length > 0" :weather-data="weatherData" />
    <div class="col-md">
      <h2>
        {{ weatherData.address }}
      </h2>
    </div>
    <div class="col-md-auto">
      <nav class="nav justify-content-end">
        <div v-if="today">
          <!-- prettier-ignore-attribute @click.prevent -->
          <input
            type="radio"
            class="btn-check"
            id="Today"
            @click.prevent="today = true; handleAccordionClick(0)"
            checked />
          <label class="btn" for="Today">Today</label>
        </div>
        <div v-else>
          <!-- prettier-ignore-attribute @click.prevent -->
          <input
            type="radio"
            class="btn-check"
            id="Today"
            @click.prevent="today = true; handleAccordionClick(0)" />
          <label class="btn" for="Today">Today</label>
        </div>

        <div v-if="!today">
          <input
            type="radio"
            class="btn-check"
            id="15Day"
            @click.prevent="today = false"
            checked />
          <label class="btn" for="15Day">15 Day</label>
        </div>
        <div v-else>
          <input
            type="radio"
            class="btn-check"
            id="15Day"
            @click.prevent="today = false" />
          <label class="btn" for="15Day">15 Day</label>
        </div>
      </nav>
    </div>
  </div>

  <h5>
    {{ weatherData.resolvedAddress }}
  </h5>
  <WeatherDataToday v-if="today" :weather-data="weatherData" />
  <WeatherData15Day
    v-else
    :weather-data="weatherData"
    @accordion-click="handleAccordionClick" />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import WeatherData15Day from './WeatherData15Day.vue'
import WeatherDataToday from './WeatherDataToday.vue'
import Alerts from './Alerts.vue'

export default defineComponent({
  emits: ['accordion-click'],
  components: {
    WeatherData15Day,
    WeatherDataToday,
    Alerts,
  },
  props: {
    weatherData: { type: Object, required: true },
  },
  data() {
    return {
      today: true,
    }
  },
  methods: {
    handleAccordionClick(index: number) {
      this.$emit('accordion-click', index)
    },
  },
})
</script>

<style lang="scss" scoped>
h2::first-letter {
  text-transform: capitalize;
}
</style>
