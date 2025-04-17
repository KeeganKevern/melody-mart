<script setup>
import { RouterLink, RouterView } from "vue-router";
import ThemeSlider from "@/components/headercomponents/ThemeSlider.vue";

import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();
</script>

<template>
  <header
    class="flex flex-col sticky top-0 w-full items-center justify-between bg-amber-900 text-white z-10"
  >
    <h1 class="text-4xl font-extrabold italic m-5">Melody-Mart</h1>
    <ThemeSlider class="absolute left-5 top-5" />

    <nav class="flex justify-evenly w-full mb-5 text-xl md:text-2xl">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/shop">Shop</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/checkout">Checkout</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </nav>
  </header>

  <RouterView
    class="bg-[url(../assets/images/backgroundImage.png)] p-4 min-h-dvh"
  />

  <footer
    class="grid grid-cols-4 grid-rows-2 bg-amber-900 text-white font-bold z-10 min-h-50"
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
    <p class="row-start-2 col-span-4 lg:col-span-2 lg:col-start-2 p-10 pt-0">
      This website is for demonstration purposes only.
      <strong
        >No musical instruments are available for purchase through this
        site.</strong
      >
      The sole purpose of this project is to showcase technical skills in
      website development, including front-end design implimentation,
      interactivity, and user interface development. Any products displayed are
      not puchasable from this site, and are not intended for commercial use.
    </p>
  </footer>
</template>
