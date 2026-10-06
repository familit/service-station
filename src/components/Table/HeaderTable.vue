<script setup>
defineProps({
    client: Object,
    vehicle: Object,
})
</script>

<template>
    <table class="table table-bordered table-sm w-100 mb-0">
        <tbody>
            <tr>
                <th scope="row" class="w-50">Заказчик</th>
                <td class="text-break">{{ client.surname }} {{ client.name }}</td>
            </tr>
            <tr>
                <th scope="row">Номер телефона</th>
                <td class="text-break">{{ client.phone }}</td>
            </tr>
            <tr>
                <th scope="row">Марка, модель, год выпуска</th>
                <td class="text-break">{{ vehicle.brand }} {{ vehicle.model }} {{ vehicle.age }}</td>
            </tr>
            <tr>
                <th scope="row">VIN</th>
                <td class="text-break">{{ vehicle.vin }}</td>
            </tr>
            <tr>
                <th scope="row">Регистрационный знак</th>
                <td class="text-break">{{ vehicle.plate }}</td>
            </tr>
            <tr>
                <th scope="row">Пробег</th>
                <td>{{ vehicle.mileage }}</td>
            </tr>
        </tbody>
    </table>
</template>
