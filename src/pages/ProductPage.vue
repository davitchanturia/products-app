<template>
  <div class="w-full h-screen pt-10">
    <div class="w-full max-w-7xl mx-auto flex items-center gap-20">
      <img
        class="w-80 h-80 object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqYmJ_G_0wyluD8zPfrKIiHgpQL74WY7Bwwz8FTFtZA&s"
      />

      <div>
        <div>iphone 15</div>
        <div>2000$</div>
      </div>

      <div class="flex items-center gap-5">
        <BaseButton> buy </BaseButton>
        <div>OR</div>
        <BaseButton> add to cart </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from '../components/BaseButton.vue';
</script>
