<template>
    <div>
        <h1>Signup</h1>
        <form @submit.prevent="signup">
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" v-model="email" required>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="password" required>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signup() {
            console.log(this.email, this.password)
        }
    }
})
</script>