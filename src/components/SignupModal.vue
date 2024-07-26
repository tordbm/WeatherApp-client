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
            <div class="mb-3">
              <label for="username" class="form-label">Username</label>
              <input
                type="username"
                class="form-control"
                id="username"
                v-model="username"
                required />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="email"
                required />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="password"
                required />
            </div>
            <div class="mb-3">
              <label for="controlPassword" class="form-label"
                >Repeat password</label
              >
              <input
                type="password"
                class="form-control"
                id="controlPassword"
                v-model="controlPassword"
                required />
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
import { useAlertsStore } from '@/stores/alertsStore'
import { FAST_API_URL, hashString } from '@/shared/utils'
import axios from 'axios'
import { Modal } from 'bootstrap'
import ContentLoader from '@/shared/ContentLoader.vue'

export default defineComponent({
  components: {
    ContentLoader,
  },
  setup() {
    const { alertsList } = useAlertsStore()
    return {
      alertsList,
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
        this.alertsList.push('Passwords do not match')
        return
      }
      const hashedPassword = await hashString(this.password)
      const data = {
        username: this.username,
        email: this.email,
        password: hashedPassword,
      }
      try {
        this.loading = true
        await axios.post(`${FAST_API_URL}${'/create_user/'}`, data)
      } catch (_) {
        this.alertsList.push('Username or email already exists')
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
