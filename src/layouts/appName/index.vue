<template>
    <div class="flex justify-center items-center h-60px font-bold color-white">
      <span v-if="layoutStore.getCollapsed">Dedsi</span>
      <span v-else>Dedsi ADMIN ANTD</span>
    </div>
</template>
<script setup lang="ts">
import { useLayoutStore } from '@/pinias/public-api.ts'

const layoutStore = useLayoutStore();
</script>