<script setup>
import TextInput from "../Input/TextInput.vue";
import PhoneInput from "../Input/PhoneInput.vue";
import {onBeforeMount} from "vue";
import {useClients} from "../../composables/useClients";
import Loading from "../Loading.vue";
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
        <CardBody :status="loading">
            <TextInput id="surname" label="Фамилия" v-model="client.surname" readonly />
            <TextInput id="name" label="Имя" v-model="client.name" readonly />
            <PhoneInput id="phone" label="Телефон" v-model="client.phone" readonly />
        </CardBody>
    </div>
</template>
