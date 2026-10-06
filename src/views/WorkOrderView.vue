<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import AppLayout from "../components/AppLayout.vue";
import VehicleSelectorCard from "../components/Card/VehicleSelectorCard.vue";
import WorkOrdersCard from "../components/Card/WorkOrdersCard.vue";
import WorkOrderModal from "../components/Modal/WorkOrderModal.vue";

const route = useRoute()

const clientId = ref(null)
const vehicleId = ref(null)

watch(
    () => route.params.id,
    (id) => { clientId.value = id || null },
    { immediate: true }
)
</script>

<template>
    <AppLayout>
        <VehicleSelectorCard
            v-if="clientId"
            :client-id="clientId"
            :model-value="vehicleId"
            @vehicle-selected="vehicleId = $event"
        />
        <WorkOrdersCard v-if="clientId" :client-id="clientId" :vehicle-id="vehicleId" />
    </AppLayout>

    <WorkOrderModal />
</template>
