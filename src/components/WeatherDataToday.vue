<template>
    {{ todayData.description }}
        <table class="table table-light table-hover mt-2">
        <tbody>
            <tr v-for="hour in filterNextHours(todayData, weatherData)">
            <td>{{ hour.datetime.slice(0, 5)}}</td>
            <td>
                <h4> {{ parseConditions(hour.icon) }} </h4>
            </td>
            <td>{{ Math.round(hour.temp) }} º</td>
            <td>{{ hour.precip }} mm</td>
            <td>{{ Math.round(hour.windspeed / 3.6) }} m/s</td>
            </tr>
        </tbody>
        </table>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { filterNextHours, parseConditions } from '@/shared/utils'

export default defineComponent({
    props: {
        weatherData: { type: Object, required: true }
    },
    data() {
    return {
        todayData: this.weatherData.days[0] as any,
    }
    },
    methods: {
        filterNextHours,
        parseConditions,
    }
})
</script>