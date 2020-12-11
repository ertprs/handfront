import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Vendas from '../views/Vendas.vue'
import Pedidos from '../views/Pedidos.vue'
import Estoque from '../views/Estoque.vue'
import Suporte from '../views/Suporte.vue'

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
      titulo: "Handfull | Dashboard",
      tela: "Dashboard"
    }
  },
  {
    path: '/estoque',
    name: 'Estoque',
    component: Estoque,
    meta: {
      titulo: "Handfull | Estoque",
      tela: "Estoque"
    }
  },
  {
    path: '/suporte',
    name: 'Suporte',
    component: Suporte,
    meta: {
      titulo: "Handfull | Suporte",
      tela: "Suporte"
    }
  },
  {
    path: '/vendas',
    name: 'Vendas',
    component: Vendas,
    meta: {
      titulo: "Handfull | Vendas",
      tela: "Vendas"
    }
    
  },
  {
    path: '/pedidos',
    name: 'Pedidos',
    component: Pedidos,
    meta: {
      titulo: "Handfull | Pedidos",
      tela: "Pedidos"
    }
    
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
