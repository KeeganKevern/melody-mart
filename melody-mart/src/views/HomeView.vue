<script setup>
import Carousel from "@/components/homecomponents/carousel.vue";
import Testimonials from "@/components/homecomponents/testimonials.vue";
</script>

<template>
  <main>
    <h2
      class="text-center font-bold text-2xl lg:text-4xl text-white italic mix-blend-overlay cursor-default m-10 lg:m-20"
    >
      WELCOME TO MELODY-MART
    </h2>
    <div class="flex flex-col justify-around gap-20">
      <div class="m-4">
        <Carousel />
      </div>
      <router-link to="/contact">
        <Testimonials />
      </router-link>
    </div>
  </main>
</template>
