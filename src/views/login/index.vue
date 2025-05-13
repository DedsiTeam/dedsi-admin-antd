<script setup lang="ts">

</script>

<template>
  <h1>这是个登录页面</h1>
  <a-button type="primary" @click="loginClick">登录</a-button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

function loginClick() {
  router.push('/')
}
</script>