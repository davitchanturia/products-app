<template>
  <div
    class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
  >
    <div class="flex flex-1 justify-between sm:hidden">
      <button
        @click="previousPageHandler"
        class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Previous
      </button>
      <button
        @click="nextPageHandler"
        class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Next
      </button>
    </div>
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <nav
          class="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <button
            @click="previousPageHandler"
            class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <IconLeft />
          </button>

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

          <button
            @click="nextPageHandler"
            class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <IconRight />
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from '../stores/products';
import IconLeft from './IconLeft.vue';
import IconRight from './IconRight.vue';

const props = defineProps({
  currentPage: Number | String,
  totalPages: Number | String,
});

const productsStore = useProductsStore();

const updateProductsData = (page) => {
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set('page', page);

  window.history.replaceState(null, null, '?' + urlParams.toString());

  productsStore.fetchProducts();
};

const changePageHandler = (page) => {
  if (props.currentPage === page) {
    return;
  }

  updateProductsData(page);
};

const nextPageHandler = () => {
  if (props.currentPage === props.totalPages) {
    return;
  }
  updateProductsData((props.currentPage += 1));
};

const previousPageHandler = () => {
  if (props.currentPage === 1) {
    return;
  }

  updateProductsData((props.currentPage -= 1));
};
</script>
