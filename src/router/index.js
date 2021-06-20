import Vue from 'vue'
import VueRouter from 'vue-router'
import Productos from '../views/Productos'
import VistaProd from '../views/VistaProd'
import VistaCarrito from '../views/VistaCarrito'
import VistaAgregarProducto from '../views/VistaAgregarProducto'
import VistaActivarProductos from '../views/VistaActivarProductos'
import VistaAgregarCategoria from '../views/VistaAgregarCategoria'
import VistaPago from '../views/VistaPago'

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
    path:'/',
    name: 'Producto',
    component: Productos
  },
  {
    path: "/productos/:id",
    name: "pag-producto",
    component: VistaProd,
    props: true
  },
  {
    path: "/carrito",
    name: "pag-carrito",
    component: VistaCarrito,
    props: true
  },
  {
    path: "/agregar-producto",
    name: "pag-agregar-prod",
    component: VistaAgregarProducto,
  },
  {
    path:"/agregar-categoria",
    name: "agregar-cat",
    component: VistaAgregarCategoria,
    props:true
  },
  {
    path: "/editar-producto/:id",
    name: "pag-editar-prod",
    component: VistaAgregarProducto,
    props: true
  },
  {
    path: "/pago",
    name: "pag-pago",
    component: VistaPago,
    props:true
  },
  {
    path: "/activar-prods",
    name: "activar-prods",
    component: VistaActivarProductos,
    props:true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
