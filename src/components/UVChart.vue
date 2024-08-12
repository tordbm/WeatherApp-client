<template>
  <Line :data="chartData" :options="chartOptions" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createGradient, processHours } from '@/shared/utils'
import { Line } from 'vue-chartjs'
import type { GradientOptions } from '@/shared/types'

const gradientOptions: GradientOptions = {
  startInterval: 0.2,
  middleInterval: 0.4,
  endInterval: 0.8,
  startColor: 'green',
  middleColor: 'yellow',
  endColor: 'violet',
}

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
            label: 'UV-Index',
            data: this.uvData,
            backgroundColor: (context: any) => {
              const chart = context.chart
              const { ctx, chartArea } = chart
              if (!chartArea) {
                return
              }
              return createGradient(ctx, chartArea, gradientOptions)
            },
            borderColor: (context: any) => {
              const chart = context.chart
              const { ctx, chartArea } = chart
              if (!chartArea) {
                return
              }
              return createGradient(ctx, chartArea, gradientOptions)
            },
            tension: 0.4,
            pointRadius: 0,
          },
        ],
      }
    },
    chartOptions() {
      return {
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'UV-Index',
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            suggestedMax: 12,
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
      return processHours(
        this.index,
        this.todayData,
        this.weatherData,
        (hour: any) => hour.datetime.slice(0, 5)
      )
    },
    uvData(): Array<number> {
      return processHours(
        this.index,
        this.todayData,
        this.weatherData,
        (hour: any) => hour.uvindex
      )
    },
  },
})
</script>
