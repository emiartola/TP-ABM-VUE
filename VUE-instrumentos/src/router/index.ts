import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'homeView',
    component: HomeView
  },
  {
    path: "/detalle/:id",
    name: "DetalleInstrumento",
    component: () => import("../views/DetalleInstrumento.vue")
  },
  {
    path: "/where",
    name: "DondeEstamos",
    component: () => import("../views/DondeEstamos.vue")
  },
  {
    path: "/productos",
    name: "Productos",
    component: () => import("../views/ProductosItem.vue")
  },
  {
    path: "/grilla",
    name: "GrillaInstrumentos",
    component: () => import("../views/GrillaInstrumentos.vue")
  },
  {
    path: "/formulario/:id",
    name: "FormularioInstrumento",
    component: () => import("../views/FormularioInstrumento.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router