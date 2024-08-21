<template>
  <Line :data="chartData" :options="chartOptions" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { processHours } from '@/shared/utils'
import { Line } from 'vue-chartjs'
import { useMainStore } from '@/stores/mainStore'

export default defineComponent({
  components: {
    Line,
  },
  props: {
    weatherData: { type: Object, required: true },
    index: { type: Number, default: 0 },
  },
  setup() {
    const store = useMainStore()
    return {
      store,
    }
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
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Temperature in °C',
          },
        },
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
      return this.weatherData.days[this.store.clickedDayIndex]
    },
    labels(): Array<string> {
      return processHours(
        this.store.clickedDayIndex,
        this.todayData,
        this.weatherData,
        (hour: any) => hour.datetime.slice(0, 5)
      )
    },
    tempData(): Array<number> {
      return processHours(
        this.store.clickedDayIndex,
        this.todayData,
        this.weatherData,
        (hour: any) => Math.round(hour.temp)
      )
    },
  },
})
</script>
