<template>
  <div>
    this is product page. product id is {{ $route.params.id }}  query is {{ JSON.stringify($route.query) }} hash is {{ $route.hash }}
  </div>
</template>
<script>
import { useRoute } from 'vue-router'
import { watch } from 'vue'
const getProductInfo = () => {
  console.log('get product info')
}
export default {
  mounted() {
    console.log(this.$route)
  },
  watch: {
    '$route.params.id'() {
      getProductInfo()
    }
  },
  setup() {
    const route = useRoute()
    watch(() => route.params.id, () => {
      getProductInfo()
    })
  }
}
</script>