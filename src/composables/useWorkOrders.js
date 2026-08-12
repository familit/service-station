import { ref } from 'vue'
import { workOrdersApi } from '../api/workOrders'

export function useWorkOrders() {
    const order = ref(null)
    const orders = ref([])
    const loading = ref(false)
    const error = ref(null)

    const findById = async (id) => {
        loading.value = true
        error.value = null
        try {
            order.value = await workOrdersApi.getById(id)
            if (!order.value) {
                error.value = 'Заказ-наряд не найден'
            }
            return order.value
        } catch (err) {
            error.value = err.message
            console.error('Ошибка поиска по ID:', err)
            throw err
        } finally {
            loading.value = false
        }
    }

    const findByClientId = async (clientId) => {
        loading.value = true
        error.value = null
        try {
            orders.value = await workOrdersApi.getByClientId(clientId)
            return orders.value
        } catch (err) {
            error.value = err.message
            console.error('Ошибка поиска по клиенту:', err)
            throw err
        } finally {
            loading.value = false
        }
    }

    const findByVehicleId = async (vehicleId) => {
        loading.value = true
        error.value = null
        try {
            orders.value = await workOrdersApi.getByVehicleId(vehicleId)
            return orders.value
        } catch (err) {
            error.value = err.message
            console.error('Ошибка поиска по автомобилю:', err)
            throw err
        } finally {
            loading.value = false
        }
    }

    const search = async (criteria) => {
        if (criteria.type === 'clientId') {
            return await findByClientId(criteria.value)
        } else if (criteria.type === 'vehicleId') {
            return await findByVehicleId(criteria.value)
        } else {
            throw new Error('Неверный критерий поиска')
        }
    }

    return {
        order,
        orders,
        loading,
        error,
        findById,
        findByClientId,
        findByVehicleId,
        search,
        addOrder: workOrdersApi.add,
        updateOrder: workOrdersApi.update,
        deleteOrder: workOrdersApi.delete,
        updateStatus: workOrdersApi.updateStatus
    }
}
