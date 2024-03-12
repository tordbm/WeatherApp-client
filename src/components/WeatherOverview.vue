<template>
    <div>
        <nav class="nav justify-content-end">
            <a v-if="mode === 'Today'" class="nav-link disabled" href="#">Today</a>
            <a v-else class="nav-link" href="#" @click.prevent="mode = 'Today'; handleAccordionClick(0)">Today</a>
            <a v-if="mode === '15Day'" class="nav-link disabled" href="#">15 Day Forecast (NEW)</a>
            <a v-else class="nav-link" href="#" @click.prevent="mode = '15Day'">15 Day Forecast (NEW)</a>
            <a v-if="mode === '15DayOld'" class="nav-link disabled" href="#">15 Day Forecast (OLD)</a>
            <a v-else class="nav-link" href="#" @click.prevent="mode = '15DayOld'">15 Day Forecast (OLD)</a>
        </nav>
        <h2>
            {{ weatherData.address }}
        </h2>
        <h5>
            {{ weatherData.resolvedAddress }}
        </h5>
        <WeatherDataToday v-if="mode === 'Today'"
        :weather-data="weatherData"/>
        <WeatherData15DayNew v-if="mode === '15Day'"
        :weather-data="weatherData"
        @accordion-click="handleAccordionClick"/>
        <WeatherData15Day v-if="mode === '15DayOld'"
        :weather-data="weatherData"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WeatherData15Day from './WeatherData15Day.vue';
import WeatherDataToday from './WeatherDataToday.vue';
import WeatherData15DayNew from './WeatherData15DayNew.vue';

export default defineComponent({
    components: {
    WeatherData15Day,
    WeatherDataToday,
    WeatherData15DayNew,
    },
    props: {
        weatherData: { type: Object, required: true }
    },
    data() {
        return {
            mode: 'Today' as string
        }
    },
    methods: {
        handleAccordionClick(index: number) {
         this.$emit('accordion-click', index);
  }
    }
    
})
</script>
<style lang="scss" scoped>
h2::first-letter {
    text-transform: capitalize;
}
</style>