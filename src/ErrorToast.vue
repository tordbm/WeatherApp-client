<template>
  <div class="toast-container position-absolute top-0 end-0 p-3">
    <div ref="bsToast" class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header bg-danger text-dark">
        <strong class="me-auto">Error</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body box">{{ errorMsg }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, onUnmounted } from "vue";
import { Toast } from "bootstrap";

const bsToast = ref();

defineProps({
  errorMsg: null, String
});

let toast;

onMounted(() => {
  toast = new Toast(bsToast.value, {
    autohide: false,
    delay: 0
  });
});

onUnmounted(() => {
  toast = null;
});
</script>
