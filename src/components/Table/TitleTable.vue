<script setup>
import DateInput from "../Input/DateInput.vue";

defineProps({
    id: String,
    dateStart: String,
    dateEnd: String,
})
</script>

<template>
    <table class="table">
        <tbody>
            <tr>
                <td rowspan="2">Заказ-наряд № {{ id }}</td>
                <DateInput id="dateStart" label="Дата начала работ" />
            </tr>
            <tr>
                <DateInput id="dateEnd" label="Дата окончания работ" />
            </tr>
        </tbody>
    </table>
</template>
