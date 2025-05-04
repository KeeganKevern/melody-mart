<template>
  <!--HEADER-->
  <header
    class="flex flex-col sticky top-0 w-full items-center justify-between bg-amber-900 text-white z-10"
  >
    <h1 class="text-4xl font-extrabold italic m-5">Melody-Mart</h1>
    <ThemeSlider class="absolute left-5 top-5" />

    <RouterLink to="/checkout">
      <BasketContainer
        class="absolute right-5 top-5"
        :quantityInCart="cartStore.quantityInCart"
    /></RouterLink>

    <nav class="flex justify-evenly w-full mb-5 text-xl md:text-2xl">
      <RouterLink to="/" :aria-current="route.path === '/' ? 'page' : null"
        >Home</RouterLink
      >
      <RouterLink
        to="/shop"
        :aria-current="route.path === '/shop' ? 'page' : null"
        >Shop</RouterLink
      >
      <RouterLink
        to="/contact"
        :aria-current="route.path === '/contact' ? 'page' : null"
        >Contact</RouterLink
      >
      <RouterLink
        to="/checkout"
        :aria-current="route.path === '/checkout' ? 'page' : null"
        >Checkout</RouterLink
      >
      <RouterLink to="/login">Login</RouterLink>
    </nav>
  </header>

  <!-- ROUTER VIEW -->
  <RouterView
    class="bg-[url(../assets/images/backgroundImage.png)] p-4 min-h-100 md:min-h-150"
  />
  <!-- FOOTER  -->
  <footer
    class="grid grid-cols-4 grid-rows-3 bg-amber-900 text-white font-bold z-10 md:pt-2"
  >
    <TheButton
      :imageClass="'size-12 ml-6'"
      :imageSrc="'../src/assets/icons/uparrow.svg'"
      @click="scrollToTop()"
    />

    <FooterSocialLinks />

    <RouterLink
      to="/checkout"
      class="col-start-4 flex justify-center items-center"
      :aria-current="route.path === '/checkout' ? 'page' : null"
    >
      <BasketContainer :quantityInCart="cartStore.quantityInCart"
    /></RouterLink>
    <p
      class="row-start-2 row-span-2 col-span-4 lg:col-span-2 lg:col-start-2 p-10 pt-0"
    >
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

<script setup>
import { RouterLink, RouterView } from "vue-router";
import ThemeSlider from "@/components/headercomponents/ThemeSlider.vue";
import BasketContainer from "@/components/headercomponents/BasketContainer.vue";
import TheButton from "@/components/universalcomponents/TheButton.vue";
import FooterSocialLinks from "@/components/headercomponents/FooterSocialLinks.vue";
//Animate on scroll
import "aos/dist/aos.css";
import AOS from "aos";
AOS.init();

import { useCartStore } from "./stores/CartStore";
const cartStore = useCartStore();

import { useRoute } from "vue-router";
const route = useRoute();

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>
