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
            <div v-else class="w-100">
                <div v-for="vehicle in vehicles" :key="vehicle.id" class="table-responsive mb-3">
                    <table class="table table-bordered table-striped align-middle mb-0">
                        <tbody>
                            <tr>
                                <th scope="row" class="w-50">VIN</th>
                                <td class="text-break">{{ vehicle.vin }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Регистрационный знак</th>
                                <td class="text-break">{{ vehicle.plate }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Марка и модель</th>
                                <td class="text-break">{{ vehicle.brand }} {{ vehicle.model }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Год выпуска</th>
                                <td>{{ vehicle.age }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Пробег</th>
                                <td>{{ vehicle.mileage }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Карточка автомобиля</th>
                                <td>
                                    <router-link
                                        :to="{ name: 'VehicleView', params: { clientId, vehicleId: vehicle.id } }"
                                        class="btn btn-sm btn-outline-primary"
                                    >
                                        Открыть <i class="bi bi-arrow-right-circle ms-1" aria-hidden="true"></i>
                                    </router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </CardBody>
    </div>
</template>
