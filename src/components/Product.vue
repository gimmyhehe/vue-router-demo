<template>
  <div>
    this is product page. product id is {{ $route.params.id }}  query is {{ JSON.stringify($route.query) }} hash is {{ $route.hash }}
  </div>
</template>