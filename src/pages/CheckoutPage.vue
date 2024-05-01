<template>
  <div v-if="checkoutStore.products.length === 0">
    At this moment you do not have any product in the checkout list.
    <router-link :to="{ name: 'list' }" class="text-blue-400 font-semibold"
      >Back to list</router-link
    >
  </div>

  <div v-else>
    <div>
      You have {{ checkoutStore.overallProductsCount }} items in your checkout
      list.
    </div>

    <ChoosenItem
      v-for="product in checkoutStore.products"
      :product
      @delete="(id) => deleteProductHandler(id)"
      :showActions="false"
    />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useCheckoutStore } from '../stores/checkout.js';
import ChoosenItem from '../components/ChoosenItem.vue';

const router = useRouter();

const checkoutStore = useCheckoutStore();

const deleteProductHandler = (itemId) => {
  checkoutStore.deleteProduct(itemId);
};
</script>
