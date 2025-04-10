<script setup>
import { RouterLink, RouterView } from "vue-router";
import ThemeSlider from "@/components/headercomponents/ThemeSlider.vue";
</script>

<template>
  <header
    class="flex flex-col sticky top-0 w-full items-center justify-between bg-amber-900 text-white"
  >
    <h1 class="text-4xl font-extrabold italic m-5">Melody-Mart</h1>
    <ThemeSlider class="absolute left-5 top-5" />

    <nav class="flex justify-evenly w-full mb-5">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/shop" class="">Shop</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/checkout">Checkout</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </nav>
  </header>

  <RouterView class="bg-[url(../assets/images/backgroundImage.png)] p-4" />

  <footer
    class="grid grid-cols-4 grid-rows-2 bg-amber-900 text-white font-bold"
  >
    <button>Back to top</button>
    <div class="col-span-2 flex gap-2 justify-center items-center">
      <p>icon</p>
      <p>icon</p>
      <p>icon</p>
    </div>

    <RouterLink
      to="/checkout"
      class="col-start-4 flex justify-center items-center"
      >Checkout</RouterLink
    >
    <p class="row-start-2 col-span-4">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, id
      dolorum cupiditate dolor officiis provident fuga nesciunt beatae porro est
      nostrum blanditiis velit, eum, quis illum voluptates. Ex, consequuntur
      quaerat.
    </p>
  </footer>
</template>
