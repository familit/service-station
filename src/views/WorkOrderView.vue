<script setup>
import Sidebar from "../components/Sidebar.vue";
import WorkOrdersCard from "../components/Card/WorkOrdersCard.vue";
</script>

<template>
  <main class="container-fluid w-100 d-flex flex-wrap p-0">
    <div class="row w-100">
      <div class="col-sm-3">
        <Sidebar />
      </div>
      <div class="col-sm-9 bg-secondary d-flex justify-content-center align-items-center flex-column gap-5">
        <WorkOrdersCard />
      </div>
    </div>
  </main>
</template>
