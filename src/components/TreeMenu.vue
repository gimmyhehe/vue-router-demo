<template>
  <div>
    <span v-for="(item, index) in $route.params.treeMenu" :key="index">/{{item}}</span>
  </div>
</template>