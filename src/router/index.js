import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Product from '../components/Product.vue'
import Order from '../components/Order.vue'
import TreeMenu from '../components/TreeMenu.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  { path: '/home', component: Home, sensitive: true },
  { path: '/about', component: About },
  { path: '/product/:id', component: Product },
  { path: '/product/:orderId(\\d+)', component: Order },
  { path: '/tree/:treeMenu+', component: TreeMenu },
  { path: '/:matchPath(.*)*', component: NotFound },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router