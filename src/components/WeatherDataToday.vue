<template>
    {{ todayData.description }}
    <table class="table table-light table-hover mt-2">
        <tbody>
            <tr v-for="hour in filterNextHours(todayData, weatherData)">
            <td>{{ hour.datetime.slice(0, 5)}}</td>
            <td>
                <h4 ref="tooltip" :title="hour.icon"> {{ parseConditionsToText(hour.icon) }} </h4>
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
import { filterNextHours, initTooltips, parseConditions, parseConditionsToText } from '@/shared/utils'

export default defineComponent({
    props: {
        weatherData: { type: Object, required: true }
    },
    data() {
        return {
            todayData: this.weatherData.days[0] as any,
        }
    },
    mounted() {
        this.initTooltip()
    },
    methods: {
        initTooltip: initTooltips('tooltip'),
        filterNextHours,
        parseConditions,
        parseConditionsToText,
    }
})
</script>