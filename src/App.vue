<template>
  <Suspense>
    <RouterView />

    <template #fallback>loading...</template>
  </Suspense>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { useProductsStore } from './stores/products.js';

onBeforeMount(async () => {
  const productsStore = useProductsStore();
  await productsStore.initialize();
});
</script>
