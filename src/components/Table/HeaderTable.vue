<script setup>
defineProps({
    client: String,
    phone: String,
    vehicle: String,
    vin: String,
    plate: String,
    mileage: String,
})
</script>

<template>
    <table class="table">
        <tbody>
            <tr>
                <td>Заказчик</td>
                <td>{{ client }}</td>
                <td>Номер телефона</td>
                <td>{{ phone }}</td>
            </tr>
            <tr>
                <td>Марка, модель, год выпуска</td>
                <td>{{ vehicle }}</td>
                <td>VIN</td>
                <td>{{ vin }}</td>
            </tr>
            <tr>
                <td>Регистрационный знак</td>
                <td>{{ plate }}</td>
                <td>Пробег</td>
                <td>{{ mileage }}</td>
            </tr>
        </tbody>
    </table>
</template>
