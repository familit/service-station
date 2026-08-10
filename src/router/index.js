import {createRouter, createWebHashHistory } from 'vue-router'

import SearchView from "../views/SearchView.vue";
import ClientCardView from "../views/ClientCardView.vue";
import CarsView from "../views/CarsView.vue";
import WorkOrderView from "../views/WorkOrderView.vue";

const routes = [
    { path: '/', component: SearchView },
    { path: '/client', component: ClientCardView },
    { path: '/car', component: CarsView },
    { path: '/work-order', component: WorkOrderView },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
