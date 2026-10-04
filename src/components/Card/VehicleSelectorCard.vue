<script setup>
import CardHeader from "./CardHeader.vue";
import CardBody from "./CardBody.vue";
import { onBeforeMount, ref, watch } from "vue";
import { useVehicles } from "../../composables/useVehicles";
import { useRoute } from "vue-router";

const route = useRoute()
const emit = defineEmits(['vehicleSelected'])

const { vehicles, findByClientId, loading } = useVehicles()
const selectedId = ref(route.params.vehicleId || '')

onBeforeMount(async () => {
    await findByClientId(route.params.id)
})

watch(
    () => route.params.vehicleId,
    (newId) => {
        selectedId.value = newId || ''
    }
)

if (route.params.vehicleId) {
    emit('vehicleSelected', route.params.vehicleId)
}

const selectVehicle = (event) => {
    selectedId.value = event.target.value
    emit('vehicleSelected', selectedId.value)
}
</script>

<template>
    <div class="card w-100">
        <CardHeader>Выберите автомобиль</CardHeader>
        <CardBody :status="loading">
            <select class="form-select" id="vehicle-selector" :value="selectedId" @change="selectVehicle">
                <option value="" disabled>Выберите автомобиль</option>
                <option v-for="vehicle in vehicles" :key="vehicle.id" :value="vehicle.id">
                    {{ vehicle.brand }} {{ vehicle.model }}
                </option>
            </select>
        </CardBody>
    </div>
</template>
