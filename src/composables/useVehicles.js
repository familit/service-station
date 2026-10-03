import { ref } from 'vue'
import { vehiclesApi } from '../api/vehicles'

export function useVehicles() {
    const vehicle = ref(null)
    const vehicles = ref([])
    const vehicleId = ref(null)
    const loading = ref(false)
    const error = ref(null)

    const findById = async (id) => {
        loading.value = true
        error.value = null
        try {
            vehicle.value = await vehiclesApi.getById(id)
            if (!vehicle.value) {
                error.value = 'Автомобиль не найден'
            }
            return vehicle.value
        } catch (err) {
            error.value = err.message
            console.error('Ошибка поиска по ID:', err)
            throw err
        } finally {
            loading.value = false
        }
    }

    const findByVin = async (vin) => {
        loading.value = true
        error.value = null
        try {
            vehicle.value = await vehiclesApi.getByVin(vin)
            if (!vehicle.value) {
                error.value = 'Автомобиль с таким VIN не найден'
            }
            return vehicle.value
        } catch (err) {
            error.value = err.message
            console.error('Ошибка поиска по VIN:', err)
            throw err
        } finally {
            loading.value = false
        }
    }

    const findByPlate = async (plate) => {
        loading.value = true
        error.value = null
        try {
            vehicle.value = await vehiclesApi.getByPlate(plate)
            if (!vehicle.value) {
                error.value = 'Автомобиль с таким госномером не найден'
            }
            return vehicle.value
        } catch (err) {
            error.value = err.message
            console.error('Ошибка поиска по госномеру:', err)
            throw err
        } finally {
            loading.value = false
        }
    }

    const findByClientId = async (clientId) => {
        loading.value = true
        error.value = null
        try {
            vehicles.value = await vehiclesApi.getByClientId(clientId)
        } catch (err) {
            error.value = err.message
        } finally {
            loading.value = false
        }
    }

    const search = async (query) => {
        if (query.length === 17 && query.match(/^[A-HJ-NPR-Z0-9]+$/i)) {
            return await findByVin(query)
        } else if (query.match(/^[А-ЯA-Z0-9]+$/i)) {
            return await findByPlate(query)
        } else {
            return await findById(query)
        }
    }

    const getByClientId = async (clientId) => {
        loading.value = true
        error.value = null
        try {
            vehicles.value = await vehiclesApi.getByClientId(clientId)
            return vehicles.value
        } catch (err) {
            error.value = err.message
            console.error('Ошибка получения автомобилей клиента:', err)
            throw err
        } finally {
            loading.value = false
        }
    }

    return {
        vehicle,
        vehicles,
        vehicleId,
        loading,
        error,
        findById,
        findByVin,
        findByPlate,
        findByClientId,
        search,
        getByClientId,
        addVehicle: vehiclesApi.add,
        updateVehicle: vehiclesApi.update,
        deleteVehicle: vehiclesApi.delete
    }
}
