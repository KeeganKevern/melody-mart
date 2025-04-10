<script setup>
import { RouterLink, RouterView } from "vue-router";
import ThemeSlider from "@/components/ThemeSlider.vue";
</script>

<template>
  <header class="flex flex-col items-center justify-between">
    <h1 class="text-4xl font-extrabold italic m-10">Melody-Mart</h1>
    <ThemeSlider class="fixed right-5 top-5" />

    <nav class="flex justify-evenly w-full">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/shop">Shop</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/checkout">Checkout</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
