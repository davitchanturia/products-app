import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getProducts } from '../services/products.js';

export const useProductsStore = defineStore('products', () => {
  const products = ref([]);

  const totalPages = ref();
  const currentPage = ref();

  const fetchProducts = async () => {
    const response = await getProducts();

    if (response.statusText === 'OK') {
      products.value = response.data.products;
      totalPages.value = response.data.totalPages;
      currentPage.value = response.data.currentPage;
    }
  };

  return { products, fetchProducts, totalPages, currentPage };
});
