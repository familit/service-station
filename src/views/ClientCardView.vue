<script setup>
import Sidebar from "../components/Sidebar.vue";
import ClientCard from "../components/Card/ClientCard.vue";
import AutoCard from "../components/Card/AutoCard.vue";
import WorkOrderCard from "../components/WorkOrderCard.vue";
</script>

<template>
  <main class="container-fluid w-100 d-flex flex-wrap p-0">
    <div class="row w-100">
      <div class="col-sm-3">
        <Sidebar />
      </div>
      <div class="col-sm-9 bg-secondary d-flex justify-content-center align-items-center flex-column gap-5">
        <ClientCard />
        <AutoCard />
        <WorkOrderCard />
      </div>
    </div>
  </main>
</template>
