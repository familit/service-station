<script setup>
import WorksTable from "./WorksTable.vue";
import TitleTable from "./TitleTable.vue";
import HeaderTable from "./HeaderTable.vue";

defineProps({
    id: Number,
    dateStart: Date,
    dateEnd: Date,
    client: String,
    phone: String,
    vehicle: String,
    vin: String,
    plate: String,
    mileage: String,
})
</script>

<template>
    <TitleTable :id=id :date-start="dateStart" :date-end="dateEnd" />
    <HeaderTable :client="client" :phone="phone" :vehicle="vehicle" :vin="vin" :plate="plate" :mileage="mileage" />
    <WorksTable />
</template>
