<template>
  <Nav />

  <main class="container flex-shrink-0 mb-4 mt-4">
    <RouterView />
  </main>

  <footer class="container footer mb-2 mt-auto">
    <Footer />
  </footer>
</template>

<script lang="ts" setup>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
</script>
