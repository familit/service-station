<script setup>
import { useRoute } from "vue-router";
import packageJson from "../../package.json";

const route = useRoute();
const id = route.params.id;
</script>
<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark h-100 w-100">
        <RouterLink :to="{ name: 'MainView' }" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span class="fs-4">service-station</span>
        </RouterLink>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
            <RouterLink :to="{
                name: 'ClientView',
                params: { id: id }
            }" class="nav-link text-white">Карточка клиента</RouterLink>
            <RouterLink :to="{
                name: 'VehiclesView',
                params: { id: id }
            }" class="nav-link text-white">Карточка автомобиля</RouterLink>
            <RouterLink :to="{
                name: 'WorkOrderView',
                params: { id: id }
            }" class="nav-link text-white">Заказ-наряды</RouterLink>
        </ul>
        <hr>
        <RouterLink :to="{ name: 'MainView' }" class="nav-link">Выйти из клиента</RouterLink>
        <hr>
        <div class="d-flex flex-row justify-content-between align-items-center w-100">
            <p>v{{ packageJson.version }}</p>
            <p>Шефер А.В.</p>
        </div>
    </div>
</template>
