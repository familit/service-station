<script setup>
import Loading from "../Loading.vue";

defineProps({
    status: { type: Boolean, required: true },
    flex: { type: String, default: 'row' },
})
</script>

<template>
    <div v-if="status" class="card-body d-flex flex-row align-items-center justify-content-center gap-5">
        <Loading />
    </div>
    <div v-else :class="'card-body d-flex flex-' + flex + '  align-items-center justify-content-between gap-5'">
        <slot />
    </div>
</template>
