<template>
  <div
    ref="signupModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="signupModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="signupModalLabel">Sign up</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="signup">
            <div class="mb-4 form-floating">
              <input
                type="username"
                class="form-control"
                id="username"
                v-model="username"
                placeholder="Username"
                required />
              <label for="username" class="form-label">Username</label>
            </div>
            <div class="mb-4 form-floating">
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="email"
                placeholder="Email address"
                required />
              <label for="email" class="form-label">Email address</label>
            </div>
            <div class="mb-4 form-floating">
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="password"
                placeholder="Password"
                required />
              <label for="password" class="form-label">Password</label>
            </div>
            <div class="mb-4 form-floating">
              <input
                type="password"
                class="form-control"
                id="controlPassword"
                v-model="controlPassword"
                placeholder="Repeat password"
                required />
              <label for="controlPassword" class="form-label"
                >Repeat password</label
              >
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-success">
                <ContentLoader :loading="loading"> Sign up </ContentLoader>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useMainStore } from '@/stores/mainStore'
import { Modal } from 'bootstrap'
import ContentLoader from '@/shared/ContentLoader.vue'
import { signup } from '@/shared/api'

export default defineComponent({
  components: {
    ContentLoader,
  },
  setup() {
    const store = useMainStore()
    return {
      store,
    }
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      controlPassword: '',
      loading: false,
    }
  },
  computed: {
    passwordsMatch() {
      return this.password === this.controlPassword
    },
  },
  methods: {
    async signup() {
      if (!this.passwordsMatch) {
        this.store.addError('Passwords do not match')
        return
      }
      try {
        this.loading = true
        await signup(this.username, this.email, this.password)
      } catch {
        this.store.addError('Username or email already exists')
        return
      } finally {
        this.loading = false
      }
      const modalElement = this.$refs.signupModal as HTMLElement
      const modalInstance = Modal.getInstance(modalElement)!
      modalInstance.hide()
      this.$emit('signedUp', this.username, this.password)
    },
  },
})
</script>
