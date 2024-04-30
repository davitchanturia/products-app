<template>
  <div>
    <div v-if="cartStore.addedProducts.length === 0">
      At this moment you do not have any product in the cart.
      <router-link :to="{ name: 'list' }" class="text-blue-400 font-semibold"
        >Back to list</router-link
      >
    </div>
    <div v-else>
      <div
        v-for="product in cartStore.addedProducts"
        class="w-full border rounded-md px-2 py-1 flex gap-10 items-stretch mt-5 relative"
      >
        <img :src="product.item.image_one" class="w-32 h-32 object-cover" />

        <div class="flex flex-col justify-between pb-10 pt-4">
          <div class="flex gap-5">
            <div>{{ product.item.name }}</div>
            <div>{{ product.item.price }}$</div>
          </div>

          <div class="flex justify-between px-4 border rounded-md">
            <button
              @click="decreaseCountHandler(product)"
              class="w-7 h-7 flex justify-center"
            >
              -
            </button>
            <div class="w-7 h-7 flex justify-center">{{ product.count }}</div>
            <button
              @click="increaseCountHandler(product.item)"
              class="w-7 h-7 flex justify-center"
            >
              +
            </button>
          </div>
        </div>

        <button
          @click="deleteProductHandler(product.item.id)"
          class="absolute right-5 top-5"
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart';

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
