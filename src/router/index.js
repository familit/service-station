import { createRouter, createWebHashHistory } from 'vue-router'

import SearchView from "../views/SearchView.vue";
import ClientCardView from "../views/ClientCardView.vue";
import VehicleView from "../views/VehicleView.vue";
import WorkOrderView from "../views/WorkOrderView.vue";

const routes = [
    { path: '/', name: "MainView", component: SearchView },
    { path: '/client/:id', name: "ClientView", component: ClientCardView },
    { path: '/client/:id/vehicle/', name: "VehiclesView", component: VehicleView },
    { path: '/client/:id/vehicle/:vehicleId', name: "VehicleView", component: VehicleView },
    { path: '/work-order', name: "WorkOrderView", component: WorkOrderView },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
