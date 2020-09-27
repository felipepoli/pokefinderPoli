import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "inicio" */ '../views/Inicio.vue')
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon',
    component: () => import(/* webpackChunkName: "pokemon" */ '../views/Pokemon.vue')
  },
  {
    path: '/results',
    name: 'results',
    component: () => import(/* webpackChunkName: "pokemon" */ '../views/Results.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
