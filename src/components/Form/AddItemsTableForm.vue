<script setup>
import { ref } from "vue";
import TextInput from "../Input/TextInput.vue";
import NumberInput from "../Input/NumberInput.vue";
import Button from "../Modal/Button.vue";

const items = defineModel({ type: Array, default: () => [] })
const props = defineProps({
    fields: { type: Array, required: true },
    columns: { type: Array, required: true },
    title: { type: String, default: '' },
    emptyText: { type: String, default: 'Элементы не добавлены' },
    alertText: { type: String, default: 'Заполните обязательные поля' },
    requiredKey: { type: String, default: 'name' }
})

const buildEmpty = () => {
    const d = {}
    props.fields.forEach(f => {
        d[f.key] = f.default ?? (f.type === 'number' ? 0 : '')
    })
    return d
}

const draft = ref(buildEmpty())

const updateField = (key, value) => {
    draft.value = { ...draft.value, [key]: value }
}

const addRow = () => {
    if (props.requiredKey && !draft.value[props.requiredKey]) {
        alert(props.alertText)
        return
    }

    const quantity = Number(draft.value.quantity) || 1
    const cost = Number(draft.value.cost) || 0

    items.value.push({
        ...draft.value,
        sum: quantity * cost
    })

    draft.value = buildEmpty()
}

const removeRow = (i) => items.value.splice(i, 1)
const total = () => items.value.reduce((s, r) => s + (r.sum || 0), 0)
const inputComponent = (type) => (type === 'number' ? NumberInput : TextInput)
</script>

<template>
    <h6 v-if="title" class="mb-2">{{ title }}</h6>

    <div class="table-responsive">
        <table class="table align-middle">
            <thead class="table-light">
                <tr>
                    <th v-for="col in columns" :key="col.key" :class="col.align ? `text-${col.align}` : ''">
                        {{ col.label }}
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="!items.length">
                    <td :colspan="columns.length + 1" class="text-center text-muted py-3">
                        {{ emptyText }}
                    </td>
                </tr>
                <tr v-for="(row, i) in items" :key="i">
                    <td v-for="col in columns" :key="col.key" :class="col.align ? `text-${col.align}` : ''">
                        {{ col.format ? col.format(row[col.key], row) : row[col.key] }}
                    </td>
                    <td class="text-end">
                        <button type="button" class="btn btn-sm btn-outline-danger" @click="removeRow(i)">
                            <i class="bi bi-x" />
                        </button>
                    </td>
                </tr>
            </tbody>
            <tfoot v-if="items.length">
                <tr>
                    <td :colspan="columns.length - 1" class="text-end"><strong>Итого:</strong></td>
                    <td class="text-end"><strong>{{ total().toFixed(2) }}</strong></td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    </div>
    <div class="d-flex flex-column flex-md-row flex-wrap align-items-stretch align-items-md-end gap-3 w-100 mb-3">
        <template v-for="field in fields" :key="field.key">
            <component class="flex-grow-1 min-w-0" :is="inputComponent(field.type || 'text')" :id="field.key" :label="field.label"
                :placeholder="field.placeholder" :model-value="draft[field.key]"
                @update:model-value="updateField(field.key, $event)" v-bind="field.attrs || {}"
            />
        </template>

        <Button @click="addRow" />
    </div>
</template>
