import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getProducts } from '../services/products.js';

export const useProductsStore = defineStore('products', () => {
  const products = ref([]);

  const initialize = async () => {
    const response = await getProducts();

    if (response.statusText === 'OK') {
      products.value = response.data;
    }
  };

  return { products, initialize };
});
