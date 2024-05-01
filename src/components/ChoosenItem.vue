<template>
  <div
    class="w-full border rounded-md px-2 py-1 flex gap-10 items-stretch mt-5 relative"
  >
    <img
      @click="router.push({ name: 'product', params: { id: product.item.id } })"
      :src="product.item.image_one"
      class="w-32 h-32 object-cover cursor-pointer"
    />

    <div class="flex flex-col justify-between pb-10 pt-4">
      <div
        @click="
          router.push({ name: 'product', params: { id: product.item.id } })
        "
        class="flex gap-5 capitalize cursor-pointer"
      >
        <div>{{ product.item.name }}</div>
        <div>{{ product.item.price }}$</div>
      </div>

      <div
        v-if="showActions"
        class="flex justify-between px-4 border rounded-md max-w-32"
      >
        <button
          @click="$emit('decreaseCount', product)"
          class="w-7 h-7 flex justify-center"
        >
          -
        </button>
        <div class="w-7 h-7 flex justify-center">{{ product.count }}</div>
        <button
          @click="$emit('increaseCount', product.item)"
          class="w-7 h-7 flex justify-center"
        >
          +
        </button>
      </div>

      <div v-else>Quantity: {{ product.count }}x</div>
    </div>

    <button
      @click="$emit('delete', product.item.id)"
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
</template>

<script setup>
import { useRouter } from 'vue-router';

defineProps({
  product: Object,
  showActions: {
    type: Boolean,
    default: true,
  },
});

const router = useRouter();
</script>
