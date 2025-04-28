<template>
  <form
    @submit.prevent="submitForm"
    class="lg:w-1/4 p-6 bg-white shadow-lg rounded-lg"
  >
    <div class="mb-4">
      <label for="name" class="block text-sm font-medium text-gray-700"
        >Name</label
      >
      <input
        type="text"
        id="name"
        name="name"
        v-model="name"
        class="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
        placeholder="Enter your name"
      />
    </div>
    <div class="mb-4">
      <label for="email" class="block text-sm font-medium text-gray-700"
        >Email</label
      >
      <input
        type="email"
        id="email"
        name="email"
        v-model="email"
        class="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
        placeholder="Enter your email"
      />
    </div>
    <div class="mb-6">
      <label for="message" class="block text-sm font-medium text-gray-700"
        >Message</label
      >
      <textarea
        id="message"
        name="message"
        v-model="message"
        class="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
        rows="4"
        placeholder="Enter your message"
      ></textarea>
    </div>
    <button
      type="submit"
      class="cursor-pointer w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      Send Message
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_CONTACTAPIKEY;
const name = ref("");
const email = ref("");
const message = ref("");

const emit = defineEmits(["formSuccess"]);
const submitForm = async () => {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      name: name.value,
      email: email.value,
      message: message.value,
    }),
  });
  const result = await response.json();

  if (result.sucess) {
    emit("formSuccess", true);
  } else {
    emit("formSuccess", false);
  }
};
</script>
