<template>
     <Bar :data="data" :options="options"/>
</template>
<script lang="ts">

import { defineComponent } from 'vue'
import { filterNextHours, parseConditions } from '@/shared/utils'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default defineComponent({
    components: {
        Bar,
    },
    props: {
        weatherData: { type: Object, required: true }
    },
    data() {
        return {
            data: {
                labels: [] as string[],
                datasets: [{ 
                    label: 'Precipitation in mm',
                    data: [] as number[],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 0.2)'}]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        suggestedMax: 10,
                        grid: {
                            display: true
                        }
                    }
                }
            },
            todayData: this.weatherData.days[0] as any,
        }
    },
    computed: {
        labels(): Array<string> {
            let i: string[] = []
            this.filterNextHours(this.todayData, this.weatherData).forEach(hour => {
                i.push(hour.datetime.slice(0, 5))
            })
            return i
        },
        precipData(): Array<number> {
            let i: number[] = []
            this.filterNextHours(this.todayData, this.weatherData).forEach(hour => {
                i.push(hour.precip)
            })
            return i
        }
    },
    created() {
        this.data.labels = this.labels
        this.data.datasets[0].data = this.precipData
    },
    methods: {
        filterNextHours,
        parseConditions,
    }
})
</script>