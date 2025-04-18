<template>
  <div
    class="flex flex-col justify-between just text-center bg-white border-2 border-gray-200 rounded-sm opacity-100"
    :class="cardClass"
  >
    <img
      :src="imagePath"
      alt="A Picture of an instrument"
      class="flex self-center"
      :class="imageClass"
    />
    <div class="row-start-2 flex flex-col justify-end gap-2">
      <h2 class="text-2xl font-bold italic">{{ instrumentName }}</h2>
      <p class="text-xl font-medium">£{{ price }}</p>

      <TheButton
        @click="handleClick(instrumentName)"
        :buttonText="'Add to Cart'"
        class="p-2 border-2 border-emerald-600 hover:bg-emerald-600 hover:text-white hover:font-bold transition rounded-md cursor-pointer h"
      />
    </div>
  </div>
</template>
<script setup>
import TheButton from "../universalcomponents/TheButton.vue";
import { useCartStore } from "@/stores/CartStore";
const cartStore = useCartStore();
defineProps({
  instrumentName: { type: String, required: true },
  price: { type: Number, required: true },
  imagePath: { type: String, required: true },
  cardClass: { type: String, required: true },
  imageClass: { type: String, required: true },
});
function handleClick(instrumentName) {
  cartStore.addToCart(instrumentName);
}
</script>
