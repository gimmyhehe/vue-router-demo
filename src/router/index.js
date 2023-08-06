import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Product from '../components/Product.vue'
import Order from '../components/Order.vue'

const routes = [
  { path: '/home', component: About, sensitive: true },
  { path: '/about', component: Home },
  { path: '/:orderId(\\d+)+', component: Order },
  { path: '/:productName', component: Product },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router