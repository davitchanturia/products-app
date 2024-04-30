<template>
  <RouterView />
</template>

<script setup>
import { useProductsStore } from './stores/products.js';

const productsStore = useProductsStore();
productsStore.initialize();
</script>
