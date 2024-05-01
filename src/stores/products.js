import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getProducts } from '../services/products.js';

export const useProductsStore = defineStore('products', () => {
  const products = ref([]);
  const loading = ref(false)

  const totalPages = ref();
  const currentPage = ref();

  const fetchProducts = async () => {
    loading.value = true;
    
    try {
      const response = await getProducts();

      if (response.statusText === 'OK') {
        products.value = response.data.products;
        totalPages.value = response.data.totalPages;
        currentPage.value = response.data.currentPage;
      }
    } catch (error) {
      throw new Error('something went wrong')
    }finally{
      setTimeout(() => {
        loading.value = false
      }, 500)
    }
    
  };

  return { products,loading, fetchProducts, totalPages, currentPage };
});
