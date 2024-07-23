<template>
  <Nav />
  <ErrorToast v-if="alertsList.length > 0" />
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
import { useAlertsStore } from '@/stores/alertsStore'
import { me } from '@/shared/utils'

export default {
  components: {
    ErrorToast,
    Nav,
    Footer,
  },
  setup() {
    const { alertsList } = useAlertsStore()
    return {
      alertsList,
    }
  },
  mounted() {
    me()
  },
}
</script>
