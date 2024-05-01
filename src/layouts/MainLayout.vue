<template>
  <div class="w-full h-screen">
    <div class="bg-blue-800 w-full h-10 absolute top-0 left-0">
      <div
        class="w-full h-full max-w-7xl mx-auto flex justify-end items-center gap-4 text-white capitalize"
      >
        <router-link :to="{ name: 'checkout' }">checkout</router-link>
        <router-link :to="{ name: 'cart' }">
          <div class="relative">
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
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>

            <div
              class="absolute -top-1 -right-1 flex justify-center items-center bg-red-600 w-4 h-4 rounded-full text-xs"
            >
              {{ cartStore.overallProductsCount }}
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <main class="w-full max-w-7xl pt-20 mx-auto px-8 xl:px-0">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore();
</script>
