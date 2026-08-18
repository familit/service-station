<script setup>
import TextInput from "../Input/TextInput.vue";
import NumberInput from "../Input/NumberInput.vue";
import { useVehicles } from "../../composables/useVehicles";
import { onBeforeMount } from "vue";
import Loading from "../Loading.vue";
import CardHeader from "./CardHeader.vue";

const props = defineProps({
    id: {type: String, required: true},
})

const { vehicle, findById } = useVehicles()

onBeforeMount(async () => {
    await findById(props.id)
})
</script>
<template>
    <div class="card w-100">
        <CardHeader modal="vehicles" action="edit">Информация об автомобиле</CardHeader>
        <div v-if="vehicle" class="card-body d-flex flex-column align-items-center justify-content-between gap-5">
            <div class="d-flex flex-row align-items-center justify-content-between gap-5 w-100">
                <TextInput id="brand" label="Марка" v-model="vehicle.brand" readonly />
                <TextInput id="model" label="Модель" v-model="vehicle.model" readonly />
                <TextInput id="vin" label="VIN" v-model="vehicle.vin" readonly />
            </div>
            <div class="d-flex flex-row align-items-center justify-content-between gap-5 w-100">
                <NumberInput id="age" label="Год выпуска" v-model="vehicle.age" readonly />
                <TextInput id="plate" label="Регистрационный знак" v-model="vehicle.plate" readonly />
                <NumberInput id="mileage" label="Пробег" v-model="vehicle.mileage" readonly />
            </div>
        </div>
        <div v-else class="card-body d-flex flex-row align-items-center justify-content-center gap-5">
            <Loading />
        </div>
    </div>
</template>
