<template>
  <div class="flex flex-col justify-between">
    <div class="grid grid-cols-4 gap-4">
      <Card
        v-for="product in productsStore.products"
        :key="product.id"
        :product
        @click="router.push({ name: 'product', params: { id: product.id } })"
      />
    </div>

    <div class="mt-10">pagination goes here</div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Card from '../components/Card.vue';
import { useProductsStore } from '../stores/products.js';

const router = useRouter();

const productsStore = useProductsStore();
</script>
