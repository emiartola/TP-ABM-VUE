import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/detalle/:id",
    name: "DetalleInstrumento",
    component: () => import("../views/DetalleInstrumento.vue"),
  },
  {
    path: "/productos",
    name: "ProductosItem",
    component: () => import("../views/ProductosItem.vue"),
  },
  {
    path: "/dondeEstamos",
    name: "DondeEstamos",
    component: () => import("../views/DondeEstamos.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router