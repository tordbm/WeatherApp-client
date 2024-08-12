<template>
  <Line :data="chartData" :options="chartOptions" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { processHours } from '@/shared/utils'
import { Line } from 'vue-chartjs'
import { createGradient } from '@/shared/utils'
import type { GradientOptions } from '@/shared/types'

const gradientOptions: GradientOptions = {
  startInterval: 0.33,
  middleInterval: 0.8,
  endInterval: 0.9,
  startColor: 'DeepSkyBlue',
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
            label: 'Windspeed in m/s',
            data: this.windSpeedData,
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
          {
            label: 'Windgusts in m/s',
            data: this.windGustsData,
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
            text: 'Wind in m/s',
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            suggestedMax: 20,
            beginAtZero: true,
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
    windSpeedData(): Array<number> {
      return processHours(
        this.index,
        this.todayData,
        this.weatherData,
        (hour: any) => Math.round(hour.windspeed / 3.6)
      )
    },
    windGustsData(): Array<number> {
      return processHours(
        this.index,
        this.todayData,
        this.weatherData,
        (hour: any) => Math.round(hour.windgust / 3.6)
      )
    },
  },
})
</script>
