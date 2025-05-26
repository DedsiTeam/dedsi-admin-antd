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
import { ref } from "vue";
import AppName from "../appName/index.vue";

import { menuRouteStores } from '@/pinias/public-api';

const { addDatas } = menuRouteStores();


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
    children: [
      {
        key: '2-3-1',
        label: 'Option 2-3-1',
        title: 'Option 2-3-1',
      },
      {
        key: '2-3-2',
        label: 'Option 2-3-2',
        title: 'Option 2-3-2',
        children: [
          {
            key: '2-3-2-1',
            label: 'Option 2-3-2-1',
            title: 'Option 2-3-2-1',
          },
          {
            key: '2-3-2-2',
            label: 'Option 2-3-2-2',
            title: 'Option 2-3-2-2',
          },
        ]
      },
    ]
  },
  {
    key: '3',
    label: 'Option 3',
    title: 'Option 3',
    children: [
      {
        key: '3-3-2-1',
        label: 'Option 3-3-2-1',
        title: 'Option 3-3-2-1',
      },
      {
        key: '3-3-2-2',
        label: 'Option 3-3-2-2',
        title: 'Option 3-3-2-2',
      },
    ]
  }
];
const selectedKeys = ref<string[]>([]);
const openKeys = ref<string[]>([]);

function handleClick(e: any) {
    addDatas(e.key);
}
</script>