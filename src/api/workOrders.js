import { api } from './firebase'
import {COLLECTIONS} from "../constants/collections";

const COLLECTION = COLLECTIONS.WORK_ORDERS

export const workOrdersApi = {
    getById(id) {
        return api.getById(COLLECTION, id)
    },

    getByClientId(clientId) {
        return api.search(COLLECTION, 'clientId', clientId)
    },

    getByVehicleId(vehicleId) {
        return api.search(COLLECTION, 'vehicleId', vehicleId)
    },

    getByStatus(status) {
        return api.search(COLLECTION, 'status', status)
    },

    add(data) {
        if (!data.clientId || !data.vehicleId) {
            throw new Error('Клиент и автомобиль обязательны')
        }

        const orderNumber = `ORD-${Date.now()}`

        return api.add(COLLECTION, {
            ...data,
            number: orderNumber,
            status: data.status || 'new'
        })
    },

    update(id, data) {
        return api.update(COLLECTION, id, data)
    },

    delete(id) {
        return api.delete(COLLECTION, id)
    },

    updateStatus(id, status) {
        return api.update(COLLECTION, id, { status })
    }
}
