<script setup>
import WorksTable from "./WorksTable.vue";
import TitleTable from "./TitleTable.vue";
import HeaderTable from "./HeaderTable.vue";
import {onBeforeMount, ref, watch} from "vue";
import { useVehicles } from "../../composables/useVehicles";
import { useClients } from "../../composables/useClients";

const props = defineProps({
    id: { type: [String, Number], default: null },
    client: { type: String, default: null },
    vehicle: { type: String, default: null },
})

const date = ref(new Date())

const { vehicle: vehicleData, findById: findVehicleById } = useVehicles()
const { client: clientData, findById: findClientById } = useClients()

onBeforeMount(async () => {
    const tasks = []
    if (props.client)  tasks.push(findClientById(props.client))
    if (props.vehicle) tasks.push(findVehicleById(props.vehicle))
    await Promise.all(tasks)
})

const loadData = async () => {
    const tasks = []
    if (props.client)  tasks.push(findClientById(props.client))
    if (props.vehicle) tasks.push(findVehicleById(props.vehicle))
    await Promise.all(tasks)
}

watch(
    () => [props.client, props.vehicle],
    ([newClient, newVehicle]) => {
        if (newClient !== newVehicle) {
        }
        loadData()
    },
    { immediate: true }
)
</script>

<template>
    <template v-if="clientData && vehicleData">
        <TitleTable :id="id" :date-start="date" :date-end="date" />
        <HeaderTable :client="clientData" :vehicle="vehicleData" />
        <WorksTable />
    </template>

    <div v-else class="text-center py-3">
        <div class="spinner-border spinner-border-sm text-primary" role="status"></div>
    </div>
</template>
