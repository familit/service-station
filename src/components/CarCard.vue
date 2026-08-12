<script setup>
import TextInput from "./Input/TextInput.vue";
import NumberInput from "./Input/NumberInput.vue";
import {ref} from "vue";

const vehicle = ref({
  brand: "Ford",
  model: "Focus",
  vin: "VF3MJAHXVHS158219",
  age: "2021",
  plate: "О347НК45",
  mileage: '265656'
})
</script>
<template>
  <div class="card w-100">
    <div class="card-header d-flex align-items-center justify-content-between">
      <h5 class="h5">Информация об автомобиле</h5>
      <a href=""><i class="bi bi-pencil-square"></i></a>
    </div>
    <div class="card-body d-flex flex-column align-items-center justify-content-between gap-5">
      <div class="d-flex flex-row align-items-center justify-content-between gap-5 w-100">
        <TextInput id="brand" label="Марка" :value="vehicle.brand" readonly />
        <TextInput id="model" label="Модель" :value="vehicle.model" readonly />
        <TextInput id="vin" label="VIN" :value="vehicle.vin" readonly />
      </div>
      <div class="d-flex flex-row align-items-center justify-content-between gap-5 w-100">
        <NumberInput id="age" label="Год выпуска" :value="vehicle.age" readonly />
        <TextInput id="plate" label="Регистрационный знак" :value="vehicle.plate" readonly />
        <NumberInput id="mileage" label="Пробег" :value="vehicle.mileage" readonly />
      </div>
    </div>
  </div>
</template>
