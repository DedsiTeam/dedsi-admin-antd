<template>
    <div class="header-component-div flex items-center justify-between h-full px-4">
        <div>
          <MenuUnfoldOutlined v-if="layoutStore.getCollapsed" @click="toggleCollapsedClick(false)" />
          <MenuFoldOutlined v-else @click="toggleCollapsedClick(true)" />
        </div>
        <div>
          <userInfo></userInfo>
        </div>
    </div>
</template>

<script setup lang="ts">
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';
import { useLayoutStore } from '@/pinias/public-api.ts'

import userInfo from '../userInfo/index.vue'

const layoutStore = useLayoutStore();

function toggleCollapsedClick(val: boolean) {
  layoutStore.setCollapsed(val)
}
</script>
<style scoped>
div.header-component-div {
  height: 50px;
}
div.header-component-div > div{
  height: 50px;
  display: flex;
  align-items: center;
}
</style>