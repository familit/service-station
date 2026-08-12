<script setup>
import TextInput from "./Input/TextInput.vue";
import PhoneInput from "./Input/PhoneInput.vue";
</script>

<template>
  <div class="modal fade" id="clientModal" tabindex="-1" aria-labelledby="clientModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <form action="/" class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="clientModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body d-flex flex-column gap-3">
          <TextInput id="surname" label="Фамилия" placeholder="Введите фамилию" required />
          <TextInput id="name" label="Имя" placeholder="Введите имя" required />
          <PhoneInput id="phone" label="Телефон" placeholder="Введите телефон" required />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
          <input type="submit" class="btn btn-primary" value="Создать">
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>
