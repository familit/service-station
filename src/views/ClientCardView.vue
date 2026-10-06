<script setup>
import AppLayout from '../components/AppLayout.vue'
import ClientCard from '../components/Card/ClientCard.vue'
import VehiclesCard from '../components/Card/VehiclesCard.vue'
import WorkOrdersCard from '../components/Card/WorkOrdersCard.vue'
import VehiclesModal from '../components/Modal/VehiclesModal.vue'
import ClientModal from '../components/Modal/ClientModal.vue'
import WorkOrderModal from '../components/Modal/WorkOrderModal.vue'
import { useRoute } from "vue-router";

const id = useRoute().params.id
</script>

<template>
    <AppLayout>
        <ClientCard :id="id"/>
        <VehiclesCard />
        <WorkOrdersCard :client-id="id" />
    </AppLayout>
    <ClientModal />
    <VehiclesModal />
    <WorkOrderModal />
</template>
