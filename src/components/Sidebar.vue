<script setup>
</script>
<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark min-vh-100 w-100">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span class="fs-4">service-station</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <RouterLink to="/client" class="nav-link text-white">Карточка клиента</RouterLink>
      <RouterLink to="/vehicle" class="nav-link text-white">Карточка автомобиля</RouterLink>
      <RouterLink to="/work-order" class="nav-link text-white">Заказ-наряды</RouterLink>
      <RouterLink to="/calendar" class="nav-link text-white">Календарь</RouterLink>
    </ul>
    <hr>
    <RouterLink to="/" class="nav-link">Выйти из клиента</RouterLink>
  </div>
</template>
