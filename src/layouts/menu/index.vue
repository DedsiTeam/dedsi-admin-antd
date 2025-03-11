<template>
    <AppName />
    <a-menu
        id="dddddd"
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        style="width: 200px"
        mode="inline"
        :items="menuItems"
        @click="handleClick"
    />
</template>
<script setup lang="ts">
import { ref } from "vue";
import AppName from "../appName/index.vue";

const menuItems = [
{
    key: '1',
    label: 'Option 1',
    title: 'Option 1',
  },
  {
    key: '2',
    label: 'Option 2',
    title: 'Option 2',
  },
  {
    key: '3',
    label: 'Option 3',
    title: 'Option 3',
  }
];
const selectedKeys = ref<string[]>([]);
const openKeys = ref<string[]>([]);

function handleClick(e) {
    console.log("click", e);
}
</script>