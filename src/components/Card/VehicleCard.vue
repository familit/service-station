<script setup>
import TextInput from "../Input/TextInput.vue";
import NumberInput from "../Input/NumberInput.vue";
import { useVehicles } from "../../composables/useVehicles";
import { onBeforeMount, watch } from "vue";
import CardHeader from "./CardHeader.vue";
import CardBody from "./CardBody.vue";

const props = defineProps({
    id: { type: String, required: true },
})

const { vehicle, findById, loading } = useVehicles()

const load = async (id) => {
    if (id) await findById(id)
}

onBeforeMount(async () => {
    await load(props.id)
})
watch(() => props.id, (newId) => load(newId))
</script>

<template>
    <div class="card w-100">
        <CardHeader modal="vehicles" action="edit">Информация об автомобиле</CardHeader>
        <CardBody :status="loading" flex="column">
            <template v-if="vehicle">
                <div class="d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center justify-content-between gap-3 w-100">
                    <TextInput id="brand" label="Марка" v-model="vehicle.brand" readonly />
                    <TextInput id="model" label="Модель" v-model="vehicle.model" readonly />
                    <TextInput id="vin" label="VIN" v-model="vehicle.vin" readonly />
                </div>
                <div class="d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center justify-content-between gap-3 w-100">
                    <NumberInput id="age" label="Год выпуска" v-model="vehicle.age" readonly />
                    <TextInput id="plate" label="Регистрационный знак" v-model="vehicle.plate" readonly />
                    <NumberInput id="mileage" label="Пробег" v-model="vehicle.mileage" readonly />
                </div>
            </template>
        </CardBody>
    </div>
</template>
