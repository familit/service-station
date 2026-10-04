<script setup>
defineProps({
    client: Object,
    vehicle: Object,
})
</script>

<template>
    <table class="table">
        <tbody>
            <tr>
                <td>Заказчик</td>
                <td>{{  client.surname }} {{ client.name }}</td>
                <td>Номер телефона</td>
                <td>{{ client.phone }}</td>
            </tr>
            <tr>
                <td>Марка, модель, год выпуска</td>
                <td>{{ vehicle.brand }} {{ vehicle.model }} {{vehicle.age}}</td>
                <td>VIN</td>
                <td>{{ vehicle.vin }}</td>
            </tr>
            <tr>
                <td>Регистрационный знак</td>
                <td>{{ vehicle.plate }}</td>
                <td>Пробег</td>
                <td>{{ vehicle.mileage }}</td>
            </tr>
        </tbody>
    </table>
</template>
