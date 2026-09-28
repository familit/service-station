<script setup>
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
                <td>Дата начала работ</td>
                <td>{{ dateStart }}</td>
            </tr>
            <tr>
                <td>Дата окончания работ</td>
                <td>{{ dateEnd }}</td>
            </tr>
        </tbody>
    </table>
</template>
