<script setup>
import TextInput from "../Input/TextInput.vue";
import NumberInput from "../Input/NumberInput.vue";
import {isValidMethod, METHOD_TYPES} from "../../constants/methodTypes";
import {reactive} from "vue";
import {useVehicles} from "../../composables/useVehicles";
import {useRoute} from "vue-router";

const props = defineProps({
    method: {
        type: String,
        default: METHOD_TYPES.UPDATE,
        validator: isValidMethod
    }
})

const route = useRoute();

const formData = reactive({
    brand: '',
    model: '',
    vin: '',
    plate: null,
    age: 0,
    mileage: 0,
    clientId: route.params.id
})


const handleSubmit = async (event) => {
    event.preventDefault()
    try {
        const vehicle = await useVehicles().addVehicle({...formData});
        console.log(vehicle.id);

        Object.assign(formData, { brand: '', model: '', vin: '', plate: null, age: 0, mileage: 0, clientId: route.params.id });
    } catch (error) {
        console.log(error);
    }
}
</script>

<template>
  <div class="modal fade" id="vehiclesModal" tabindex="-1" aria-labelledby="vehiclesModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <form @submit.prevent="handleSubmit" class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="vehiclesModalLabel">Добавление автомобиля</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body d-flex flex-column gap-3">
          <TextInput v-model="formData.brand" id="brand" label="Марка" placeholder="Введите марку автомобиля" required />
          <TextInput v-model="formData.model" id="model" label="Модель" placeholder="Введите модель автомобиля" required />
          <TextInput v-model="formData.vin" id="vin" label="VIN" placeholder="Введите VIN автомобиля" required />
          <TextInput v-model="formData.plate" id="plate" label="Регистрационный знак" placeholder="Введите регистрационный знак" required />
          <NumberInput v-model="formData.age" id="age" label="Год выпуска" placeholder="Введите год выпуска автомобиля" required />
          <NumberInput v-model="formData.mileage" id="mileage" label="Пробег" placeholder="Введите пробег автомобиля" required />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
          <input type="submit" class="btn btn-primary" value="Создать">
        </div>
      </form>
    </div>
  </div>
</template>
