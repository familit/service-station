import { api } from './firebase'
import { COLLECTIONS } from "../constants/collections";

const COLLECTION = COLLECTIONS.CLIENTS

export const clientsApi = {
    getById(id) {
        return api.getById(COLLECTION, id)
    },

    getByPhone(phone) {
        return api.search(COLLECTION, 'phone', phone)
            .then(results => results.length > 0 ? results[0] : null)
    },

    async existsByPhone(phone) {
        const client = await this.getByPhone(phone)
        return !!client
    },

    async add(data) {
        if (!data.surname || !data.name) {
            throw new Error('Фамилия и имя обязательны')
        }

        if (data.phone) {
            const exists = await this.existsByPhone(data.phone)
            if (exists) {
                throw new Error('Клиент с таким номером телефона уже существует')
            }
        }

        return api.add(COLLECTION, data)
    },

    update(id, data) {
        return api.update(COLLECTION, id, data)
    },

    delete(id) {
        return api.delete(COLLECTION, id)
    },

    getAll() {
        return api.getAll(COLLECTION)
    }
}
