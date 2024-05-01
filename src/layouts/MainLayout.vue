<template>
  <div class="w-full h-screen">
    <div class="bg-blue-800 w-full h-10 absolute top-0 left-0">
      <div
        class="w-full h-full max-w-7xl mx-auto flex justify-between items-center gap-4 text-white capitalize"
      >
        <router-link :to="{name: 'list'}">Home</router-link>

        <div class="flex gap-4">
          <router-link :to="{ name: 'checkout' }">checkout</router-link>

          <div class="w-[1px] h-6 bg-yellow-100"></div>
          <router-link :to="{ name: 'cart' }">
            <div class="relative">
            <IconCart />

            <div
              class="absolute -top-1 -right-1 flex justify-center items-center bg-red-600 w-4 h-4 rounded-full text-xs"
            >
              {{ cartStore.overallProductsCount }}
            </div>
            </div>
         </router-link>
        </div>
      </div>
    </div>

    <main class="w-full max-w-7xl pt-20 mx-auto px-8 xl:px-0">
      <slot />
    </main>
  </div>
</template>

<script setup>
import IconCart from '../components/IconCart.vue';
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore();
</script>
