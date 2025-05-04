<template>
  <a :href="href" :aria-label="ariaLabel">
    <img class="md:size-16" :src="socialLinkIcon" :alt="alt" />
  </a>
</template>
<script setup>
defineProps({
  href: String,
  socialLinkIcon: String,
  alt: String,
  ariaLabel: String,
});
</script>
