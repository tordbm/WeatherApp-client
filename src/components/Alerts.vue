<template>
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <h4 class="alert-heading">{{ weatherData.alerts[0].event }}</h4>
    <p>{{ weatherData.alerts[0].description }}</p>
    <hr />
    <p class="mb-0">
      Valid from <b>{{ formatDateTime(weatherData.alerts[0].onset) }}</b> to
      <b>{{ formatDateTime(weatherData.alerts[0].ends) }}</b>
    </p>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close" />
  </div>
</template>
<script lang="ts">
import { formatDateTime } from '@/shared/utils'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    weatherData: { type: Object, required: true },
  },
  methods: {
    formatDateTime,
  },
})
</script>
