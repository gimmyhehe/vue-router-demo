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

const loginGuard = (to, from) => {
  console.log('login-guard', 'to:', to, 'from:', from)
  // 返回 false 以取消导航
  const user = sessionStorage.getItem('user')
  if (!user && to.path !== '/login') {
    return '/login'
    // return false
  }
}

const authGuard = (to, from) => {
  console.log('auth-guard')
  const isVip = sessionStorage.getItem('isVip') === 'true'
  if (to.meta.needVip && !isVip) {
    alert('不是vip 请充值！！！')
    return false
  }
}

router.beforeEach(loginGuard)

router.beforeEach(authGuard)

export default router