<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;
</script>
<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark min-vh-100 w-100">
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
    </div>
</template>
