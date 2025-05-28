<template>
    <h1>Demo {{ route.path }}</h1>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
</script>