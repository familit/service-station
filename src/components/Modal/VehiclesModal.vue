<script setup>
import TextInput from "../Input/TextInput.vue";
import NumberInput from "../Input/NumberInput.vue";
</script>

<template>
  <div class="modal fade" id="vehiclesModal" tabindex="-1" aria-labelledby="vehiclesModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <form action="/" class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="vehiclesModalLabel">Добавление автомобиля</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body d-flex flex-column gap-3">
          <TextInput id="brand" label="Марка" placeholder="Введите марку автомобиля" required />
          <TextInput id="model" label="Модель" placeholder="Введите модель автомобиля" required />
          <TextInput id="vin" label="VIN" placeholder="Введите VIN автомобиля" required />
          <TextInput id="plate" label="Регистрационный знак" placeholder="Введите регистрационный знак" required />
          <NumberInput id="age" label="Год выпуска" placeholder="Введите год выпуска автомобиля" required />
          <NumberInput id="mileage" label="Пробег" placeholder="Введите пробег автомобиля" required />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
          <input type="submit" class="btn btn-primary" value="Создать">
        </div>
      </form>
    </div>
  </div>
</template>
