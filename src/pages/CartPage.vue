<template>
  <div v-if="cartStore.addedProducts.length === 0">
    At this moment you do not have any product in the cart.
    <router-link :to="{ name: 'list' }" class="text-blue-400 font-semibold"
      >Back to list</router-link
    >
  </div>
  <div v-else>
    <ChoosenItem
      v-for="product in cartStore.addedProducts"
      :product
      @decreaseCount="(item) => decreaseCountHandler(item)"
      @increaseCount="(item) => increaseCountHandler(item)"
      @delete="(id) => deleteProductHandler(id)"
    />
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart.js';
import ChoosenItem from '../components/ChoosenItem.vue';

const cartStore = useCartStore();

const decreaseCountHandler = (product) => {
  if (product.count > 1) {
    cartStore.decreaseProductCount(product.item.id);
    return;
  }

  if (product.count === 1) {
    cartStore.deleteProduct(product.item.id);
  }
};

const increaseCountHandler = (item) => {
  cartStore.addNewProduct(item);
};

const deleteProductHandler = (itemId) => {
  cartStore.deleteProduct(itemId);
};
</script>
