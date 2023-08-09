import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Layout from '../components/Layout.vue'
import NotFound from '../components/NotFound.vue'


const nestedRoutes = [
  { path: 'home', component: Home },
  { path: 'about', component: About }
]

const routes = [
  { path: '/layout', component: Layout, children: nestedRoutes },
  { path: '/:matchPath(.*)*', component: NotFound }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router