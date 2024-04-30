<template>
  <div
    class="max-w-96 max-h-52 border rounded-lg px-1 py-1 flex gap-5 cursor-pointer col-span-1"
  >
    <img class="w-48 h-48" :src="product.image_one" />

    <div class="py-10">
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
