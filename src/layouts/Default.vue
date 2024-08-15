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

<script lang="ts">
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import ErrorToast from '@/ErrorToast.vue'
import { useErrorStore } from '@/stores/errorStore'
import { me } from '@/shared/api'

export default {
  components: {
    ErrorToast,
    Nav,
    Footer,
  },
  setup() {
    const { errorsList } = useErrorStore()
    return {
      errorsList,
    }
  },
  mounted() {
    me()
  },
}
</script>
