<template>
  <div class="flex justify-between items-center w-3/4">
    <label :for="optionName">{{ optionName }}</label>
    <input
      type="checkbox"
      class="size-4 appearance-none border-2 border-gray-300 checked:bg-amber-200"
      :id="optionName"
      :name="optionName"
    />
  </div>
</template>
<script setup>
defineProps({
  optionName: { type: String, required: true },
});
</script>
