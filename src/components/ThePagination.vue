<template>
  <div
    class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
  >
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <nav
          class="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <button
            v-for="page in totalPages"
            :key="page"
            @click="changePageHandler(page)"
            aria-current="page"
            :class="
              page === currentPage
                ? 'bg-blue-800 text-white'
                : 'bg-white text-blue-800 '
            "
            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:z-20"
          >
            {{ page }}
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from '../stores/products';

const props = defineProps({
  currentPage: Number | String,
  totalPages: Number | String,
});

const productsStore = useProductsStore();

const changePageHandler = (page) => {
  if (props.currentPage === page) {
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set('page', page);

  window.history.replaceState(null, null, '?' + urlParams.toString());

  productsStore.fetchProducts();
};
</script>
