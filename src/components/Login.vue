<template>
  <div>
    <button @click="login">登录</button>
  </div>
</template>
<script setup>
const login = () => {
  sessionStorage.setItem('user', 'tom')
}
</script>