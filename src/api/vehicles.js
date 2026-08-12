import { api } from './firebase'

const COLLECTION = 'vehicles'

export const vehiclesApi = {
    getById(id) {
        return api.getById(COLLECTION, id)
    },

    getByVin(vin) {
        return api.search(COLLECTION, 'vin', vin)
            .then(results => results.length > 0 ? results[0] : null)
    },

    getByLicensePlate(licensePlate) {
        return api.search(COLLECTION, 'licensePlate', licensePlate)
            .then(results => results.length > 0 ? results[0] : null)
    },

    getByClientId(clientId) {
        return api.search(COLLECTION, 'clientId', clientId)
    },

    async existsByVin(vin) {
        const vehicle = await this.getByVin(vin)
        return !!vehicle
    },

    async existsByLicensePlate(licensePlate) {
        const vehicle = await this.getByLicensePlate(licensePlate)
        return !!vehicle
    },

    async add(data) {
        if (!data.clientId) {
            throw new Error('ID клиента обязателен')
        }

        if (data.vin) {
            const exists = await this.existsByVin(data.vin)
            if (exists) {
                throw new Error('Автомобиль с таким VIN уже существует')
            }
        }

        if (data.licensePlate) {
            const exists = await this.existsByLicensePlate(data.licensePlate)
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
