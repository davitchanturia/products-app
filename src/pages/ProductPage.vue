<template>
  <div v-if="(productResult === undefined) | (productResult === null)">
    provided id is incorrect
  </div>
  <div v-else>
    <router-link class="capitalize pl-20" :to="{ name: 'list' }"
      >go back</router-link
    >
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
      <img class="w-96 h-96 object-cover" :src="productResult?.image_one" />
      <img
        v-if="productResult?.image_two"
        class="w-96 h-96 object-cover"
        :src="productResult?.image_two"
      />
      <img
        v-if="productResult?.image_three"
        class="w-96 h-96 object-cover"
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
