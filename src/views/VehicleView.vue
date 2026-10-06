<script setup>
import AppLayout from "../components/AppLayout.vue";
import VehicleCard from "../components/Card/VehicleCard.vue";
import WorkOrdersCard from "../components/Card/WorkOrdersCard.vue";
import VehiclesModal from "../components/Modal/VehiclesModal.vue";
import WorkOrderModal from "../components/Modal/WorkOrderModal.vue";
import VehicleSelectorCard from "../components/Card/VehicleSelectorCard.vue";
import { onBeforeMount, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()

const clientId = ref(null)
const vehicleId = ref(null)

watch(
    () => route.params,
    (params) => {
        clientId.value = params.id || null
        vehicleId.value = params.vehicleId || null
    },
    { immediate: true }
)

onBeforeMount(() => {
    clientId.value = route.params.id || null
    vehicleId.value = route.params.vehicleId || null
})
</script>

<template>
    <AppLayout>
        <VehicleSelectorCard v-if="clientId" :client-id="clientId" :model-value="vehicleId" @vehicle-selected="vehicleId = $event" />
        <VehicleCard v-if="vehicleId" :id="vehicleId" />
        <WorkOrdersCard v-if="vehicleId" :vehicle-id="vehicleId" :client-id="clientId" />
    </AppLayout>
    <VehiclesModal />
    <WorkOrderModal />
</template>
