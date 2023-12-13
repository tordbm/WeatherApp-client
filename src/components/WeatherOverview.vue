<template>
    <div>
        <h3>
            {{ weatherData.resolvedAddress }}
        </h3>
        {{ weatherData.description }}
    <table class="table table-hover mt-2">
    <thead>
        <tr>
        <th scope="col">Date</th>
        <th scope="col">Conditions</th>
        <th scope="col">Temp.</th>
        <th scope="col">L. Temp.</th>
        <th scope="col">H. Temp.</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="day in weatherData.days">
        <td>{{ formatDate(day.datetime) }}</td>
        <td>{{ day.conditions }}</td>
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


export default defineComponent({
    props:{
        weatherData: { type: Object, required: true }
    },
    data(){
        return {

        }
    },

    methods: {
        formatDate(date: string): string {
            return dayjs(date).format("ddd DD")
        }
    }

})

</script>