<script setup>
import TextInput from "../Input/TextInput.vue";
import NumberInput from "../Input/NumberInput.vue";
import WorkOrderTable from "../WorkOrderTable.vue";
import Button from "./Button.vue";
import ModalHeader from "./ModalHeader.vue";
import ModalFooter from "./ModalFooter.vue";
</script>

<template>
    <div class="modal fade" id="workOrderModal" tabindex="-1" aria-labelledby="workOrderModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <form action="/" class="modal-content">
                <ModalHeader name="workOrder">Создание / изменение заказ-наряда</ModalHeader>
                <div class="modal-body d-flex flex-column gap-3">
                    <div>
                        <WorkOrderTable />
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
