<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg mb-4 border-bottom">
      <router-link
        :to="routes[0].path"
        class="navbar-brand d-flex align-items-center text-decoration-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32"
          viewBox="0 0 261.76 226.69">
          <path
            d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z"
            fill="#41b883" />
          <path
            d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z"
            fill="#34495e" />
        </svg>
        <sup><small class="badge rounded-pill bg-info me-1">3</small></sup>
        <svg
          height="32"
          viewBox="0 0 410 404"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z"
            fill="url(#paint0_linear)" />
          <path
            d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z"
            fill="url(#paint1_linear)" />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="6.00017"
              y1="32.9999"
              x2="235"
              y2="344"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#41D1FF" />
              <stop offset="1" stop-color="#BD34FE" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="194.651"
              y1="8.81818"
              x2="236.076"
              y2="292.989"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#FFEA83" />
              <stop offset="0.0833333" stop-color="#FFDD35" />
              <stop offset="1" stop-color="#FFA800" />
            </linearGradient>
          </defs>
        </svg>
        <sup><small class="badge rounded-pill bg-info me-1">4</small></sup>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="32"
          viewBox="0 0 118 94"
          role="img">
          <title>Bootstrap</title>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
            fill="#6f42c1"></path>
        </svg>
        <sup><small class="badge rounded-pill bg-info me-1">5</small></sup>
      </router-link>
      <section class="d-flex">
        <a
          href="#"
          @click="(event) => changeTheme(event)"
          class="text-decoration-none">
          <div
            v-if="themeToggler"
            class="d-flex justify-content-between align-items-center">
            <small class="me-1">Light Up</small>
            <svg
              class="p-0"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd"
                clip-rule="evenodd"></path>
            </svg>
          </div>
          <div v-else class="d-flex justify-content-between align-items-center">
            <small class="me-1">Darken</small>
            <svg
              class="pa-0 ma-0"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          </div>
        </a>
      </section>
      <button
        class="navbar-toggler border-0 shadow-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li
            class="nav-item text-uppercase"
            v-for="route in routes"
            :key="route.path">
            <router-link
              :to="route.path"
              class="nav-link"
              :title="route.children[0].name"
              :class="{ active: isActive(route.path) }">
              <i class="bi bi-house-fill" v-if="route.path === `/`"></i>
              {{ route.path !== `/` ? route.children[0].name : '' }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { routes } from '@/router/router'
import { ref, type Ref } from 'vue'

const themeToggler: Ref<boolean> = ref(false)
const docElm = document.documentElement

const changeTheme = (e: Event) => {
  e.preventDefault()

  themeToggler.value = !themeToggler.value
  localStorage.theme = themeToggler.value ? 'dark' : 'light'
  docElm.dataset.bsTheme = themeToggler.value ? 'dark' : 'light'
}

const router = useRouter()
const activeRoute = computed(() => router.currentRoute.value.path)
const isActive = (path: string) => path === activeRoute.value

onMounted(() => {
  const storedTheme = localStorage.theme
  themeToggler.value = storedTheme === 'dark'
  docElm.dataset.bsTheme = storedTheme || 'light'
})
</script>
