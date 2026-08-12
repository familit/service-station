import { ref } from 'vue'
import { clientsApi } from '../api/clients'

export function useClients() {
    const client = ref(null)
    const loading = ref(false)
    const error = ref(null)

    const findById = async (id) => {
        loading.value = true
        error.value = null
        try {
            client.value = await clientsApi.getById(id)
            if (!client.value) {
                error.value = 'Клиент не найден'
            }
            return client.value
        } catch (err) {
            error.value = err.message
            console.error('Ошибка поиска по ID:', err)
            throw err
        } finally {
            loading.value = false
        }
    }

    const findByPhone = async (phone) => {
        loading.value = true
        error.value = null
        try {
            client.value = await clientsApi.getByPhone(phone)
            if (!client.value) {
                error.value = 'Клиент с таким номером телефона не найден'
            }
            return client.value
        } catch (err) {
            error.value = err.message
            console.error('Ошибка поиска по телефону:', err)
            throw err
        } finally {
            loading.value = false
        }
    }

    const search = async (query) => {
        if (query.startsWith('+') || query.match(/^[0-9+\-() ]+$/)) {
            return await findByPhone(query)
        } else {
            return await findById(query)
        }
    }

    const addClient = async (data) => {
        loading.value = true
        error.value = null
        try {
            const newClient = await clientsApi.add(data)
            client.value = newClient
            return newClient
        } catch (err) {
            error.value = err.message
            console.error('Ошибка добавления клиента:', err)
            throw err
        } finally {
            loading.value = false
        }
    }

    return {
        client,
        loading,
        error,
        findById,
        findByPhone,
        search,
        addClient,
        updateClient: clientsApi.update,
        deleteClient: clientsApi.delete
    }
}
