<template>
  <div class="w-full h-screen">
    <div class="mx-auto w-full max-w-7xl mt-10 grid grid-cols-4 gap-4">
      <Card
        v-for="product in productsStore.products"
        :key="product.id"
        :product
        @click="router.push({ name: 'product', params: { id: product.id } })"
      />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Card from '../components/Card.vue';
import { useProductsStore } from '../stores/products.js';

const router = useRouter();

const productsStore = useProductsStore();
</script>
