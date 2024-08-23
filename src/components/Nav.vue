<template>
  <div
    class="navbar navbar-expand-lg border-bottom mb-4"
    :style="
      store.theme === 'light'
        ? 'background-color: azure'
        : 'background-color: indigo'
    ">
    <nav class="container">
      <router-link
        :to="routes[0].path"
        class="navbar-brand d-flex align-items-center">
        <img
          src="@/images/partially-sunny.png"
          alt="Sun behind cloud"
          height="50" />
        World Wide Weather
      </router-link>
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
          <button
            class="btn btn-no-outline nav-link text-uppercase"
            @click="setTheme(theme === 'light' ? 'dark' : 'light')">
            <i
              :class="
                theme === 'light' ? 'bi bi-moon-stars-fill' : 'bi bi-sun-fill'
              "></i>
          </button>
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
          <li class="nav-item">
            <ContentLoader
              :loading="!store.currentUser && existsCookie('accesstoken')">
              <li v-if="store.currentUser">
                <div class="nav-item dropdown">
                  <button
                    class="btn btn-no-outline nav-link dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    {{ store.currentUser.username }}
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item text-danger" @click="logout"
                        >Sign out</a
                      >
                    </li>
                  </ul>
                </div>
              </li>
              <li v-else class="nav-item">
                <button
                  class="btn btn-no-outline nav-link text-uppercase"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                  aria-expanded="true">
                  Sign in
                </button>
              </li>
            </ContentLoader>
            <LoginModal />
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
import { useMainStore } from '@/stores/mainStore'
import LoginModal from '@/components/LoginModal.vue'
import { deleteCookie, existsCookie } from '@/shared/utils'
import ContentLoader from '@/shared/ContentLoader.vue'

const router = useRouter()
const store = useMainStore()
const activeRoute = computed(() => router.currentRoute.value.path)
const theme = computed(() => store.theme)
const isActive = (path: string) => path === activeRoute.value

function logout() {
  deleteCookie('accesstoken')
  store.currentUser = null
}

function setTheme(theme: string) {
  document.documentElement.setAttribute('data-bs-theme', theme)
  store.setTheme(theme)
}

onMounted(() => {
  setTheme(localStorage.theme || 'light')
})
</script>
