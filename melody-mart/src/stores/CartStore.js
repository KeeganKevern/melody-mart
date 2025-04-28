import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useCatalogueDataStore } from "./CatalogueDataStore";

export const useCartStore = defineStore("cart", () => {
  const catalogueDataStore = useCatalogueDataStore();
  const products = catalogueDataStore.catalogueOfProducts;

  const cart = ref([]);
  const cartValue = ref();
  function addToCart(productToFind) {
    let foundProduct = products.find(
      (product) => product.instrumentName === productToFind
    );

    cart.value.push(foundProduct);
    updateCartValue();
  }

  function updateCartValue() {
    cartValue.value = cart.value.reduce((sum, item) => sum + +item.price, 0);
  }

  const isCartEmpty = computed(() => cart.value.length === 0);

  return { cart, cartValue, isCartEmpty, addToCart };
});
