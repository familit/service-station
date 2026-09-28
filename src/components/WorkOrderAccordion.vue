<script setup>
import WorkOrderTable from "./Table/WorkOrderTable.vue";

defineProps({
    id: Number,
    vehicle: String,
    mileage: Number,
    cost: Number,
})
</script>

<template>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        #{{ id }} {{ vehicle }} {{ mileage }} км {{ cost }} руб.
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
          <WorkOrderTable :id="id" date-start="01-01-1900" date-end="01-01-1900"/>
      </div>
    </div>
  </div>
</template>
