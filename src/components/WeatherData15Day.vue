<template>
  {{ weatherData.description }}
  <div
    v-for="(day, index) in weatherData.days"
    :key="index"
    class="accordion"
    :id="'accordionDays' + index">
    <div class="accordion-item">
      <h2 class="accordion-header" :id="'heading' + index">
        <button
          @click="toggleAccordion(index)"
          class="accordion-button collapsed"
          type="button"
          :data-bs-toggle="'collapse'"
          :data-bs-target="'#collapse' + index"
          :aria-expanded="index === 0"
          :aria-controls="'collapse' + index">
          {{ index === 0 ? 'Today' : formatDayInfo(day) }}
          <div class="icon-right">
            {{ parseConditions(day.icon) }}
          </div>
          <div class="degree-right">{{ Math.round(day.tempmax) }} º</div>
        </button>
      </h2>
      <div
        :id="'collapse' + index"
        class="accordion-collapse collapse"
        :aria-labelledby="'heading' + index"
        :data-bs-parent="'#accordionDays' + index">
        <div class="accordion-body">
          <table class="table table-hover mt-2">
            <tbody>
              <tr v-for="hour in day.hours" :key="hour.datetime">
                <td>{{ hour.datetime.slice(0, 5) }}</td>
                <td>
                  <h4 ref="tooltip" :title="parseConditionsToText(hour.icon)">
                    {{ parseConditions(hour.icon) }}
                  </h4>
                </td>
                <td>{{ Math.round(hour.temp) }} º</td>
                <td>{{ showPrecip(hour.precip) }}</td>
                <td>{{ Math.round(hour.windspeed / 3.6) }} m/s</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import {
  formatDate,
  initTooltips,
  parseConditions,
  parseConditionsToText,
  showPrecip,
  formatDateShort,
} from '@/shared/utils'
import { useMainStore } from '@/stores/mainStore'

export default defineComponent({
  props: {
    weatherData: { type: Object, required: true },
  },
  setup() {
    const store = useMainStore()
    return {
      parseConditions,
      parseConditionsToText,
      showPrecip,
      store,
    }
  },
  mounted() {
    this.initTooltip()
  },
  methods: {
    formatDayInfo(day: any): string {
      return screen.width >= 1024
        ? formatDate(day.datetime)
        : formatDateShort(day.datetime)
    },
    toggleAccordion(index: number) {
      this.store.setClickedDayIndex(index)
    },
    initTooltip: initTooltips('tooltip'),
  },
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
.icon-right {
  position: absolute;
  top: auto;
  right: 45px;
  padding: 0 40px;
}
.degree-right {
  position: absolute;
  top: auto;
  right: 10px;
  padding: 0 40px;
}
</style>
