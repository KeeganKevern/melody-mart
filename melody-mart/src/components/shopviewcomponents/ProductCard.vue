<template>
  <div
    class="min-w-1/4 max-w-1/2 md:max-w-1/3 lg:max-w-1/4 grid grid-rows-auto text-center bg-white p-2 md:p-4 md:mx-12 lg:my-4 lg:shadow-lg border-2 border-gray-200 rounded-sm"
  >
    <img
      :src="imagePath"
      alt="A Picture of an instrument"
      class="flex self-center"
    />
    <div class="row-start-2 flex flex-col justify-end gap-2">
      <h2 class="text-2xl font-bold italic">{{ instrumentName }}</h2>
      <p class="text-xl font-medium">£{{ price }}</p>
      <button class="p-2 border-2 rounded-md cursor-pointer">
        Add to Cart Component
      </button>
    </div>
  </div>
</template>
<script setup>
defineProps({
  instrumentName: { type: String, required: true },
  price: { type: Number, required: true },
  imagePath: { type: String, required: true },
});
</script>
