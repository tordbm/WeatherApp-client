<template>
  <div
    id="loginModal"
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

        <form @submit.prevent="login">
          <div class="modal-body">
            <div class="mb-4 form-floating">
              <input
                v-model="username"
                type="username"
                class="form-control"
                id="usernameInput"
                aria-describedby="usernamelHelp"
                :disabled="loading"
                placeholder="Username"
                required />
              <label for="usernameInput" class="form-label">Username</label>
            </div>
            <div class="mb-3 form-floating">
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="inputPassword"
                :disabled="loading"
                placeholder="Password"
                required />
              <label for="inputPassword" class="form-label">Password</label>
            </div>

            <button
              type="button"
              class="btn btn-link"
              data-bs-target="#signupModal"
              data-bs-toggle="modal">
              Don't have an account? Sign up
            </button>
          </div>

          <div class="modal-footer">
            <button type="submit" class="btn btn-success">
              <ContentLoader :loading="loading"> Sign in </ContentLoader>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <SignupModal id="signupModal" @signed-up="setCredentials" />
</template>
<script lang="ts">
import { FAST_API_URL, setCookie, me, hashString } from '@/shared/utils'
import { useUserStore } from '@/stores/userStore'
import axios from 'axios'
import qs from 'qs'
import { defineComponent } from 'vue'
import { useErrorStore } from '@/stores/errorStore'
import { Modal } from 'bootstrap'
import ContentLoader from '@/shared/ContentLoader.vue'
import SignupModal from './SignupModal.vue'

export default defineComponent({
  components: {
    ContentLoader,
    SignupModal,
  },
  setup() {
    const { errorsList } = useErrorStore()
    const { currentUser } = useUserStore()
    return {
      errorsList,
      currentUser,
    }
  },
  data() {
    return {
      username: null as string | null,
      password: null as string | null,
      loading: false,
    }
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
      try {
        this.loading = true
        const tokenResponse: any = await axios.post(
          `${FAST_API_URL}${'/token'}`,
          data,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        )

        setCookie('accesstoken', tokenResponse.data.access_token, 1440)
      } catch (_) {
        this.errorsList.push('Invalid username or password')
        this.loading = false
        return
      }
      await me()

      this.loading = false
      const modalElement = this.$refs.loginModal as HTMLElement
      const modalInstance = Modal.getInstance(modalElement)!
      modalInstance.hide()
    },
    setCredentials(username: string, password: string) {
      const modalElement = this.$refs.loginModal as HTMLElement
      const modalInstance = Modal.getInstance(modalElement)!
      modalInstance.show()
      this.username = username
      this.password = password
      this.login()
    },
  },
})
</script>
