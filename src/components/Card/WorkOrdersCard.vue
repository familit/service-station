<script setup>
import WorkOrderAccordion from "../WorkOrderAccordion.vue";
import Button from "../Modal/Button.vue";
</script>

<template>
  <div class="card w-100">
    <div class="card-header d-flex flex-row justify-content-between align-items-center gap-5">
      <h5>Заказ-наряды</h5>
      <Button modal="workOrder" />
    </div>
    <div class="card-body d-flex flex-row align-items-center justify-content-between gap-5">
      <div class="accordion w-100" id="accordionExample">
        <WorkOrderAccordion />
      </div>
    </div>
  </div>
</template>
