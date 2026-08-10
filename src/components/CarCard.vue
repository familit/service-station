<script setup>
</script>
<template>
  <div class="card w-100">
    <div class="card-header d-flex align-items-center justify-content-between">
      <h5 class="h5">Информация об автомобиле</h5>
      <a href=""><i class="bi bi-pencil-square"></i></a>
    </div>
    <div class="card-body d-flex flex-column align-items-center justify-content-between gap-5">
      <div class="d-flex flex-row align-items-center justify-content-between gap-5 w-100">
        <div class="input-group">
          <span class="input-group-text">Марка</span>
          <input type="text" value='Ford' id="brand" readonly class="form-control">
        </div>
        <div class="input-group">
          <span class="input-group-text">Модель</span>
          <input type="text" value='Focus' id="model" readonly class="form-control">
        </div>
        <div class="input-group">
          <span class="input-group-text">VIN</span>
          <input type="text" value='VF3MJAHXVHS158219' id="vin" readonly class="form-control">
        </div>
      </div>
      <div class="d-flex flex-row align-items-center justify-content-between gap-5 w-100">
        <div class="input-group">
          <span class="input-group-text">Год выпуска</span>
          <input type="text" value='2007' id="age" readonly class="form-control">
        </div>
        <div class="input-group">
          <span class="input-group-text">Рестрационный знак</span>
          <input type="text" value='О347НК145' id="number" readonly class="form-control">
        </div>
        <div class="input-group">
          <span class="input-group-text">Пробег</span>
          <input type="number" value='265.000' id="race" readonly class="form-control">
        </div>
      </div>
    </div>
  </div>
</template>
