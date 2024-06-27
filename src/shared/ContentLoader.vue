<template>
  <div v-if="props.loading" class="d-flex justify-content-center">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <slot v-else />
</template>

<script setup lang="ts">
const props = defineProps<{
  loading: boolean
}>()
</script>
