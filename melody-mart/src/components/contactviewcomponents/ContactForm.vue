<template>
  <form
    action="https://api.web3forms.com/submit"
    method="POST"
    class="flex flex-col items-center justify-evenly bg-yellow-200/50 rounded-md h-[30rem] md:rounded-full w-screen md:w-[55rem] md:h-[55rem] p-6 sm:text-xl md:text-3xl"
  >
    <!-- DO NOT EXPOSE ACCESS KEY ON FRONT END -->
    <input type="hidden" name="access_key" :value="password" />

    <!-- Name Input -->
    <label for="name" class="mb-1 text-lg font-semibold">Your Name</label>
    <input
      id="name"
      type="text"
      name="name"
      required
      placeholder="Enter your name..."
      class="w-4/5 max-w-md border-2 border-black rounded-md bg-white p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
    />

    <!-- Email Input -->
    <label for="email" class="mb-1 text-lg font-semibold">Email Address</label>
    <input
      id="email"
      type="email"
      name="email"
      required
      placeholder="Enter your email address..."
      class="w-4/5 max-w-md border-2 border-black rounded-md bg-white p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
    />

    <!-- Message Textarea -->
    <label for="message" class="mb-1 text-lg font-semibold">Your Message</label>
    <textarea
      id="message"
      name="message"
      required
      placeholder="Enter your message..."
      class="w-4/5 max-w-md border-2 border-black rounded-md bg-white p-2 mb-6 min-h-[10rem] focus:outline-none focus:ring-2 focus:ring-yellow-400"
    ></textarea>

    <!-- Honeypot Spam Protection -->
    <input type="checkbox" name="botcheck" class="hidden" />

    <button
      type="submit"
      class="border-2 border-black px-6 py-2 rounded-md text-lg bg-yellow-100 hover:bg-yellow-300 transition-colors duration-300 cursor-pointer"
    >
      Send!
    </button>
  </form>
</template>

<script setup>
const password = import.meta.env.VITE_SECRET_PASSWORD;
</script>
