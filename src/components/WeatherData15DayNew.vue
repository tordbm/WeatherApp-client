<template>
    <div>
      {{ weatherData.description }}
      <div v-for="(day, index) in weatherData.days" :key="index" class="accordion" :id="'accordionDays' + index">
        <div class="accordion-item">
          <h2 class="accordion-header" :id="'heading' + index">
            <button @click="toggleAccordion(index)" class="accordion-button collapsed" type="button" :data-bs-toggle="'collapse'" :data-bs-target="'#collapse' + index" :aria-expanded="index === 0" :aria-controls="'collapse' + index">
              {{ index === 0 ? 'Today' : formatDayInfo(day) }}
            </button>
          </h2>
          <div :id="'collapse' + index" class="accordion-collapse collapse" :aria-labelledby="'heading' + index" :data-bs-parent="'#accordionDays' + index">
            <div class="accordion-body">
              <table class="table table-light table-hover mt-2">
                <tbody>
                  <tr v-for="hour in day.hours" :key="hour.datetime">
                    <td>{{ hour.datetime.slice(0, 5) }}</td>
                    <td>{{ parseConditions(hour.icon) }}</td>
                    <td>{{ Math.round(hour.temp) }} º</td>
                    <td>{{ hour.precip }} mm</td>
                    <td>{{ Math.round(hour.windspeed / 3.6) }} m/s</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
<script lang="ts">

import { defineComponent } from 'vue';
import { formatDate, parseConditions } from '@/shared/utils'

export default defineComponent({
    props: {
        weatherData: { type: Object, required: true }
    },
    methods: {
      formatDayInfo(day: any): string {
        return formatDate(day.datetime)
     },
     toggleAccordion(index: number): void {
      this.$emit('accordion-click', index);
    },
     formatDate,
     parseConditions,
    }
})

</script>
<style lang="scss">
.accordion {
    .accordion-item {
      background-color: transparent;
      border: none;
      border-bottom: 1px solid rgb(215, 215, 215);

      .accordion-header {
        background-color: transparent;
      }
      .accordion-button {
        background-color: transparent;
      }
    }
  }
</style>