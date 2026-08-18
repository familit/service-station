<script setup>
import Loading from "../Loading.vue";

defineProps({
    status: { type: Boolean, required: true }
})
</script>

<template>
    <div v-if="status" class="card-body d-flex flex-row align-items-center justify-content-center gap-5">
        <Loading />
    </div>
    <div v-else class="card-body d-flex flex-row align-items-center justify-content-between gap-5">
        <slot></slot>
    </div>
</template>
