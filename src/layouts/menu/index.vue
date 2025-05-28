<template>
    <AppName />
    <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        theme="dark"
        :items="menuItems"
        @click="handleClick"
    />
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import AppName from "../appName/index.vue";
import { useRouter } from "vue-router";

import { menuRouteStores } from '@/pinias/public-api';

const menuRouteStore = menuRouteStores();
const router = useRouter();

watch(() => menuRouteStore.menuRouteSelected, (newVal) => {
    selectedKeys.value = [newVal as string];
    openKeys.value = [newVal as string];
});

const menuItems = [
{
    key: '/dashboard',
    label: 'dashboard',
    title: 'dashboard',
  },
  {
    key: '/demo/1',
    label: 'demo 1',
    title: 'demo 1',
  },
  {
    key: '/demo/12',
    label: 'demo 12',
    title: 'demo 12',
  },
  {
    key: '/demo/123',
    label: 'demo 123',
    title: 'demo 123',
  },
  {
    key: '/demo/1345',
    label: 'demo 1345',
    title: 'demo 1345',
  }
];
const selectedKeys = ref<string[]>([]);
const openKeys = ref<string[]>([]);

function handleClick(e: any) {
    menuRouteStore.add(e.key);
    router.push(e.key);
}
</script>