<script setup>
import Button from "../Modal/Button.vue";
import TextInput from "../Input/TextInput.vue";
import PhoneInput from "../Input/PhoneInput.vue";
</script>
<template>
  <div class="card w-100">
    <div class="card-header d-flex align-items-center justify-content-between">
      <h5 class="h5">Информация о клиенте</h5>
      <Button modal="client" image="bi bi-pencil-square" />
    </div>
    <div class="card-body d-flex flex-row align-items-center justify-content-between gap-5">
      <TextInput id="surname" label="Фамилия" readonly />
      <TextInput id="name" label="Имя" readonly />
      <PhoneInput id="phone" label="Телефон" readonly />
    </div>
  </div>
</template>
