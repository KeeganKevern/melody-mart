<template>
  <div
    class="flex justify-center p-10 md:p-20 bg-[url(../assets/images/backgroundImage.png)]"
  >
    <ProductCard
      class="md:w-150 p-10"
      :instrumentName="catalogueDataStore.selectedProduct.instrumentName"
      :price="catalogueDataStore.selectedProduct.price"
      :imagePath="catalogueDataStore.selectedProduct.imagePath"
    />
  </div>

  <div class="w-full bg-gray-100 px-10 py-12">
    <h2 class="text-2xl font-semibold mb-6 text-center">Customer Reviews</h2>
    <div class="space-y-6 max-w-4xl mx-auto">
      <div
        v-for="(review, index) in testimonialsStore.reviewData"
        :key="index"
        class="bg-white p-6 rounded-xl shadow hover:bg-amber-200"
      >
        <p class="text-lg font-medium">
          {{ review.title }}
        </p>
        <div class="flex justify-between text-2xl">
          <p class="text-gray-600 italic mb-1">
            Rating: {{ review.rating }} / 5
          </p>
          <p class="text-gray-600 italic mb-1">— {{ review.name }}</p>
        </div>

        <p class="text-gray-700">{{ review.comment }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCard from "@/components/shopviewcomponents/ProductCard.vue";
import { useCatalogueDataStore } from "@/stores/CatalogueDataStore";
const catalogueDataStore = useCatalogueDataStore();
import { useTestimonialsStore } from "@/stores/testimonialsStore";
const testimonialsStore = useTestimonialsStore();
</script>
