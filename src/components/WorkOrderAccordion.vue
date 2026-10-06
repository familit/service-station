<script setup>
import { computed } from "vue";
import WorkOrderTable from "./Table/WorkOrderTable.vue";

const props = defineProps({
    order: { type: Object, required: true },
});

const collapseId = computed(() => `work-order-${props.order.id}`);
const total = computed(() =>
    [...(props.order.works || []), ...(props.order.parts || [])]
        .reduce((sum, item) => sum + (Number(item.sum) || 0), 0)
        .toFixed(2)
);
</script>

<template>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="`#${collapseId}`"
                aria-expanded="false"
                :aria-controls="collapseId"
            >
                Заказ-наряд №{{ order.number || order.id }}
                <span class="ms-3 text-nowrap">{{ total }} руб.</span>
            </button>
        </h2>
        <div
            :id="collapseId"
            class="accordion-collapse collapse"
            data-bs-parent=".accordion"
        >
            <div class="accordion-body overflow-x-hidden">
                <p class="mb-2">
                    Период: {{ order.startDate || "—" }} — {{ order.endDate || "—" }}
                </p>
                <WorkOrderTable
                    :id="order.number"
                    :vehicle="order.vehicleId"
                    :client="order.clientId"
                />
            </div>
        </div>
    </div>
</template>
