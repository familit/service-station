<script setup>
import WorkOrderAccordion from "../WorkOrderAccordion.vue";
import CardHeader from "./CardHeader.vue";
</script>

<template>
    <div class="card w-100">
        <CardHeader action="add" modal="workOrder">Заказ-наряды</CardHeader>
        <div class="card-body d-flex flex-row align-items-center justify-content-between gap-5">
            <div class="accordion w-100" id="accordionExample">
                <WorkOrderAccordion />
            </div>
        </div>
    </div>
</template>
