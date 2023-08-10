<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const jumpToProduct2 = () => {
      router.push({ path: '/product/2' })
    }
    const replace = () => {
      router.replace({ path: '/home', query: { flag: 'replace' } })
      // router.replace({ name: 'product', params: { id: '123/%' }, query: { flag: 'replace' } })
    }
    const forward = () => {
      router.go(1)
    }
    const back = () => {
      router.go(-1)
    }
    const forward100 = () => {
      router.go(100)
    }
    const back100 = () => {
      router.go(-100)
    }
    const jumpNameRoute = () => {
      router.push({ name: 'product', params: { id: 123 } })
      // router.push({ path: '/product', params: { id: 123 } })
    }
    return {
      jumpToProduct2,
      replace,
      forward,
      forward100,
      back,
      back100,
      jumpNameRoute
    }
  },
  methods: {
    jumpToProduct1() {
      this.$router.push('/product/1')
    }
  },
}
</script>

<template>
  <div>
    <router-link to='/home'>home</router-link> |
    <router-link to='/about'>about</router-link>
    <div>
      <button @click="jumpToProduct1">Product1</button>
      <button @click="jumpToProduct2">Product2</button>
      <button @click="replace">replace</button>
      <button @click="forward">forward</button>
      <button @click="back">back</button>
      <button @click="forward100">forward100</button>
      <button @click="back100">back100</button>
      <!-- <button @click="jumpNameRoute">jumpNameRoute</button> -->

    </div>

    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
