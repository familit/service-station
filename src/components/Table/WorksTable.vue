<script setup>
defineProps({
    title: String,
})
</script>

<template>
    <h6 class="h6">{{ title }}</h6>
    <table class="table">
        <thead>
            <tr>
                <th>№ п/п</th>
                <th>Наименование работ</th>
                <th>Количество</th>
                <th>Стоимость</th>
                <th>Сумма</th>
            </tr>
        </thead>
        <tbody>
            <tr>

            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th colspan="4">Итого работ</th>
                <th>0 руб.</th>
            </tr>
        </tfoot>
    </table>
</template>
