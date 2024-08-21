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

        <form @submit.prevent="loginUser">
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
import { useMainStore } from '@/stores/mainStore'
import { defineComponent } from 'vue'
import { Modal } from 'bootstrap'
import ContentLoader from '@/shared/ContentLoader.vue'
import SignupModal from './SignupModal.vue'
import { login, me } from '@/shared/api'

export default defineComponent({
  components: {
    ContentLoader,
    SignupModal,
  },
  setup() {
    const store = useMainStore()
    return {
      store,
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
    async loginUser() {
      try {
        this.loading = true
        await login(this.username!, this.password!)
      } catch (_) {
        this.store.addError('Invalid username or password')
        this.loading = false
        return
      } finally {
        this.loading = false
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
      this.loginUser()
    },
  },
})
</script>
