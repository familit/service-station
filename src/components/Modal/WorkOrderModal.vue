<script setup>
import { reactive, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { Modal } from "bootstrap";
import { useWorkOrders } from "../../composables/useWorkOrders";
import ModalHeader from "./ModalHeader.vue";
import ModalFooter from "./ModalFooter.vue";
import VehicleSelectorCard from "../Card/VehicleSelectorCard.vue";
import AddItemsTableForm from "../Form/AddItemsTableForm.vue";
import TextInput from "../Input/TextInput.vue";
import { WORKS_FIELDS, WORKS_COLUMNS, PARTS_FIELDS, PARTS_COLUMNS } from "../../constants/workOrderTable";
import WorkOrderTable from "../Table/WorkOrderTable.vue";
import DateInput from "../Input/DateInput.vue";

const route = useRoute()
const { addOrder } = useWorkOrders()

const formData = reactive({
    clientId: route.params.id || null,
    vehicleId: null,
    number: `${Date.now().toString().slice(-6)}`,
    startDate: new Date().toISOString().slice(0, 10),
    endDate: new Date().toISOString().slice(0, 10),
    works: [],
    parts: []
})

const workTotal = computed(() =>
    formData.works.reduce((s, r) => s + (Number(r.sum) || 0), 0)
)
const partsTotal = computed(() =>
    formData.parts.reduce((s, r) => s + (Number(r.sum) || 0), 0)
)
const total = computed(() => workTotal.value + partsTotal.value)

watch(
    () => route.params.vehicleId,
    (v) => { formData.vehicleId = v || null },
    { immediate: true }
)

const closeModal = () => {
    const el = document.getElementById('workOrderModal')
    const instance = el ? Modal.getOrCreateInstance(el) : null
    instance?.hide()

    // Fallback: ensure backdrop and body class removed if Bootstrap state is inconsistent
    setTimeout(() => {
        document.querySelectorAll('.modal-backdrop').forEach(n => n.remove())
        document.body.classList.remove('modal-open')
    }, 200)
}

const handleSubmit = async () => {
    if (!formData.vehicleId) {
        alert('Выберите автомобиль')
        return
    }
    if (!formData.works.length && !formData.parts.length) {
        alert('Добавьте хотя бы одну работу или запчасть')
        return
    }

    try {
        await addOrder({ ...formData })
        closeModal()
    } catch (e) {
        console.error(e)
        alert(e.message || 'Не удалось сохранить заказ-наряд')
    }
}
</script>

<template>
    <div class="modal fade" id="workOrderModal" tabindex="-1" aria-labelledby="workOrderModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <form @submit.prevent="handleSubmit" class="modal-content">
                <ModalHeader name="workOrder">Новый заказ-наряд</ModalHeader>
                <div class="modal-body d-flex flex-column gap-4">
                    <div class="d-flex flex-row align-items-center justify-content-between gap-5 w-100">
                        <TextInput id="number" label="Номер" v-model="formData.number" readonly />
                        <DateInput id="start" label="Дата начала" v-model="formData.startDate" />
                        <DateInput id="end" label="Дата окончания" v-model="formData.endDate" />
                    </div>
                    <VehicleSelectorCard
                        :client-id="formData.clientId" :model-value="formData.vehicleId"
                        @vehicle-selected="formData.vehicleId = $event"
                    />
                    <div v-if="formData.vehicleId && formData.clientId">
                        <WorkOrderTable :id="formData.number" :vehicle="formData.vehicleId" :client="formData.clientId" />
                    </div>
                    <AddItemsTableForm
                        v-model="formData.works" :fields="WORKS_FIELDS" :columns="WORKS_COLUMNS" title="Работы"
                        empty-text="Работы не добавлены" alert-text="Введите название работы"
                    />
                    <AddItemsTableForm
                        v-model="formData.parts" :fields="PARTS_FIELDS" :columns="PARTS_COLUMNS" title="Запасные части"
                        empty-text="Запчасти не добавлены"  alert-text="Введите название запчасти"
                    />
                    <div class="row">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <th>Работы</th>
                                    <td class="text-end">{{ workTotal.toFixed(2) }}</td>
                                </tr>
                                <tr>
                                    <th>Запчасти</th>
                                    <td class="text-end">{{ partsTotal.toFixed(2) }}</td>
                                </tr>
                                <tr class="table-primary">
                                    <th><strong>Итого</strong></th>
                                    <td class="text-end"><strong>{{ total.toFixed(2) }}</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <ModalFooter />
            </form>
        </div>
    </div>
</template>
