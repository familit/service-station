<script setup>
import WorkOrder from "./WorkOrder.vue";
</script>

<template>
  <div class="card w-100">
    <div class="card-header d-flex flex-row justify-content-between align-items-center gap-5">
      <h5>Заказ-наряды</h5>
      <a href=""><i class="bi bi-plus-circle-fill"></i></a>
    </div>
    <div class="card-body d-flex flex-row align-items-center justify-content-between gap-5">
      <div class="accordion w-100" id="accordionExample">
        <WorkOrder />
      </div>
    </div>
  </div>
</template>
