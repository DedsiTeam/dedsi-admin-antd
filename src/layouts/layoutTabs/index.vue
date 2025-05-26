<template>
    <section id="layout-tabs">
        <a-tabs v-model:activeKey="activeKey" type="card">
            <a-tab-pane v-bind:key="item" v-for="item in menuRouteDatas">
                <template #tab>
                    <span class="tab-title">{{ item }}</span>
                    <ReloadOutlined v-if="activeKey === item" :style="iconStyle" class="reload-icon" @click="iconReloadClick" />
                    <CloseOutlined v-if="menuRouteDatas.length > 1" :style="iconStyle" @click="iconCloseClick(item)" />
                </template>
            </a-tab-pane>
        </a-tabs>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ReloadOutlined, CloseOutlined } from '@ant-design/icons-vue';
import { menuRouteStores } from '@/pinias/public-api';

import { useRouter } from 'vue-router';
const router = useRouter();

const { menuRouteDatas, removeDatas } = menuRouteStores();
const activeKey = ref('/dashboard');


const iconStyle = {
    fontSize: '12px',
    marginLeft: '0.8rem',
    marginRight: '0',
    color: 'rgba(0, 0, 0, 0.6)',
};

function iconCloseClick(item: string) {
    removeDatas(item);
}

function iconReloadClick() {
    router.go(0);
}
</script>

<style scoped>
section#layout-tabs {
    width: 100%;
    height: 50px;
    padding: 0 1rem;
    overflow: hidden;
    background-color: #fff;
}
span.tab-title {
    font-size: 14px;
}
:deep(span.reload-icon:hover) {
    color: #1890ff !important;
}
</style>