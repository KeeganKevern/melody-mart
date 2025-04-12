<template>
  <div>
    <h1>This is the shop</h1>
    <button @click="test">click</button>
    <SidebarContainer />
    <div class="flex flex-wrap gap-4 justify-center">
      <ProductCard
        v-for="product in catalogueDataStore.catalogueOfProducts"
        :instrumentName="product.instrumentName"
        :price="product.price"
        :imagePath="product.imagePath"
      />
    </div>
  </div>
</template>

<script setup>
import ProductCard from "@/components/shopviewcomponents/ProductCard.vue";
import SidebarContainer from "@/components/shopviewcomponents/SidebarContainer.vue";
import { useCatalogueDataStore } from "@/stores/CatalogueDataStore.js";

const catalogueDataStore = useCatalogueDataStore();
function test() {
  console.log(catalogueDataStore.filterableCategories);
}
</script>
