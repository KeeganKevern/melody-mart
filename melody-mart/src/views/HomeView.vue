<script setup>
import carousel from "@/components/homecomponents/carousel.vue";
import tesimonials from "@/components/homecomponents/tesimonials.vue";
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
        <carousel />
      </div>
      <tesimonials />
    </div>
  </main>
</template>
