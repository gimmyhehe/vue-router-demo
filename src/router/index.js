import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Layout from '../components/Layout.vue'
import NotFound from '../components/NotFound.vue'


const nestedRoutes = [
  { path: 'home', component: Home, meta: { needVip: false, other: {} } },
  { path: 'about', component: About }
]

const routes = [
  { path: '/layout', component: Layout, children: nestedRoutes, meta: { needVip: true, other: { test: 'test' } } },
  { path: '/:matchPath(.*)*', component: NotFound }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from) => {
  // console.log(to.matched)
  console.log('to.meta', to.meta)
  console.log('from.meta', from.meta)
})

export default router