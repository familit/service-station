<script setup>
import Button from "../Modal/Button.vue";
import {onBeforeMount} from "vue";
import {useVehicles} from "../../composables/useVehicles";
import {useRoute} from "vue-router";

const route = useRoute()
const { vehicles, getByClientId, loading } = useVehicles()
onBeforeMount(async () => {
    await getByClientId(route.params.id)
    console.log(vehicles.value);
})
</script>
<template>
    <div class="card w-100">
        <div class="card-header d-flex justify-content-between align-items-center gap-5">
            <h5 class="h5">Информация об автомобилях</h5>
            <Button modal="vehicles" />
        </div>
        <div v-if="loading" class="card-body d-flex flex-row align-items-center justify-content-center gap-5">
            <Loading />
        </div>
        <div v-else-if="!vehicles[0]" class="card-body d-flex flex-row align-items-center justify-content-center gap-5">
            <i class="bi bi-exclamation-diamond-fill text-warning display-6"></i>
            <p class="text-center fs-5 mb-0">Информация о машинах клиента отсутствует</p>
        </div>
        <div v-else class="card-body d-flex flex-row align-items-center justify-content-between gap-5">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Регистрационный знак</th>
                        <th>Марка и модель</th>
                        <th>Год выпуска</th>
                        <th>Пробег</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="vehicle in vehicles" :key="vehicle.id">
                        <td>{{ vehicle.vin }}</td>
                        <td>{{ vehicle.plate }}</td>
                        <td>{{ vehicle.brand }} {{vehicle.model}}</td>
                        <td>{{ vehicle.age }}</td>
                        <td>{{ vehicle.mileage }}</td>
                        <td>
                            <router-link :to="'/vehicle/' + vehicle.id">
                                <i class="bi bi-arrow-right-circle"></i>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
