<template>
  <div>
    <router-link to='/home'>home</router-link> |
    <router-link to='/about'>about</router-link>
    | <router-link to='/product/1'>product1</router-link>
    | <router-link to='/product/2'>product2</router-link>
    <div>
      <button @click="addRoute">加载动态路由</button>
      <button @click="removeRoute">移除路由</button>
      <button @click="check">检查路由</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import Product from './components/Product.vue'
let remove
const router = useRouter()
const addRoute = () => {
  setTimeout(() => {
    remove = router.addRoute(
      { path: '/product/:id', name: 'product', component: Product, meta: { needVip: true } }
    )
    console.log('动态添加路由成功')
    console.log(router.getRoutes())
  }, 3000)
}
const removeRoute = () => {
  // router.removeRoute('product')
  remove()
}
const check = () => {
  console.log('all route', router.getRoutes())
  console.log('has route', router.hasRoute('product'))
}
</script>

<style scoped>
button + button {
  margin-left: 10px;
}
</style>
