<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { filterNextHours } from '@/shared/utils'
import { Bar } from 'vue-chartjs'

export default defineComponent({
  components: {
    Bar,
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
            label: 'Precipitation in mm',
            data: this.precipData,
            backgroundColor: 'DeepSkyBlue',
            borderColor: 'DeepSkyBlue',
          },
        ],
      }
    },
    chartOptions() {
      return {
        responsive: true,
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            suggestedMax: 5,
            grid: {
              display: true,
            },
          },
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
    precipData(): Array<number> {
      let nextPrecip: number[] = []
      if (this.index > 0) {
        this.todayData.hours.forEach((hour: any) => {
          nextPrecip.push(hour.precip)
        })
        return nextPrecip
      }
      this.filterNextHours(this.todayData, this.weatherData).forEach((hour) => {
        nextPrecip.push(Math.round(hour.precip))
      })
      return nextPrecip
    },
  },
  methods: {
    filterNextHours,
  },
})
</script>
