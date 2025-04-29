<template>
  <div class="flex flex-col gap-10 items-center">
    <emptyBasket v-if="cartStore.isCartEmpty" />
    <basket
      v-if="!cartEmpty"
      v-for="item in cart"
      :instrumentName="item.instrumentName"
      :instrumentPrice="item.price"
      :imagePath="item.imagePath"
    />
    <totalsFooter :totalCost="cartStore.cartValue" />
  </div>
</template>
<script setup>
import emptyBasket from "@/components/checkoutcomponents/emptyBasket.vue";
import basket from "@/components/checkoutcomponents/basket.vue";
import totalsFooter from "@/components/checkoutcomponents/totalsFooter.vue";
import { useCartStore } from "@/stores/CartStore";
import { ref } from "vue";
const cartStore = useCartStore();
const cart = ref(cartStore.cart);
</script>
