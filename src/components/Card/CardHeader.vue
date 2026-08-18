<script setup>
import { onMounted, ref } from "vue";
import { ACTION, isValidAction } from "../../constants/card";

const props = defineProps({
    modal: {
        type: String,
        required: true,
    },
    action: {
        type: String,
        required: true,
        validator: isValidAction
    }
})

const image = ref(null)

onMounted(() => {
    if (props.action === ACTION.ADD) {
        image.value = 'bi bi-plus-circle-fill';
    }
    if (props.action === ACTION.EDIT) {
        image.value = "bi bi-pencil-square"
    }
})
</script>

<template>
    <div class="card-header d-flex align-items-center justify-content-between">
        <h5 class="h5"><slot></slot></h5>
        <button type="button" :class="'btn text-primary ' + image" data-bs-toggle="modal" :data-bs-target="'#' + modal + 'Modal'" />
    </div>
</template>
