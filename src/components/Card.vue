<template>
  <div
    class="w-full max-w-96 max-h-80 border rounded-lg px-1 py-1 flex flex-col cursor-pointer col-span-1 mx-auto"
  >
    <img class="w-48 h-48 mx-auto" :src="product.image_one" />

    <div class="py-10 flex flex-col justify-center items-center">
      <div>{{ product.name }}</div>
      <div>{{ product.price }}$</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: Object,
});
</script>
