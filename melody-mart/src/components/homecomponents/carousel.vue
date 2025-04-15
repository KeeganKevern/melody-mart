<template>
  <swiper
    :modules="[Autoplay, Pagination, Navigation]"
    :slidesPerView="1"
    :breakpoints="swiperBreakpoints"
    :spaceBetween="100"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: true,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
  >
    <swiper-slide
      v-for="product in catalogueDataStore.catalogueOfProducts"
      class="flex self-center shadow-2xl"
      :key="product.id"
    >
      <ProductCard
        :instrumentName="product.instrumentName"
        :price="product.price"
        :imagePath="product.imagePath"
        :imageClass="'max-h-3/4'"
        :cardClass="'p-8 !rounded-lg h-150'"
      />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import ProductCard from "../shopviewcomponents/ProductCard.vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useCatalogueDataStore } from "@/stores/CatalogueDataStore";
const catalogueDataStore = useCatalogueDataStore();
const swiperBreakpoints = {
  768: { slidesPerView: 2, spaceBetween: 50 },
  1080: { slidesPerView: 3, spaceBetween: 75 },
};
</script>
