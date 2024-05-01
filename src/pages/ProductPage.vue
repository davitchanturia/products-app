<template>
  <div v-if="loading" class="w-full h-screen flex justify-center items-center ">
      <IconLoading />
  </div>

  <div v-else-if="error">Product was not found</div>

  <div v-else>
    <router-link
      class="capitalize border rounded-lg p-3 flex gap-3 w-32 hover:bg-yellow-300 hover:text-blue-900 transition-all duration-300"
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

    <div
      class="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-20 mt-10"
    >
      <div>
        <div>name: {{ product?.name }}</div>
        <div>price: {{ product?.price }}$</div>
      </div>

      <div class="flex sm:items-center gap-5">
        <BaseButton @clicked="checkoutStore.addNewProduct(product)">
          buy
        </BaseButton>
        <div>OR</div>
        <BaseButton @clicked="cartStore.addNewProduct(product)">
          add to cart
        </BaseButton>
      </div>
    </div>

    <div class="flex flex-wrap gap-5 items-center mt-10">
      <img
        class="w-96 h-96 object-contain mx-auto"
        :src="product?.image_one"
      />
      <img
        v-if="product?.image_two"
        class="w-96 h-96 object-contain mx-auto"
        :src="product?.image_two"
      />
      <img
        v-if="product?.image_three"
        class="w-96 h-96 object-contain mx-auto"
        :src="product?.image_three"
      />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import BaseButton from '../components/BaseButton.vue';
import { ref, watch } from 'vue';
import { useCartStore } from '../stores/cart';
import { useCheckoutStore } from '../stores/checkout.js';
import { getProduct } from '../services/products.js';
import IconLoading from '../components/IconLoading.vue';

const route = useRoute();

const cartStore = useCartStore();
const checkoutStore = useCheckoutStore();

const props = defineProps({
  id: String,
});

const loading = ref(true)
const product = ref(null)
const error = ref(null)

watch(() => route.params.id, async (newVal, oldVal) => {
  loading.value = true
  try{
    const res = await getProduct(newVal);

    product.value = res.data
  }catch(error){
    error.value = error;
  }finally{
    setTimeout(() => {
      loading.value = false
    }, 1000)
  }

}, { immediate: true })
</script>
