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
            label: 'Temperature in °C',
            data: this.tempData,
            backgroundColor: 'orange',
            borderColor: 'orange',
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
    tempData(): Array<number> {
      let nextTemps: number[] = []
      if (this.index > 0) {
        this.todayData.hours.forEach((hour: any) => {
          nextTemps.push(Math.round(hour.temp))
        })
        return nextTemps
      }
      this.filterNextHours(this.todayData, this.weatherData).forEach((hour) => {
        nextTemps.push(Math.round(hour.temp))
      })
      return nextTemps
    },
  },
  methods: {
    filterNextHours,
  },
})
</script>
