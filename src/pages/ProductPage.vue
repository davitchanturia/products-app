<template>
  <div
    v-if="(productResult === undefined) | (productResult === null)"
    class="w-full max-w-7xl mx-auto"
  >
    provided id is incorrect
  </div>
  <div v-else class="w-full max-w-7xl mx-auto">
    <router-link class="ml-20 capitalize" :to="{ name: 'list' }"
      >go back</router-link
    >
    <div class="flex items-center gap-20">
      <img
        class="w-80 h-80 object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqYmJ_G_0wyluD8zPfrKIiHgpQL74WY7Bwwz8FTFtZA&s"
      />

      <div>
        <div>{{ productResult?.name }}</div>
        <div>{{ productResult?.price }}$</div>
      </div>

      <div class="flex items-center gap-5">
        <BaseButton> buy </BaseButton>
        <div>OR</div>
        <BaseButton @clicked="cartStore.addNewProduct(productResult)">
          add to cart
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import BaseButton from '../components/BaseButton.vue';
import { useProductsStore } from '../stores/products.js';
import { computed } from 'vue';
import { useCartStore } from '../stores/cart';

const route = useRoute();

const productsStore = useProductsStore();
const cartStore = useCartStore();

const props = defineProps({
  id: String,
});

const productResult = computed(() => {
  return productsStore.products.find((item) => item.id === +route.params.id);
});
</script>
