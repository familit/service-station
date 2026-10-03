import { api } from './firebase'
import { COLLECTIONS } from "../constants/collections";

const COLLECTION = COLLECTIONS.VEHICLES

export const vehiclesApi = {
    getById(id) {
        return api.getById(COLLECTION, id)
    },

    getByVin(vin) {
        return api.search(COLLECTION, 'vin', vin)
            .then(results => results.length > 0 ? results[0] : null)
    },

    getByPlate(plate) {
        return api.search(COLLECTION, 'plate', plate)
            .then(results => results.length > 0 ? results[0] : null)
    },

    getByClientId(clientId) {
        return api.search(COLLECTION, 'clientId', clientId)
    },

    async existsByVin(vin) {
        const vehicle = await this.getByVin(vin)
        return !!vehicle
    },

    async existsByPlate(plate) {
        const vehicle = await this.getByPlate(plate)
        return !!vehicle
    },

    async add(data) {
        if (!data.clientId) throw new Error('ID клиента обязателен')

        if (data.vin) {
            const exists = await vehiclesApi.existsByVin(data.vin)
            if (exists) {
                throw new Error('Автомобиль с таким VIN уже существует')
            }
        }

        if (data.plate) {
            const exists = await vehiclesApi.existsByPlate(data.plate)
            if (exists) {
                throw new Error('Автомобиль с таким госномером уже существует')
            }
        }

        return api.add(COLLECTION, data)
    },

    update(id, data) {
        return api.update(COLLECTION, id, data)
    },

    delete(id) {
        return api.delete(COLLECTION, id)
    }
}
