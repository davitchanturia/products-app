import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const addedProducts = ref([]);

  const addNewProduct = (product) => {
    const index = addedProducts.value.findIndex(
      (element) => element.item.id === product.id
    );

    // when we do not have result
    if (index === -1) {
      addedProducts.value.push({
        item: product,
        count: 1,
      });
      return;
    }

    //when we have result
    addedProducts.value[index].count = addedProducts.value[index].count += 1;
  };

  const decreaseProductCount = (productId) => {
    const index = addedProducts.value.findIndex(
      (element) => element.item.id === productId
    );

    addedProducts.value[index].count = addedProducts.value[index].count -= 1;
  };

  const deleteProduct = (productId) => {
    const index = addedProducts.value.findIndex(
      (element) => element.item.id === productId
    );

    addedProducts.value.splice(index, 1);
  };

  const overallProductsCount = computed(() => {
    let count = 0;

    if (addedProducts.value.length > 0) {
      addedProducts.value.forEach((element) => (count += element.count));
    }

    return count;
  });

  return {
    addedProducts,
    addNewProduct,
    decreaseProductCount,
    deleteProduct,
    overallProductsCount,
  };
});
