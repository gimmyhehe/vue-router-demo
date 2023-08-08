import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Product from '../components/Product.vue'

const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/product/:id', component: Product, name: 'product' },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router