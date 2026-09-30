<script setup>
import CardHeader from "./CardHeader.vue";
import CardBody from "./CardBody.vue";
</script>

<template>
    <div class="card w-100">
        <CardHeader>Выберите автомобиль</CardHeader>
        <CardBody :status="false">
            <select class="form-select" id="vehicle-selector"></select>
        </CardBody>
    </div>
</template>
