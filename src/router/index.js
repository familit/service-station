import {createRouter, createWebHashHistory } from 'vue-router'

import SearchView from "../views/SearchView.vue";
import ClientCardView from "../views/ClientCardView.vue";
import CarsView from "../views/CarsView.vue";

const routes = [
    { path: '/', component: SearchView },
    { path: '/client', component: ClientCardView },
    { path: '/car', component: CarsView },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
