<script setup>
import CardHeader from "./CardHeader.vue";
import CardBody from "./CardBody.vue";
import { onBeforeMount } from "vue";
import { useVehicles } from "../../composables/useVehicles";
import { useRoute } from "vue-router";

const route = useRoute()
const { vehicles, findByClientId } = useVehicles()

onBeforeMount(async () => {
    await findByClientId(route.params.id)
})
</script>

<template>
    <div class="card w-100">
        <CardHeader>Выберите автомобиль</CardHeader>
        <CardBody :status="false">
            <select class="form-select" id="vehicle-selector">
                <option v-for="vehicle in vehicles">{{ vehicle.brand }} {{ vehicle.model }}</option>
            </select>
        </CardBody>
    </div>
</template>
