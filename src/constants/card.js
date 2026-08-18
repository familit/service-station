export const ACTION = {
    ADD: 'add',
    EDIT: 'edit',
}
export const isValidAction = (value) => ACTION[value] !== null
