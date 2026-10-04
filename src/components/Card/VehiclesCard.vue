<script setup>
import { onBeforeMount, ref } from "vue";
import { useVehicles } from "../../composables/useVehicles";
import { useRoute } from "vue-router";
import CardHeader from "./CardHeader.vue";
import CardBody from "./CardBody.vue";

const route = useRoute()
const { vehicles, getByClientId, loading } = useVehicles()
const clientId = ref(route.params.id)

onBeforeMount(async () => {
    await getByClientId(route.params.id)
})
</script>

<template>
    <div class="card w-100">
        <CardHeader action="add" modal="vehicles">Информация об автомобилях</CardHeader>
        <CardBody :status="loading">
            <div v-if="!vehicles[0]" class="d-flex flex-row align-items-center justify-content-center w-100 gap-3">
                <i class="bi bi-exclamation-diamond-fill text-warning display-6"></i>
                <p class="text-center fs-5 mb-0">Информация о машинах клиента отсутствует</p>
            </div>
            <table v-else class="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Регистрационный знак</th>
                        <th>Марка и модель</th>
                        <th>Год выпуска</th>
                        <th colspan="2">Пробег</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="vehicle in vehicles" :key="vehicle.id">
                        <td>{{ vehicle.vin }}</td>
                        <td>{{ vehicle.plate }}</td>
                        <td>{{ vehicle.brand }} {{ vehicle.model }}</td>
                        <td>{{ vehicle.age }}</td>
                        <td>{{ vehicle.mileage }}</td>
                        <td>
                            <router-link :to="{
                                    name: 'VehicleView',
                                    params: { clientId: clientId, vehicleId: vehicle.id }
                                }">
                                <i class="bi bi-arrow-right-circle"></i>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </CardBody>
    </div>
</template>
