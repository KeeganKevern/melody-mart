<template>
  <div class="pt-12 min-h-dvh">
    <SidebarContainer />
    <router-link
      to="/product"
      class="flex flex-wrap gap-4 justify-center cursor-pointer"
    >
      <ProductCard
        @click="handleProductClick(product)"
        v-for="product in catalogueDataStore.productsToDisplay"
        :aria-label="`Product card showing ${instrumentName}`"
        :instrumentName="product.instrumentName"
        :price="product.price"
        :imagePath="product.imagePath"
        :cardClass="'md:max-w-1/3 lg:max-w-6/25  p-2 md:p-4 md:mx-12 lg:my-4 lg:shadow-lg'"
      />
    </router-link>
  </div>
</template>

<script setup>
import ProductCard from "@/components/shopviewcomponents/ProductCard.vue";
import SidebarContainer from "@/components/shopviewcomponents/SidebarContainer.vue";
import { useCatalogueDataStore } from "@/stores/CatalogueDataStore.js";

const catalogueDataStore = useCatalogueDataStore();
function handleProductClick(product) {
  catalogueDataStore.updateSelectedProduct(product);
}
</script>
