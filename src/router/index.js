import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'

const routes = [
  { path: '/home', component: Home, meta: { transition: 'fade' } },
  { path: '/about', component: About, meta: { transition: 'slide-fade' } }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router