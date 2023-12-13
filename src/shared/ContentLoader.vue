<template>
    <div v-if="loading" class="d-flex justify-content-center">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <slot></slot>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    props: {
        loading: {type: Boolean, required: true}
    },
})
</script>