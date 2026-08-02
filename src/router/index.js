import { createMemoryHistory, createRouter } from 'vue-router'

import SearchView from "../views/SearchView.vue";

const routes = [
    { path: '/', component: SearchView },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
