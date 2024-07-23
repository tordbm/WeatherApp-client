<template>
  <div
    ref="loginModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="loginModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="loginModalLabel">Sign in</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"></button>
        </div>

        <div class="modal-body">
          <ContentLoader :loading="loading">
            <form>
              <div class="mb-3">
                <label for="usernameInput" class="form-label">Username</label>
                <input
                  v-model="username"
                  type="username"
                  class="form-control"
                  id="usernameInput"
                  aria-describedby="usernamelHelp" />
              </div>
              <div class="mb-3">
                <label for="inputPassword" class="form-label">Password</label>
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                  id="inputPassword" />
              </div>
            </form>
          </ContentLoader>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal">
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            :disabled="!formValid"
            @click="login">
            Sign in
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { FAST_API_URL, setCookie, me, hashString } from '@/shared/utils'
import { useUserStore } from '@/stores/userStore'
import axios from 'axios'
import qs from 'qs'
import { mapState, mapWritableState } from 'pinia'
import { defineComponent } from 'vue'
import { useAlertsStore } from '@/stores/alertsStore'
import { Modal } from 'bootstrap'
import ContentLoader from '@/shared/ContentLoader.vue'

export default defineComponent({
  components: {
    ContentLoader,
  },
  data() {
    return {
      username: null as string | null,
      password: null as string | null,
      loading: false,
    }
  },
  computed: {
    ...mapWritableState(useUserStore, ['token', 'currentUser']),
    ...mapState(useAlertsStore, ['alertsList']),
    formValid() {
      return this.username && this.password
    },
  },
  methods: {
    async login() {
      const hashedPassword = await hashString(this.password)
      const data = qs.stringify({
        grant_type: '',
        username: this.username,
        password: hashedPassword,
        scope: '',
        client_id: '',
        client_secret: '',
      })
      this.loading = true
      const tokenResponse: any = await axios
        .post(`${FAST_API_URL}${'/token'}`, data, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
        .catch((error) => {
          this.alertsList.push(error.message)
        })
      setCookie('accesstoken', tokenResponse.data.access_token, 1)
      
      await me()
      
      this.loading = false
      const modalElement = this.$refs.loginModal as HTMLElement
      const modalInstance = Modal.getInstance(modalElement)!
      modalInstance.hide()
    },
  },
})
</script>
