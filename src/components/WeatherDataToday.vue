<template>
    {{ todayData.description }}
        <table class="table table-hover mt-2">
        <thead>
            <tr>
            <th scope="col">Hour</th>
            <th scope="col"></th>
            <th scope="col">Temp.</th>
            <th scope="col">Precip.</th>
            <th scope="col">Chance of Precip.</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="hour in filterNextHours()">
            <td>{{ hour.datetime .slice(0, 5)}}</td>
            <td>{{ parseConditions(hour.icon) }}</td>
            <td>{{ hour.temp }} º</td>
            <td>{{ hour.precip }} mm</td>
            <td>{{ hour.precipprob }} %</td>
            </tr>
        </tbody>
        </table>  
</template>
<script lang="ts">

import { defineComponent } from 'vue';
import { formatDate, parseConditions } from '@/shared/utils'
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
        return this.todayData.hours.filter(
            (hour: any) => hour.datetime >= dayjs().utc().add(this.weatherData.tzoffset-1, 'hours').format("HH:mm:ss")
            )
    },
        formatDate,
        parseConditions,
    }
})

</script>