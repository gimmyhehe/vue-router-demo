import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'

const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition)
    return {
      top: 0,
      left: 100,
      behavior: 'smooth',
      // el: "#home-link",
    }

    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve({ left: 500, top: 500, behavior: 'smooth' })
    //   }, 3000)
    // })
  }
})

export default router