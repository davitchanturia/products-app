<template>
  <div class="w-full h-screen">
    <div class="mx-auto w-full max-w-7xl mt-10 grid grid-cols-4 gap-4">
      <Card
        v-for="product in productsStore.products"
        :key="product.id"
        :product
      />
    </div>
  </div>
</template>

<script setup>
import Card from '../components/Card.vue';
import { useProductsStore } from '../stores/products.js';

const productsStore = useProductsStore();
</script>
