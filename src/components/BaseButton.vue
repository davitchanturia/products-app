<template>
  <button
    @click="$emit('clicked')"
    class="flex justify-between items-center px-7 py-1 rounded-md bg-yellow-300 text-blue-900 transition-all capitalize active:scale-95"
  >
    <slot>dssd</slot>
  </button>
</template>

<script setup>
defineEmits(['clicked']);
</script>
