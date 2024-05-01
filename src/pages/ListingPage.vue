<template>
  <div class="flex flex-col justify-between">
    <div
      class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <Card
        v-for="product in productsStore.products"
        :key="product.id"
        :product
        @click="router.push({ name: 'product', params: { id: product.id } })"
      />
    </div>

    <div class="mt-10">
      <ThePagination
        :totalPages="productsStore.totalPages"
        :currentPage="productsStore.currentPage"
      />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Card from '../components/Card.vue';
import { useProductsStore } from '../stores/products.js';
import ThePagination from '../components/ThePagination.vue';

const router = useRouter();

const productsStore = useProductsStore();
</script>
