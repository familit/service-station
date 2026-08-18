import {createRouter, createWebHashHistory } from 'vue-router'

import SearchView from "../views/SearchView.vue";
import ClientCardView from "../views/ClientCardView.vue";
import VehicleView from "../views/VehicleView.vue";
import WorkOrderView from "../views/WorkOrderView.vue";

const routes = [
    { path: '/', component: SearchView },
    { path: '/client/:id', component: ClientCardView },
    { path: '/car', component: VehicleView },
    { path: '/work-order', component: WorkOrderView },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
