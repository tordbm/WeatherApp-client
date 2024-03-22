<template>
  <Line :data="chartData" :options="chartOptions" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { filterNextHours } from '@/shared/utils'
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
      let nextHours: string[] = []
      if (this.index > 0) {
        this.todayData.hours.forEach((hour: any) => {
          nextHours.push(hour.datetime.slice(0, 5))
        })
        return nextHours
      }
      this.filterNextHours(this.todayData, this.weatherData).forEach((hour) => {
        nextHours.push(hour.datetime.slice(0, 5))
      })
      return nextHours
    },
    windSpeedData(): Array<number> {
      let nextWindSpeeds: number[] = []
      if (this.index > 0) {
        this.todayData.hours.forEach((hour: any) => {
          nextWindSpeeds.push(Math.round(hour.windspeed / 3.6))
        })
        return nextWindSpeeds
      }
      this.filterNextHours(this.todayData, this.weatherData).forEach((hour) => {
        nextWindSpeeds.push(Math.round(hour.windspeed / 3.6))
      })
      return nextWindSpeeds
    },
    windGustsData(): Array<number> {
      let nextGustsSpeed: number[] = []
      if (this.index > 0) {
        this.todayData.hours.forEach((hour: any) => {
          nextGustsSpeed.push(Math.round(hour.windgust / 3.6))
        })
        return nextGustsSpeed
      }
      this.filterNextHours(this.todayData, this.weatherData).forEach((hour) => {
        nextGustsSpeed.push(Math.round(hour.windgust / 3.6))
      })
      return nextGustsSpeed
    },
  },
  methods: {
    filterNextHours,
  },
})
</script>
