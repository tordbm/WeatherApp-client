<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { processHours } from '@/shared/utils'
import { Bar } from 'vue-chartjs'
import { useMainStore } from '@/stores/mainStore'

export default defineComponent({
  components: {
    Bar,
  },
  props: {
    weatherData: { type: Object, required: true },
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
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Precipitation in mm',
          },
        },
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
    precipData(): Array<number> {
      return processHours(
        this.store.clickedDayIndex,
        this.todayData,
        this.weatherData,
        (hour: any) => hour.precip.toFixed(1)
      )
    },
  },
})
</script>
