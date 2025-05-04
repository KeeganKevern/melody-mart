<template>
  <div class="col-span-2 flex justify-around items-center gap-6">
    <SocialLinkContainer
      v-for="link in socialLinkData"
      :href="link.href"
      :socialLinkIcon="link.src"
      :alt="link.alt"
      :aria-label="link.ariaLabel"
    />
  </div>
</template>
<script setup>
import SocialLinkContainer from "@/components/headercomponents/SocialLinkContainer.vue";

const socialLinkData = [
  {
    href: "mailto:keegankevern.work@gmail.com",
    src: "/src/assets/icons/email.svg",
    alt: "mailto",
    ariaLabel: "Email Developer",
  },
  {
    href: "https://www.linkedin.com/in/keegan-kevern-40959612b/",
    src: "/src/assets/icons/linkedIn.svg",
    alt: "Linked in",
    ariaLabel: "Developers Linked In Profile",
  },
  {
    href: "https://github.com/KeeganKevern",
    src: "/src/assets/icons/github.svg",
    alt: "github",
    ariaLabel: "Developers GitHub Profile",
  },
];
</script>
