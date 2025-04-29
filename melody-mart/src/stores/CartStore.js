import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useCatalogueDataStore } from "./CatalogueDataStore";

export const useCartStore = defineStore("cart", () => {
  const catalogueDataStore = useCatalogueDataStore();
  const products = catalogueDataStore.catalogueOfProducts;

  const cart = ref([]);
  function addToCart(productToFind) {
    let foundProduct = products.find(
      (product) => product.instrumentName === productToFind
    );

    cart.value.push(foundProduct);
    updateCartValue();
  }

  const cartValue = computed(() => {
    return cart.value.reduce((sum, item) => sum + +item.price, 0);
  });

  const isCartEmpty = computed(() => cart.value.length === 0);

  const quantityInCart = computed(() => cart.value.length);

  function removeFromBasket(instrumentNameValue) {
    console.log(cart.value);
    const index = cart.value.findIndex(
      (item) => item.instrumentName === instrumentNameValue
    );
    if (index !== -1) {
      cart.value.splice(index, 1);
    }
    console.log(cart.value);
  }

  return {
    cart,
    cartValue,
    isCartEmpty,
    quantityInCart,
    addToCart,
    removeFromBasket,
  };
});
