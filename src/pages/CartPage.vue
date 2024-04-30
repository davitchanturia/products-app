<template>
  cart page
  <div v-for="item in cartStore.addedProducts">{{ item }}</div>
</template>

<script setup>
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore();
console.log(cartStore.addedProducts);
</script>
