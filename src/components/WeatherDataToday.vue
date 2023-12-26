<template>
    {{ todayData.description }}
        <table class="table table-light table-hover mt-2">
        <tbody>
            <tr v-for="hour in filterNextHours()">
            <td>{{ hour.datetime.slice(0, 5)}}</td>
            <td>{{ parseConditions(hour.icon) }}</td>
            <td>{{ hour.temp }} º</td>
            <td>{{ hour.precip }} mm</td>
            <td>{{ Math.round(hour.windspeed / 3.6) }} m/s</td>
            </tr>
        </tbody>
        </table>  
</template>
<script lang="ts">

import { defineComponent } from 'vue';
import { parseConditions } from '@/shared/utils'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

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
        filterNextHours(): Array<any> {
            const currentTime = dayjs().utc().add(this.weatherData.tzoffset, 'hours').format("HH")
            return this.todayData.hours.filter(
                (hour: any) => hour.datetime >= currentTime
                )
            },
        parseConditions,
    }
})

</script>