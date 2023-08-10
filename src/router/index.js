import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Product from '../components/Product.vue'
import Login from '../components/Login.vue'

const routes = [
  { path: '/home', component: Home, sensitive: true },
  { path: '/about', component: About },
  { path: '/Login', component: Login },
  { path: '/product/:id', component: Product, name: 'product', meta: { needVip: true } }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router