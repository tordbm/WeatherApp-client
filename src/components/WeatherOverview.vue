<template>
    <div>
        <nav class="nav justify-content-end">
            <a v-if="mode === 'Today'" class="nav-link disabled" href="#">Today</a>
            <a v-else class="nav-link" href="#" @click="mode = 'Today'">Today</a>
            <a class="nav-link disabled" href="#" @click="mode = 'ThisWeek'">This Week Hourly(TODO)</a>
            <a v-if="mode === '15Day'" class="nav-link disabled" href="#">15 Day Forecast</a>
            <a v-else class="nav-link" href="#" @click="mode = '15Day'">15 Day Forecast</a>
        </nav>
        <h2>
            {{ weatherData.address }}
        </h2>
        <h5>
            {{ weatherData.resolvedAddress }}
        </h5>
        <WeatherDataToday v-if="mode === 'Today'"
        :weather-data="weatherData"/>
        <WeatherData15Day v-if="mode === '15Day'"
        :weather-data="weatherData"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WeatherData15Day from './WeatherData15Day.vue';
import WeatherDataToday from './WeatherDataToday.vue';

export default defineComponent({
    components: { WeatherData15Day, WeatherDataToday },
    props: {
        weatherData: { type: Object, required: true }
    },
    data() {
        return {
            mode: 'Today' as string
        }
    }
    
})
</script>
<style lang="scss" scoped>
h2::first-letter {
    text-transform: capitalize;
}
</style>