<template>
  <button type="button" :attrs>
    {{ buttonText }}<img v-if="imageSrc" :src="imageSrc" :class="imageClass" />
  </button>
</template>
<script setup>
defineProps({
  buttonText: { type: String, required: false },
  imageSrc: { type: String, required: false },
  imageClass: {
    type: String,
    required: false,
  },
});

import { useAttrs } from "vue";
const attrs = useAttrs();
</script>
