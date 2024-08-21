<template>
  <Nav />
  <ErrorToast v-if="errorsList.length > 0" />
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
import ErrorToast from '@/ErrorToast.vue'
import { useMainStore } from '@/stores/mainStore'
import { me } from '@/shared/api'
import { onMounted } from 'vue'

const { errorsList } = useMainStore()

onMounted(() => {
  me()
})
</script>
