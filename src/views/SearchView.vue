<template>
    <main class="d-flex flex-column justify-content-center align-items-center min-vh-100 p-3">
        <div class="card w-100" style="max-width: 32rem">
            <div class="card-header">Поиск клиента</div>
            <div class="card-body d-flex flex-column gap-5">
                <SearchClient />
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#clientModal">Новый клиент</button>
            </div>
        </div>
        <div class="d-flex flex-row justify-content-between align-items-center p-3 w-100" style="max-width: 32rem">
            <p>v{{ packageJson.version }}</p>
            <p>Шефер А.В.</p>
        </div>
    </main>
  <ClientModal method="create" />
</template>

<script setup>
import SearchClient from "../components/SearchClient.vue";
import ClientModal from "../components/Modal/ClientModal.vue";
import packageJson from "../../package.json";
</script>
