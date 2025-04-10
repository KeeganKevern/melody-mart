<template>
  <button>
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
</script>
