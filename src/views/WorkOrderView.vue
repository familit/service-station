<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import Sidebar from "../components/Sidebar.vue";
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
    <main class="container-fluid w-100 d-flex flex-wrap p-0">
        <div class="row w-100">
            <div class="col-sm-3">
                <Sidebar />
            </div>
            <div class="col-sm-9 bg-secondary d-flex justify-content-center align-items-center flex-column gap-4 p-4">

                <VehicleSelectorCard v-if="clientId" :client-id="clientId"
                    :model-value="vehicleId" @vehicle-selected="vehicleId = $event" />

                <WorkOrdersCard v-if="clientId" :client-id="clientId" :vehicle-id="vehicleId" />
            </div>
        </div>
    </main>

    <WorkOrderModal />
</template>
