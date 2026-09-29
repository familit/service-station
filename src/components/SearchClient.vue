<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useClients } from "../composables/useClients";
import { useVehicles } from "../composables/useVehicles";

const { findById, findByPhone } = useClients()
const { findByVin, findByPlate } = useVehicles()

const searchQuery = ref();
const searchType = ref('vin');
const router = useRouter();

const searchClient = async () => {
    let client = null

    try {
        if (searchType.value === 'phone') {
            const phone = parseInt(searchQuery.value)
            if (!isNaN(phone)) {
                client = await findByPhone(phone)
            } else {
                alert('Неверный формат номера телефона')
                return
            }
        } else if (searchType.value === 'vin') {
            const vehicle = await findByVin(searchQuery.value.trim())
            if (vehicle?.clientId) {
                client = await findById(vehicle.clientId)
            }
        } else if (searchType.value === 'plate') {
            const vehicle = await findByPlate(searchQuery.value.trim())
            if (vehicle?.clientId) {
                client = await findById(vehicle.clientId)
            }
        }

        if (client) {
            router.push(`/client/${client.id}`)
        } else {
            alert('Клиент не найден')
        }
    } catch (error) {
        alert('Ошибка при поиске')
    }
}
</script>

<template>
    <form @submit.prevent="searchClient">
        <div class="input-group mb-3">
            <input v-model="searchQuery" type="text" class="form-control" placeholder="Введите данные для поиска" aria-label="Search client">
            <select v-model="searchType" class="form-select" id="search-selector">
                <option value="vin" selected>VIN</option>
                <option value="phone">Номер телефона</option>
                <option value="plate">Регистрационный знак</option>
            </select>
            <button class="btn btn-outline-secondary" type="submit">Поиск</button>
        </div>
    </form>
</template>
