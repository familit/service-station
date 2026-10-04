<script setup>
import { watch } from "vue";
import WorkOrderAccordion from "../WorkOrderAccordion.vue";
import CardHeader from "./CardHeader.vue";
import CardBody from "./CardBody.vue";
import { useWorkOrders } from "../../composables/useWorkOrders";

const props = defineProps({
    vehicleId: { type: String, default: null },
    clientId: { type: String, default: null },
});

const { orders, loading, error, findByVehicleId, findByClientId } = useWorkOrders();

watch(
    () => [props.vehicleId, props.clientId],
    async ([vehicleId, clientId]) => {
        try {
            if (vehicleId) {
                await findByVehicleId(vehicleId);
            } else if (clientId) {
                await findByClientId(clientId);
            } else {
                orders.value = [];
            }
        } catch (loadError) {
            console.error("Не удалось загрузить заказ-наряды:", loadError);
        }
    },
    { immediate: true }
);
</script>

<template>
    <div class="card w-100">
        <CardHeader action="add" modal="workOrder">Заказ-наряды</CardHeader>
        <CardBody :status="loading" flex="column">
            <div v-if="error" class="alert alert-danger w-100 mb-0" role="alert">
                Не удалось загрузить заказ-наряды: {{ error }}
            </div>
            <div v-else-if="!vehicleId && !clientId" class="text-center">
                Выберите автомобиль, чтобы посмотреть заказ-наряды
            </div>
            <div v-else-if="orders.length === 0" class="text-center">
                Заказ-наряды не найдены
            </div>
            <div v-else class="accordion w-100">
                <WorkOrderAccordion
                    v-for="order in orders"
                    :key="order.id"
                    :order="order"
                />
            </div>
        </CardBody>
    </div>
</template>
