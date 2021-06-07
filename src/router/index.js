import Vue from 'vue'
import VueRouter from 'vue-router'
import Productos from '../views/Productos'
import VistaProd from '../views/VistaProd'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/productos',
    name: 'Producto',
    component: Productos
  },
  {
    path: "/productos/:id",
    name: "pag-producto",
    component: VistaProd,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
