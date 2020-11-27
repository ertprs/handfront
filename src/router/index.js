import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Vendas from '../views/Vendas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      titulo: "Handfull | Login"
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      titulo: "Handfull | Dashboard"
    }
  },
  {
    path: '/estoque',
    name: 'Estoque',
    component: Dashboard,
    meta: {
      titulo: "Handfull | Estoque"
    }
  },
  {
    path: '/suporte',
    name: 'Suporte',
    component: Dashboard,
    meta: {
      titulo: "Handfull | Suporte"
    }
  },
  {
    path: '/vendas',
    name: 'Vendas',
    component: Vendas,
    meta: {
      titulo: "Handfull | Vendas"
    }
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
