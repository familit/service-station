<script setup>
import TextInput from "../Input/TextInput.vue";
import NumberInput from "../Input/NumberInput.vue";
import WorkOrderTable from "../WorkOrderTable.vue";
import Button from "./Button.vue";
</script>

<template>
    <div class="modal fade" id="workOrderModal" tabindex="-1" aria-labelledby="workOrderModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <form action="/" class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="workOrderModalLabel">Добавление заказ наряда</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
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
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
                    <input type="submit" class="btn btn-primary" value="Создать">
                </div>
            </form>
        </div>
    </div>
</template>
