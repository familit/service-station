<script setup>
defineProps({
  modal: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: 'bi bi-plus-circle-fill',
  }
})
</script>

<template>
  <button type="button" :class="'btn text-primary '+image" data-bs-toggle="modal" :data-bs-target="'#'+modal+'Modal'" />
</template>
