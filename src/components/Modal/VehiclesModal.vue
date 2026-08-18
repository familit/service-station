<script setup>
import TextInput from "../Input/TextInput.vue";
import NumberInput from "../Input/NumberInput.vue";
import {isValidMethod, METHOD_TYPES} from "../../constants/methodTypes";
import {reactive} from "vue";
import {useVehicles} from "../../composables/useVehicles";
import {useRoute} from "vue-router";
import ModalHeader from "./ModalHeader.vue";
import ModalFooter from "./ModalFooter.vue";

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
                <ModalHeader name="vehicles">Создание / изменение автомобиля</ModalHeader>
                <div class="modal-body d-flex flex-column gap-3">
                    <TextInput v-model="formData.brand" id="brand" label="Марка" placeholder="Введите марку автомобиля" required />
                    <TextInput v-model="formData.model" id="model" label="Модель" placeholder="Введите модель автомобиля" required />
                    <TextInput v-model="formData.vin" id="vin" label="VIN" placeholder="Введите VIN автомобиля" required />
                    <TextInput v-model="formData.plate" id="plate" label="Регистрационный знак" placeholder="Введите регистрационный знак" required />
                    <NumberInput v-model="formData.age" id="age" label="Год выпуска" placeholder="Введите год выпуска автомобиля" required />
                    <NumberInput v-model="formData.mileage" id="mileage" label="Пробег" placeholder="Введите пробег автомобиля" required />
                </div>
                <ModalFooter />
            </form>
        </div>
    </div>
</template>
