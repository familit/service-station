<script setup>
import Button from "../Modal/Button.vue";
import TextInput from "../Input/TextInput.vue";
import PhoneInput from "../Input/PhoneInput.vue";
import {onBeforeMount} from "vue";
import {useClients} from "../../composables/useClients";
import Loading from "../Loading.vue";

const props = defineProps({
    id: { type: String, required: true },
})

const { client, findById } = useClients()

onBeforeMount(async () => {
    await findById(props.id)
})
</script>
<template>
  <div class="card w-100">
    <div class="card-header d-flex align-items-center justify-content-between">
      <h5 class="h5">Информация о клиенте</h5>
      <Button modal="client" image="bi bi-pencil-square" />
    </div>
    <div v-if="client" class="card-body d-flex flex-row align-items-center justify-content-between gap-5">
      <TextInput id="surname" label="Фамилия" v-model="client.surname" readonly />
      <TextInput id="name" label="Имя" v-model="client.name" readonly />
      <PhoneInput id="phone" label="Телефон" v-model="client.phone" readonly />
    </div>
      <div v-else class="card-body d-flex flex-row align-items-center justify-content-center gap-5">
          <Loading />
      </div>
  </div>
</template>
