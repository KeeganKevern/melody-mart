<template>
  <div
    class="h-1/5 w-dvw fixed bottom-0 p-10 bg-gray-100 flex flex-col border-t-4 border-gray-200"
  >
    <div class="flex justify-around m-4">
      <h3 class="text-2xl">Total Cost :</h3>
      <h3 class="text-2xl">£{{ totalCost }}</h3>
    </div>
    <div class="w-full border-2 border-indigo-500"></div>
    <TheButton
      :buttonText="'Confirm Purchase'"
      :class="'self-center text-2xl m-4 p-4 rounded-sm bg-emerald-500 cursor-pointer text-white font-extrabold hover:bg-emerald-400 transition-colors w-1/2'"
    />
  </div>
</template>
<script setup>
import TheButton from "../universalcomponents/TheButton.vue";
const props = defineProps({
  totalCost: { type: Number, required: true },
});
</script>
