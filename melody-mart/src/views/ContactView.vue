<template>
  <div class="flex flex-col items-center md:gap-0">
    <h2
      class="text-center font-bold text-2xl lg:text-4xl text-white italic mix-blend-overlay cursor-default m-10 lg:m-20"
    >
      Get in touch
    </h2>
    <ContactForm v-if="!formSubmitted" @formSuccess="handleEmit" />
    <FormSubmitted v-if="formSubmitted" />
    <p
      class="text-center font-bold text-2xl lg:text-4xl text-white italic mix-blend-overlay cursor-default m-10 lg:m-20"
    >
      I look forward to connecting with you
    </p>
  </div>
</template>
<script setup>
import ContactForm from "@/components/contactviewcomponents/ContactForm.vue";
import FormSubmitted from "@/components/contactviewcomponents/FormSubmitted.vue";

import { onMounted, ref } from "vue";
const formSubmitted = ref(false);

function handleEmit() {
  formSubmitted.value = true;
}
onMounted(() => {
  formSubmitted.value = false;
});
</script>
