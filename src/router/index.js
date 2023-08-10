import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Login from '../components/Login.vue'

const routes = [
  { path: '/home', component: Home, sensitive: true,
  },
  { path: '/about', component: About },
  { path: '/Login', component: Login },
  { path: '/product/:id', component: () => {
    console.log('component resolved')
    return import('../components/Product.vue')
  }, name: 'product',
    beforeEnter() {
      console.log('route-beforeEnter')
    }
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(() => {
  console.log('global-beforeEach')
})

router.beforeResolve(() => {
  console.log('global-beforeResolve')
})

router.afterEach(() => {
  console.log('global-afterEach')
})

export default router