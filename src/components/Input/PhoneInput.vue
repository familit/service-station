<script setup>
  defineProps({
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      required: true,
    },
    placeholder: String,
    required: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    }
  })
</script>

<template>
  <div class="input-group">
    <span class="input-group-text">{{ label }}</span>
    <span class="input-group-text">+7</span>
    <input class="form-control" type="number" :value="value" :id="id" :name="id" :placeholder="placeholder" :readonly :required min="9000000000" max="9999999999">
    <a v-if="!required" :href="'tel:+7'+value" class="btn btn-outline-secondary"><i class="bi bi-telephone-fill"></i></a>
  </div>
</template>
