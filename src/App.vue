<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { useProductsStore } from './stores/products.js';
import MainLayout from './layouts/MainLayout.vue';

onBeforeMount(async () => {
  const productsStore = useProductsStore();
  await productsStore.fetchProducts();
});
</script>
