<template>
<section id="layout-section">
    <section id="layout-left" :style="{ width: headerCollapsed ? '50px' : '200px' }">
        <LayoutMenu />
    </section>
    <section id="layout-right">
        <section id="layout-header">
            <LayoutHeader />
        </section>
        <section id="layout-body">
            <section id="layout-body-content">
                <router-view />
            </section>
        </section>
    </section>
</section>
</template>

<script setup lang="ts">
import './index.css';

import LayoutHeader from './header/index.vue';
import LayoutMenu from './menu/index.vue';

import { computed } from "vue";

import { useLayoutStore } from '@/pinias/public-api.ts'

const layoutStore = useLayoutStore();

const headerCollapsed = computed(() => layoutStore.getCollapsed)
</script>