<script setup>
defineProps({
    modal: String,
    image: { type: String, default: 'bi bi-plus' },
    title: { type: String, default: '' }
})
</script>

<template>
    <button type="button" class="btn btn-primary" :title="title" v-bind="$attrs">
        <i :class="image"></i>
    </button>
</template>
