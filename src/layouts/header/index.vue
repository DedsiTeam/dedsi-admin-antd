<template>
    <div class="header-component-div flex items-center justify-between h-full px-4">
        <div>
          <MenuUnfoldOutlined v-if="collapsed" @click="toggleCollapsedClick" />
          <MenuFoldOutlined v-else @click="toggleCollapsedClick" />
        </div>
        <div>
          <userInfo></userInfo>
        </div>
    </div>
</template>

<script setup>
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';
import { ref } from "vue";
import { useLayoutStore } from '@/pinias/public-api.ts'

import userInfo from '../userInfo/index.vue'

const { setCollapsed } = useLayoutStore();

const collapsed = ref(false);
function toggleCollapsedClick(){
  collapsed.value = !collapsed.value;
  setCollapsed(collapsed.value)
}
</script>
<style scoped>
div.header-component-div {
  height: 60px;
}
div.header-component-div > div{
  height: 60px;
  display: flex;
  align-items: center;
}
</style>