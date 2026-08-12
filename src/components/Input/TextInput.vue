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
    },

  })
</script>

<template>
  <div class="input-group">
    <span class="input-group-text">{{ label }}</span>
    <input class="form-control" type="text" :value="value" :id="id" :name="id" :placeholder="placeholder" :readonly :required>
  </div>
</template>
