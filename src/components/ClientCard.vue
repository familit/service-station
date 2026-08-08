<script setup>
</script>
<template>
  <div class="card w-100">
    <div class="card-header d-flex align-items-center justify-content-between">
      <h5 class="h5">Информация о клиенте</h5>
      <a href=""><i class="bi bi-pencil-square"></i></a>
    </div>
    <div class="card-body d-flex flex-row align-items-center justify-content-between gap-5">
      <div class="input-group">
        <span class="input-group-text">Фамилия</span>
        <input type="text" value='surname' id="surname" readonly class="form-control">
      </div>
      <div class="input-group">

        <span class="input-group-text">Имя</span>
        <input type="text" value='name' id="name" readonly class="form-control">
      </div>
      <div class="input-group">
        <span class="input-group-text">Телефон</span>
        <input type="number" value='9000000000' id="number" readonly class="form-control">
        <a href="tel:+79000000000" class="btn btn-outline-secondary"><i class="bi bi-telephone-fill"></i></a>
      </div>
    </div>
  </div>
</template>
