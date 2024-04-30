<template>
  <div v-if="(productResult === undefined) | (productResult === null)">
    provided id is incorrect
  </div>
  <div v-else>
    <router-link
      class="capitalize ml-20 border rounded-lg p-3 flex gap-3 w-32 hover:bg-yellow-300 hover:text-blue-900 transition-all duration-300"
      :to="{ name: 'list' }"
    >
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>

      go back
    </router-link>

    <div class="flex items-center gap-20 mt-10 pl-20">
      <div>
        <div>name: {{ productResult?.name }}</div>
        <div>price: {{ productResult?.price }}$</div>
      </div>

      <div class="flex items-center gap-5">
        <BaseButton> buy </BaseButton>
        <div>OR</div>
        <BaseButton @clicked="cartStore.addNewProduct(productResult)">
          add to cart
        </BaseButton>
      </div>
    </div>

    <div class="flex gap-5 items-center mt-10">
      <img class="w-96 h-96 object-contain" :src="productResult?.image_one" />
      <img
        v-if="productResult?.image_two"
        class="w-96 h-96 object-contain"
        :src="productResult?.image_two"
      />
      <img
        v-if="productResult?.image_three"
        class="w-96 h-96 object-contain"
        :src="productResult?.image_three"
      />
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
