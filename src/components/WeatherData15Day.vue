<template>
  {{ weatherData.description }}
  <table class="table table-light table-hover mt-2">
    <thead>
      <tr>
        <th scope="col">Date</th>
        <th scope="col"></th>
        <th scope="col">Precip.</th>
        <th scope="col">Precip. Chance</th>
        <th scope="col">Temp.</th>
        <th scope="col">L. Temp.</th>
        <th scope="col">H. Temp.</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="day in weatherData.days">
        <td>{{ formatDate(day.datetime) }}</td>
        <td>
          <h4>{{ parseConditions(day.icon) }}</h4>
        </td>
        <td>{{ day.precip }} mm</td>
        <td>{{ day.precipprob }} %</td>
        <td>{{ day.temp }} º</td>
        <td>{{ day.tempmin }} º</td>
        <td>{{ day.tempmax }} º</td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { formatDate, parseConditions } from '@/shared/utils'

export default defineComponent({
  props: {
    weatherData: { type: Object, required: true },
  },
  methods: {
    formatDate,
    parseConditions,
  },
})
</script>
