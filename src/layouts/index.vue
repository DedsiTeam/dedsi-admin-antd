<template>
<section id="layout-section">
    <section id="layout-left" :style="{ flex: layoutStore.getCollapsed ? '0 0 50px' : '0 0 200px' }">
      <LayoutMenu />
      <div id="LayoutMenu-bottom-div">
        <RightOutlined v-if="layoutStore.getCollapsed" @click="toggleCollapsedClick(false)" />
        <LeftOutlined v-else @click="toggleCollapsedClick(true)" />
      </div>
    </section>
    <section id="layout-right" :style="{ width: `calc(100dvw - ${layoutStore.getCollapsed ? '50px' : '200px'})` }">
        <section id="layout-header">
            <LayoutHeader />
        </section>
        <section id="layout-body">
          <LayoutTabs />
          <section id="layout-body-content">
            <router-view />
          </section>
        </section>
    </section>
</section>
</template>

<script setup lang="ts">
import { LeftOutlined, RightOutlined } from '@ant-design/icons-vue';

import './index.css';
import LayoutHeader from './header/index.vue';
import LayoutMenu from './menu/index.vue';
import LayoutTabs from './layoutTabs/index.vue'

import { useLayoutStore } from '@/pinias/public-api.ts'

const layoutStore = useLayoutStore();

function toggleCollapsedClick(val: boolean) {
  layoutStore.setCollapsed(val)
}
</script>