import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/Layout.vue'
import NotFound from '../components/NotFound.vue'
import AboutHeader from '../components/about-page/Header.vue';
import AboutAside from '../components/about-page/Aside.vue';
import AboutMain from '../components/about-page/Main.vue';
import HomeHeader from '../components/home-page/Header.vue';
import HomeAside from '../components/home-page/Aside.vue';
import HomeMain from '../components/home-page/Main.vue';


const nestedRoutes = [
  { path: 'home', components: {
      aside: HomeAside,
      header: HomeHeader,
      default: HomeMain,
    } 
  },
  { path: 'about', components: {
      aside: AboutAside,
      header: AboutHeader,
      default: AboutMain,
    } 
  }
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