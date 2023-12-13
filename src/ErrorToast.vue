<template>
<div class="p-5 box border rounded-3 mb-4">
    <h2>Bootstrap Toast</h2>
    <p>Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems. They’re built with flexbox, so they’re easy to align and position.</p>

    <button type="button" class="btn btn-outline-secondary" @click="toast.show()">Show Toast</button>
    <div class="position-fixed bottom-0 end-0 p-3 emerge-11">
      <div ref="bsToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header bg-info text-dark">
          <i class="bi bi-hand-index me-1"></i>
          <strong class="me-auto">Which finger?!</strong>
          <small>Some times ago</small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body box">Hello, world! This is a toast message.</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, onUnmounted } from "vue";
import { Toast } from "bootstrap";

const toast     = ref();
const bsToast   = ref();

onMounted(() => {
  toast.value = new Toast(bsToast.value);
});

onUnmounted(() => {
  toast.value = "";
});
</script>
