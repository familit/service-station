<script setup>
import { watch } from "vue";
import WorkOrderAccordion from "../WorkOrderAccordion.vue";
import CardHeader from "./CardHeader.vue";
import CardBody from "./CardBody.vue";
import { useWorkOrders } from "../../composables/useWorkOrders";

const props = defineProps({
    clientId: { type: String, required: true },
    vehicleId: { type: String, default: null }
})

const { orders, loading, findByClientId, findByVehicleId } = useWorkOrders()

const loadOrders = async () => {
    if (!props.clientId) return

    if (props.vehicleId) {
        await findByVehicleId(props.vehicleId)
    } else {
        await findByClientId(props.clientId)
    }
}

watch(
    () => [props.clientId, props.vehicleId],
    loadOrders,
    { immediate: true }
)
</script>

<template>
    <div class="card w-100">
        <CardHeader action="add" modal="workOrder">
            {{ vehicleId ? 'Заказ-наряды по автомобилю' : 'Все заказ-наряды клиента' }}
        </CardHeader>

        <CardBody :status="loading">
            <div v-if="!orders?.length" class="text-center py-4 text-muted">Заказ-наряды отсутствуют</div>
            <div v-else class="accordion w-100 overflow-x-hidden" id="workOrdersAccordion">
                <WorkOrderAccordion v-for="(order, i) in orders" :key="order.id" :order="order" :index="i" />
            </div>
        </CardBody>
    </div>
</template>
