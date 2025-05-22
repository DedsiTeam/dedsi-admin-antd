<template>
  <a-form :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
    <a-form-item label="用户名">
      <a-input v-model="fromData.account" placeholder="请输入用户名" />
    </a-form-item>
    <a-form-item label="密码">
      <a-input v-model="fromData.pwd" type="password" placeholder="请输入密码" />
    </a-form-item>
    <a-form-item :wrapper-col="{ offset: 4, span: 16 }">
      <a-button type="primary" @click="loginClick">登录</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const fromData = reactive({
  account: '',
  pwd: ''
})

function loginClick() {
  router.push('/')
}
</script>