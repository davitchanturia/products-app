<template>
  <div v-if="productsStore.loading" class="w-full h-screen flex justify-center items-center ">
    <IconLoading />
  </div>

  <div v-else class="flex flex-col justify-between">
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
import IconLoading from '../components/IconLoading.vue';

const router = useRouter();

const productsStore = useProductsStore();
</script>
