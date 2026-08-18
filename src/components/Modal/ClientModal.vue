<script setup>
import TextInput from "../Input/TextInput.vue";
import PhoneInput from "../Input/PhoneInput.vue";
import { METHOD_TYPES, isValidMethod } from "../../constants/methodTypes";
import { reactive } from "vue";
import {useClients} from "../../composables/useClients";
import {useRouter} from "vue-router";
import ModalHeader from "./ModalHeader.vue";
import ModalFooter from "./ModalFooter.vue";

const props = defineProps({
    method: {
        type: String,
        default: METHOD_TYPES.UPDATE,
        validator: isValidMethod
    }
})

const router = useRouter();

const formData = reactive({
    surname: '',
    name: '',
    phone: ''
})


const handleSubmit = async (event) => {
    event.preventDefault()
    try {
        const client = await useClients().addClient({ ...formData })
        console.log(client.id)

        Object.assign(formData, { surname: '', name: '', phone: '' })
        router.push(`/client/${client.id}`)

    } catch (error) {
        console.error('APP: Client not created', error)
        alert('Не удалось создать клиента')
    }
}
</script>

<template>
    <div class="modal fade" id="clientModal" tabindex="-1" aria-labelledby="clientModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <form @submit.prevent="handleSubmit" class="modal-content">
                <ModalHeader name="client">Создание / изменение клиента</ModalHeader>
                <div class="modal-body d-flex flex-column gap-3">
                    <TextInput v-model="formData.surname" id="surname" label="Фамилия" placeholder="Введите фамилию" required />
                    <TextInput v-model="formData.name" id="name" label="Имя" placeholder="Введите имя" required />
                    <PhoneInput v-model="formData.phone" id="phone" label="Телефон" placeholder="Введите телефон" required />
                </div>
                <ModalFooter />
            </form>
        </div>
    </div>
</template>
