<template>
  <a-dropdown>
    <div class="px-4 cursor-pointer flex items-center" id="userInfo-div">Cohen</div>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <SettingOutlined />
          个人设置
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item>
          <LogoutOutlined />
          退出登录
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script setup lang="ts">
import { SettingOutlined, LogoutOutlined } from '@ant-design/icons-vue'
</script>

<style scoped>
div#userInfo-div{
  height: 100%;
}
div#userInfo-div:hover {
  background-color: #f8f8f8;
}
</style>