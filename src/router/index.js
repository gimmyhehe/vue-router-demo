import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  { path: '/home', component: Home, sensitive: true },
  { path: '/about', component: About, name: 'about' },
  { path: '/:matchPath(.*)*', component: NotFound },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

const authGuard = (to, from) => {
  console.log('auth-guard')
  const isVip = sessionStorage.getItem('isVip') === 'true'
  if (to.meta.needVip && !isVip) {
    alert('不是vip 请充值！！！')
    return false
  }
}

router.beforeEach(authGuard)

export default router