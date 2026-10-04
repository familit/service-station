<script setup>
import TextInput from "../Input/TextInput.vue";
import NumberInput from "../Input/NumberInput.vue";
import WorkOrderTable from "../Table/WorkOrderTable.vue";
import Button from "./Button.vue";
import ModalHeader from "./ModalHeader.vue";
import ModalFooter from "./ModalFooter.vue";
import VehicleSelectorCard from "../Card/VehicleSelectorCard.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()

const vehicleId = ref(null)
const clientId = ref(route.params.id)

</script>

<template>
    <div class="modal fade" id="workOrderModal" tabindex="-1" aria-labelledby="workOrderModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <form action="/" class="modal-content">
                <ModalHeader name="workOrder">Создание / изменение заказ-наряда</ModalHeader>
                <div class="modal-body d-flex flex-column gap-3">
                    <VehicleSelectorCard @vehicleSelected="vehicleId = $event" />
                    <div v-if="vehicleId && clientId">
                        <WorkOrderTable :id="null" :vehicle="vehicleId" :client="clientId" />
                    </div>
                    <div class="d-flex flex-row align-items-center justify-content-between gap-3 w-100">
                        <TextInput id="work" label="Работа" placeholder="Введите название работы" required />
                        <NumberInput id="price" label="Цена" placeholder="Введите цену работы" required />
                        <NumberInput id="count" label="Количество" placeholder="Введите количество работ" required />
                        <Button />
                    </div>
                </div>
                <ModalFooter />
            </form>
        </div>
    </div>
</template>
