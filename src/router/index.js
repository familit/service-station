import {createRouter, createWebHashHistory } from 'vue-router'

import SearchView from "../views/SearchView.vue";
import ClientCardView from "../views/ClientCardView.vue";

const routes = [
    { path: '/', component: SearchView },
    { path: '/client', component: ClientCardView }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
