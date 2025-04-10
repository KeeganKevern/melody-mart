<template>
  <h3 class="text-2xl border-b-4 border-gray-300 text-right m-4 cursor-pointer">
    {{ filterTitle }}
  </h3>
</template>
<script setup>
const props = defineProps({
  filterTitle: { type: String, required: true },
});
</script>
