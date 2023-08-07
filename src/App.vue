<script setup>
</script>

<template>
  <div>
    <router-link to='/home'>home</router-link> |
    <router-link to='/about'>about</router-link>
    <router-view v-slot="{ Component }">
      <transition mode="out-in" name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
    <!-- <router-view v-slot="{ Component, route }">
      <transition mode="out-in" :name="route.meta.transition">
        <component :is="Component" />
      </transition>
    </router-view> -->
  </div>
</template>

<style scoped>
</style>
