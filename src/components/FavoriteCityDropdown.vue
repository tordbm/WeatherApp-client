<template>
  <div v-if="store.favoredCities.length > 0" class="dropdown">
    <button
      class="btn dropdown-toggle"
      type="button"
      title="Favorite cities"
      data-bs-toggle="dropdown"
      aria-expanded="false">
      <i style="color: #ffd43b" class="bi bi-star-fill fs-5"></i>
    </button>
    <ul class="dropdown-menu">
      <li
        v-for="item in store.favoredCities"
        :key="item.favored_id"
        class="d-flex align-items-center">
        <a
          class="dropdown-item me-auto"
          href="#"
          @click="onSelectedCity(item.city)"
          >{{ item.city }}</a
        >
        <button
          class="btn text-danger"
          type="button"
          @click="removeFavoredCity(item.favored_id)">
          ―
        </button>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { deleteFavoredCity, getMyFavoredCities } from '@/shared/api'
import { useMainStore } from '@/stores/mainStore'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const store = useMainStore()
    return {
      store,
    }
  },
  data() {
    return {
      selectedCity: '',
    }
  },
  async mounted() {
    try {
      const favoredCities = await getMyFavoredCities()
      this.store.favoredCities = favoredCities
    } catch (error: any) {
      this.store.addError(error.message)
    }
  },
  methods: {
    onSelectedCity(city: string) {
      this.selectedCity = city
      this.$emit('selectedCity', this.selectedCity)
    },
    removeFavoredCity(favored_id: string) {
      try {
        deleteFavoredCity(favored_id)
        this.store.favoredCities = this.store.favoredCities.filter(
          (item) => item.favored_id !== favored_id
        )
      } catch (error: any) {
        this.store.addError(error.message)
      }
    },
  },
})
</script>
