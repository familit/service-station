export const METHOD_TYPES = {
    CREATE: 'create',
    UPDATE: 'update'
}
export const METHOD_VALUES = Object.values(METHOD_TYPES)
export const isValidMethod = (value) => METHOD_VALUES.includes(value)
