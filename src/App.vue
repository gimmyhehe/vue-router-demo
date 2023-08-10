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

<style>
.router-box {
  width: 200px;
  height: 200px;
  color: #fff;
  background-color: blue;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
