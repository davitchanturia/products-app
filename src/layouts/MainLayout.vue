<template>
  <div class="w-full h-screen">
    <div class="bg-blue-800 h-10">
      <div
        class="w-full h-full max-w-7xl mx-auto flex justify-end items-center text-white capitalize"
      >
        <router-link :to="{ name: 'cart' }">cart</router-link>
      </div>
    </div>

    <main class="w-full max-w-7xl pt-10 mx-auto">
      <slot />
    </main>
  </div>
</template>
