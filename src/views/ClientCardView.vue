<script setup>
import Sidebar from '../components/Sidebar.vue'
import ClientCard from '../components/Card/ClientCard.vue'
import VehiclesCard from '../components/Card/VehiclesCard.vue'
import WorkOrdersCard from '../components/Card/WorkOrdersCard.vue'
import VehiclesModal from '../components/Modal/VehiclesModal.vue'
import ClientModal from '../components/Modal/ClientModal.vue'
import WorkOrderModal from '../components/Modal/WorkOrderModal.vue'
import {useRoute} from "vue-router";

const id = useRoute().params.id
</script>

<template>
    <main class="container-fluid w-100 d-flex flex-wrap p-0">
        <div class="row w-100">
            <div class="col-sm-3">
                <Sidebar />
            </div>
            <div class="col-sm-9 bg-secondary d-flex justify-content-center align-items-center flex-column gap-5">
                <ClientCard :id="id"/>
                <VehiclesCard />
                <WorkOrdersCard />
            </div>
        </div>
    </main>
    <ClientModal />
    <VehiclesModal />
    <WorkOrderModal />
</template>
