<template>
  <div
    class="w-fit md:w-3/4 flex justify-around items-center gap-4 rounded-md bg-white p-4 md:p-12 shadow-xl border-2 border-gray-200"
  >
    <img
      class="w-1/2 md:w-1/4 p-2 rounded-lg border-2 border-gray-200 shadow"
      :src="imagePath"
      alt="A musical instrument"
    />
    <div class="flex flex-col gap-4">
      <h3 class="text-2xl">{{ instrumentName }}</h3>
      <div class="w-full border-2 border-indigo-500"></div>
      <h4 class="text-2xl text-indigo-500 italic">£{{ instrumentPrice }}</h4>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  instrumentName: { type: String, required: true },
  instrumentPrice: { type: String, required: true },
  imagePath: { type: String, required: true },
});
</script>
