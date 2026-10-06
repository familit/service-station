<script setup>
import TextInput from "../Input/TextInput.vue";
import PhoneInput from "../Input/PhoneInput.vue";
import {onBeforeMount} from "vue";
import {useClients} from "../../composables/useClients";
import CardHeader from "./CardHeader.vue";
import CardBody from "./CardBody.vue";

const props = defineProps({
    id: { type: String, required: true },
})

const { client, findById, loading } = useClients()

onBeforeMount(async () => {
    await findById(props.id)
})
</script>
<template>
    <div class="card w-100">
        <CardHeader action="edit" modal="client">Информация о клиенте</CardHeader>
        <CardBody :status="loading" class="d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center justify-content-between gap-3 w-100">
            <TextInput id="surname" label="Фамилия" v-model="client.surname" readonly />
            <TextInput id="name" label="Имя" v-model="client.name" readonly />
            <PhoneInput id="phone" label="Телефон" v-model="client.phone" readonly />
        </CardBody>
    </div>
</template>
