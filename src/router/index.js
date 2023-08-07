import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Single from '../components/Single.vue'

const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/single', component: Single }
  // { path: '/home', component: () => import('../components/Home.vue') },
  // { path: '/about', component: () => import('../components/About.vue') },
  // { path: '/single', component: () => import('../components/Single.vue') }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router