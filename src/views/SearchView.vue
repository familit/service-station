<template>
  <main class="d-flex justify-content-center align-items-center min-vh-100">
    <div class="card">
      <div class="card-header">Поиск клиента</div>
      <div class="card-body">
        <SearchClient />
      </div>
    </div>
  </main>
</template>

<script>
import SearchClient from "../components/SearchClient.vue";

export default {
  name: 'SearchView',
  components: {SearchClient}
}
</script>

<style scoped>
</style>
