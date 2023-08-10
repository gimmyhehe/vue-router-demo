<template>
  <div>
    this is product page. product id is {{ $route.params.id }}  query is {{ JSON.stringify($route.query) }} hash is {{ $route.hash }}
  </div>
</template>
<script>
// import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
export default {
  data() {
    return {
      name: 'product'
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('component-beforeRouteEnter')
    next((vm) => {
      console.log('vm.name', vm.name)
    })
    // next('/')
  },
  beforeRouteUpdate() {
    console.log('component-beforeRouteUpdate')
  },
  beforeRouteLeave() {
    console.log('component-beforeRouteLeave')
  },
  setup() {
    console.log('setup')
  },
  created() {
    console.log('created')
  },
  mounted() {
    console.log('mounted')
  },
  unmounted() {
    console.log('unmounted')
  }
}
</script>