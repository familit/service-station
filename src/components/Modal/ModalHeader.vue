<script setup>
defineProps({
    name: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <div class="modal-header">
        <h1 class="modal-title fs-5" :id="name + 'ModalLabel'"><slot /></h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
</template>
