<template>
  <div v-if="favoredCities.length > 0" class="dropdown">
    <button
      class="btn dropdown-toggle"
      type="button"
      title="Favorite cities"
      data-bs-toggle="dropdown"
      aria-expanded="false">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        width="22.5"
        viewBox="0 0 576 512">
        <path
          fill="#FFD43B"
          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9
          32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9
          33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
      </svg>
    </button>
    <ul class="dropdown-menu">
      <li v-for="item in favoredCities">
        <a class="dropdown-item" href="#" @click="onSelectedCity(item.city)">{{
          item.city
        }}</a>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { FAST_API_URL, getCookie } from '@/shared/utils'
import { useAlertsStore } from '@/stores/alertsStore'
import axios from 'axios'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const { alertsList } = useAlertsStore()
    return {
      alertsList,
    }
  },
  data() {
    return {
      selectedCity: '',
      favoredCities: [] as any[],
    }
  },
  async mounted() {
    try {
      const access_token = getCookie('accesstoken')
      const favoredCities = await axios.get(
        `${FAST_API_URL}${'/users/me/cities/'}`,
        { headers: { Authorization: `Bearer ${access_token}` } }
      )
      this.favoredCities = favoredCities.data
    } catch (error: any) {
      this.alertsList.push(error.message)
    }
  },
  methods: {
    onSelectedCity(city: string) {
      this.selectedCity = city
      this.$emit('selectedCity', this.selectedCity)
    },
  },
})
</script>
