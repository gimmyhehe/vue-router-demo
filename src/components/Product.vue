<template>
  <div>
    this is product page. product id is {{ $route.params.id }}  query is {{ JSON.stringify($route.query) }} hash is {{ $route.hash }}
  </div>
</template>
<script setup>
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import {  onMounted, onCreated } from 'vue';
// onBeforeRouteEnter(() => {
//   console.log('component-onBeforeRouteEnter')
// })
onBeforeRouteUpdate(() => {
  console.log('component-onBeforeRouteUpdate')
})
onBeforeRouteLeave(() => {
  console.log('component-onBeforeRouteLeave')
})

onCreated(() => {
  console.log('onCreated')
})
onMounted(() => {
  console.log('onMounted')
})

</script>