<template>
    <Line :data="data" :options="options"/>
</template>
<script lang="ts">

import { defineComponent } from 'vue'
import { parseConditions } from '@/shared/utils'
import {
 Chart as ChartJS,
 Title,
 Tooltip,
 Legend,
 LineElement,
 LinearScale,
 CategoryScale,
 PointElement
} from 'chart.js'
import { Line } from 'vue-chartjs'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
dayjs.extend(utc)

export default defineComponent({
   components: {
       Line,
   },
   props: {
       weatherData: { type: Object, required: true }
   },
   data() {
       return {
           data: {
               labels: [] as string[],
               datasets: [{ 
                   label: 'Temperature in °C',
                   data: [] as number[],
                   backgroundColor: 'orange',
                   borderColor: 'orange',
                   tension: 0.4,
                   pointRadius: 0,
                   }]
           },
           options: {
            scales: {
                x: {
                     grid: {
                          display: false
                     }
                },
                y: {
                    grace: '100%',
                     grid: {
                          display: true
                     }
                }
            },
               responsive: true,
               interaction: {
                    intersect: false,
                }
           },
           todayData: this.weatherData.days[0] as any,
       }
   },
   computed: {
       labels(): Array<string> {
           let i: string[] = []
           this.filterNextHours().forEach(hour => {
               i.push(hour.datetime.slice(0, 5))
           })
           return i
       },
       tempData(): Array<number> {
           let i: number[] = []
           this.filterNextHours().forEach(hour => {
               i.push(hour.temp)
           })
           return i
       }
   },
   created() {
       this.data.labels = this.labels
       this.data.datasets[0].data = this.tempData
   },
   methods: {
       filterNextHours(): Array<any> {
           const currentTime = dayjs().utc().add(this.weatherData.tzoffset, 'hours').format("HH")
           return this.todayData.hours.filter(
               (hour: any) => hour.datetime >= currentTime
               )
           },
       parseConditions,
   }
})
</script>