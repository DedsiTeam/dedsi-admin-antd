<template>
    <AppName />
    <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        theme="dark"
        :items="menuData"
        @click="handleClick"
    />
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import AppName from "../appName/index.vue";
import { useRouter } from "vue-router";

import { menuRouteStores } from '@/pinias/public-api';
import{ menuData } from '@/configs/menu';

const menuRouteStore = menuRouteStores();
const router = useRouter();

watch(() => menuRouteStore.menuRouteSelected, (newVal) => {
    selectedKeys.value = [newVal as string];
    openKeys.value = [newVal as string];
});

const selectedKeys = ref<string[]>([]);
const openKeys = ref<string[]>([]);

function handleClick(e: any) {
    menuRouteStore.add(e.key);
    router.push(e.key);
}
</script>