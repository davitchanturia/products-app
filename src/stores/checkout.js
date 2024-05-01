import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCheckoutStore = defineStore('checkout', () => {
  const products = ref([]);

  const addNewProduct = (product) => {
    const index = products.value.findIndex(
      (element) => element.item.id === product.id
    );

    // when we do not have result
    if (index === -1) {
      products.value.push({
        item: product,
        count: 1,
      });
      return;
    }

    //when we have result
    products.value[index].count = products.value[index].count += 1;
  };

  const deleteProduct = (productId) => {
    const index = products.value.findIndex(
      (element) => element.item.id === productId
    );

    products.value.splice(index, 1);
  };

  const overallProductsCount = computed(() => {
    let count = 0;

    if (products.value.length > 0) {
      products.value.forEach((element) => (count += element.count));
    }

    return count;
  });

  return {
    products,
    addNewProduct,
    deleteProduct,
    overallProductsCount,
  };
});
