<template>
    <section id="layout-tabs">
        <a-tabs v-model:activeKey="activeKey" type="card" @change="tabChange">
            <a-tab-pane v-bind:key="item" v-for="item in menuRouteStore.menuRouteDatas">
                <template #tab>
                    <span class="tab-title">{{ item }}</span>
                    <ReloadOutlined v-if="activeKey === item" :style="iconStyle" class="reload-icon" @click="iconReloadClick" />
                    <CloseOutlined v-if="menuRouteStore.menuRouteDatas.length > 1" :style="iconStyle" @click="iconCloseClick($event, item)" />
                </template>
            </a-tab-pane>
        </a-tabs>
    </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { ReloadOutlined, CloseOutlined } from '@ant-design/icons-vue';
import { menuRouteStores } from '@/pinias/public-api';

import { useRouter } from 'vue-router';
const router = useRouter();

const menuRouteStore = menuRouteStores();
const activeKey = ref('');
watch(() => menuRouteStore.menuRouteSelected, (newVal) => {
    activeKey.value = newVal as string;
}, { immediate: true });


const iconStyle = {
    fontSize: '12px',
    marginLeft: '0.8rem',
    marginRight: '0',
    color: 'rgba(0, 0, 0, 0.6)',
};

function iconCloseClick(event: any, item: string) {
    event.stopPropagation();
    menuRouteStore.delete(item);
}

function iconReloadClick() {
    router.go(0);
}

function tabChange(key: string) {
    menuRouteStore.setMenuRouteSelected(key);
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