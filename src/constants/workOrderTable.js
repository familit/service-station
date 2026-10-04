export const WORKS_FIELDS = [
    { key: 'name',     label: 'Работа', placeholder: 'Название работы', type: 'text' },
    { key: 'quantity', label: 'Кол-во', placeholder: '1',               type: 'number', default: 1 },
    { key: 'cost',     label: 'Цена',   placeholder: '0.00',            type: 'number', default: 0, attrs: { step: '0.01' } }
]

export const WORKS_COLUMNS = [
    { key: 'name',     label: 'Наименование работ' },
    { key: 'quantity', label: 'Кол-во' },
    { key: 'cost',     label: 'Цена' },
    { key: 'sum',      label: 'Сумма', align: 'end', format: v => (v || 0).toFixed(2) }
]

export const PARTS_FIELDS = [
    { key: 'name',     label: 'Запчасть', placeholder: 'Название', type: 'text' },
    { key: 'quantity', label: 'Кол-во',   placeholder: '1',        type: 'number', default: 1 },
    { key: 'cost',     label: 'Цена',     placeholder: '0.00',     type: 'number', default: 0, attrs: { step: '0.01' } }
]

export const PARTS_COLUMNS = [
    { key: 'name',     label: 'Наименование' },
    { key: 'quantity', label: 'Кол-во' },
    { key: 'cost',     label: 'Цена' },
    { key: 'sum',      label: 'Сумма', align: 'end', format: v => (v || 0).toFixed(2) }
]
