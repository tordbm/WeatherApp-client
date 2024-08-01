<template>
  <Line :data="chartData" :options="chartOptions" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { processHours } from '@/shared/utils'
import { Line } from 'vue-chartjs'

export default defineComponent({
  components: {
    Line,
  },
  props: {
    weatherData: { type: Object, required: true },
    index: { type: Number, default: 0 },
  },
  computed: {
    chartData() {
      return {
        labels: this.labels,
        datasets: [
          {
            label: 'Windspeed in m/s',
            data: this.windSpeedData,
            backgroundColor: 'DeepPink',
            borderColor: 'DeepPink',
            tension: 0.4,
            pointRadius: 0,
          },
          {
            label: 'Windgusts in m/s',
            data: this.windGustsData,
            backgroundColor: 'gray',
            borderColor: 'gray',
            tension: 0.4,
            pointRadius: 0,
          },
        ],
      }
    },
    chartOptions() {
      return {
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            grace: '100%',
            grid: {
              display: true,
            },
          },
        },
        responsive: true,
        interaction: {
          intersect: false,
        },
      }
    },
    todayData(): any {
      return this.weatherData.days[this.index]
    },
    labels(): Array<string> {
      return processHours(this.index, this.todayData, this.weatherData, (hour: any) => hour.datetime.slice(0, 5))
    },
    windSpeedData(): Array<number> {
      return processHours(this.index, this.todayData, this.weatherData, (hour: any) => Math.round(hour.windspeed / 3.6))
    },
    windGustsData(): Array<number> {
      return processHours(this.index, this.todayData, this.weatherData, (hour: any) => Math.round(hour.windgust / 3.6))
    },
  },
})
</script>
