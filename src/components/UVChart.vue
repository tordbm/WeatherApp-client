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
            label: 'UV-Index',
            data: this.uvData,
            borderColor: (context: any) => {
              const chart = context.chart
              const { ctx, chartArea } = chart
              if (!chartArea) {
                return
              }
              const gradient = ctx.createLinearGradient(
                chartArea.left,
                chartArea.bottom,
                chartArea.left,
                chartArea.top
              )
              gradient.addColorStop(0, 'green')
              gradient.addColorStop(0.33, 'yellow')
              gradient.addColorStop(1, 'violet')

              return gradient
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
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            max: 13,
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
