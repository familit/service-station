<script setup>
import Sidebar from "../components/Sidebar.vue";
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

// ✅ Синхронизируем оба id из URL
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
    <main class="container-fluid w-100 d-flex flex-wrap p-0">
        <div class="row w-100">
            <div class="col-sm-3">
                <Sidebar />
            </div>
            <div class="col-sm-9 bg-secondary d-flex justify-content-center align-items-center flex-column gap-5">

                <!-- ✅ Передаём clientId пропсом -->
                <VehicleSelectorCard
                    v-if="clientId"
                    :client-id="clientId"
                    :model-value="vehicleId"
                    @vehicle-selected="vehicleId = $event"
                />

                <VehicleCard v-if="vehicleId" :id="vehicleId" />

                <WorkOrdersCard
                    v-if="vehicleId"
                    :vehicle-id="vehicleId"
                    :client-id="clientId"
                />
            </div>
        </div>
    </main>
    <VehiclesModal />
    <WorkOrderModal />
</template>
