<script setup>
import Sidebar from "../components/Sidebar.vue";
import VehicleCard from "../components/Card/VehicleCard.vue";
import WorkOrdersCard from "../components/Card/WorkOrdersCard.vue";
import VehiclesModal from "../components/Modal/VehiclesModal.vue";
import WorkOrderModal from "../components/Modal/WorkOrderModal.vue";
import VehicleSelectorCard from "../components/Card/VehicleSelectorCard.vue";
import {onBeforeMount, ref} from "vue";
import {useRoute} from "vue-router";

const vehicleId = ref(null)
const route = useRoute()
onBeforeMount( () => {
    if (route.params.vehicleId) {
        vehicleId.value = route.params.vehicleId
    }
})
</script>

<template>
    <main class="container-fluid w-100 d-flex flex-wrap p-0">
        <div class="row w-100">
            <div class="col-sm-3">
                <Sidebar />
            </div>
            <div class="col-sm-9 bg-secondary d-flex justify-content-center align-items-center flex-column gap-5">
                <VehicleSelectorCard @vehicleSelected="vehicleId = $event" />
                <VehicleCard v-if="vehicleId" :id="vehicleId" />
                <WorkOrdersCard />
            </div>
        </div>
    </main>
    <VehiclesModal />
    <WorkOrderModal />
</template>
