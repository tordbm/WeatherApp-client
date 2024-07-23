<template>
  <div
    class="navbar navbar-expand-lg border-bottom mb-4"
    style="background-color: azure">
    <nav class="container">
      <router-link
        :to="routes[0].path"
        class="navbar-brand d-flex align-items-center">
        <img
          src="@/icons/partially-sunny.png"
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
          <li v-if="user.currentUser">
            <div class="nav-item dropdown">
              <button
                class="btn btn-no-outline nav-link dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                {{ user.currentUser.username }}
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
          <li v-else class="nav-item text-uppercase">
            <button
              class="btn btn-no-outline nav-item text-uppercase"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
              aria-expanded="true">
              Sign in
            </button>
          </li>
          <LoginModal />
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { routes } from '@/router/router'
import { useUserStore } from '@/stores/userStore'
import LoginModal from '@/components/LoginModal.vue'
import { deleteCookie } from '@/shared/utils'

const router = useRouter()
const user = useUserStore()
const activeRoute = computed(() => router.currentRoute.value.path)
const isActive = (path: string) => path === activeRoute.value

function logout() {
  deleteCookie('accesstoken')
  user.currentUser = null
}
</script>
