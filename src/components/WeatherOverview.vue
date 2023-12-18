<template>
    <div>
        <h2>
            {{ weatherData.address }}
        </h2>
        <h5>
            {{ weatherData.resolvedAddress }}
        </h5>
        {{ weatherData.description }}
    <table class="table table-hover mt-2">
    <thead>
        <tr>
        <th scope="col">Date</th>
        <th scope="col"></th>
        <th scope="col">Temp.</th>
        <th scope="col">L. Temp.</th>
        <th scope="col">H. Temp.</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="day in weatherData.days">
        <td>{{ formatDate(day.datetime) }}</td>
        <td>{{ parseConditions(day.icon) }}</td>
        <td>{{ day.temp }} º</td>
        <td>{{ day.tempmin }} º</td>
        <td>{{ day.tempmax }} º</td>
        </tr>
    </tbody>
    </table>  
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import dayjs from 'dayjs'
import { wordToEmoji } from '@/shared/utils'

export default defineComponent({
    props:{
        weatherData: { type: Object, required: true }
    },
    methods: {
        formatDate(date: string): string {
            return dayjs(date).format("ddd DD")
        },
        parseConditions(icon: string): any {
            return wordToEmoji[icon]
        }
    }

})
</script>
<style lang="scss" scoped>
h2::first-letter {
    text-transform: capitalize;
}
</style>