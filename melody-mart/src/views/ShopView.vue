<template>
  <div class="pt-12">
    <SidebarContainer />
    <div class="flex flex-wrap gap-4 justify-center">
      <ProductCard
        v-for="product in catalogueDataStore.productsToDisplay"
        :instrumentName="product.instrumentName"
        :price="product.price"
        :imagePath="product.imagePath"
        :cardClass="'md:max-w-1/3 lg:max-w-1/4  p-2 md:p-4 md:mx-12 lg:my-4 lg:shadow-lg'"
      />
    </div>
  </div>
</template>

<script setup>
import ProductCard from "@/components/shopviewcomponents/ProductCard.vue";
import SidebarContainer from "@/components/shopviewcomponents/SidebarContainer.vue";
import { useCatalogueDataStore } from "@/stores/CatalogueDataStore.js";

const catalogueDataStore = useCatalogueDataStore();
</script>
