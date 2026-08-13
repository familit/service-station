<script setup>
import WorkOrderTable from "./WorkOrderTable.vue";
</script>

<template>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        #23423 Ford Focus 265.000 км 17.500 руб.
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
          <WorkOrderTable />
      </div>
    </div>
  </div>
</template>
