<script setup>
import CardHeader from "./CardHeader.vue";
import CardBody from "./CardBody.vue";
import { onBeforeMount, ref, watch } from "vue";
import { useVehicles } from "../../composables/useVehicles";

const props = defineProps({
    clientId: { type: String, required: true },
    modelValue: { type: String, default: null }
})
const emit = defineEmits(['vehicleSelected'])

const { vehicles, findByClientId, loading } = useVehicles()

const selectedId = ref(props.modelValue || '')

onBeforeMount(async () => {
    if (props.clientId) {
        await findByClientId(props.clientId)
    }
})

watch(() => props.clientId, async (newId) => {
    if (newId) {
        selectedId.value = ''
        emit('vehicleSelected', null)
        await findByClientId(newId)
    }
})

watch(() => props.modelValue, (v) => {
    selectedId.value = v || ''
})

const selectVehicle = (event) => {
    selectedId.value = event.target.value
    emit('vehicleSelected', selectedId.value || null)
}
</script>

<template>
    <div class="card w-100">
        <CardHeader>Выберите автомобиль</CardHeader>
        <CardBody :status="loading">
            <select class="form-select" :value="selectedId" @change="selectVehicle" >
                <option value="">Все автомобили</option>
                <option v-for="vehicle in vehicles" :key="vehicle.id" :value="vehicle.id" >
                    {{ vehicle.brand }} {{ vehicle.model }} ({{ vehicle.plate }})
                </option>
            </select>
        </CardBody>
    </div>
</template>
