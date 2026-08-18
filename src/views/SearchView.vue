<template>
  <main class="d-flex justify-content-center align-items-center min-vh-100">
    <div class="card">
      <div class="card-header">Поиск клиента</div>
      <div class="card-body d-flex flex-column gap-5">
        <SearchClient />
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#clientModal">Новый клиент</button>
      </div>
    </div>
  </main>

  <ClientModal method="create" />
</template>

<script setup>
import SearchClient from "../components/SearchClient.vue";
import ClientModal from "../components/Modal/ClientModal.vue";
</script>
