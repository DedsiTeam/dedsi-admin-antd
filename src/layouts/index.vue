<template>
<section id="layout-section">
    <section id="layout-left">
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

<script setup>
import './index.css';

import LayoutHeader from './header/index.vue';
import LayoutMenu from './menu/index.vue';
</script>