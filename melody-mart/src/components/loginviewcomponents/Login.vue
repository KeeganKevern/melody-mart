<!-- src/components/Login.vue -->
<template>
  <div class="flex justify-center">
    <form
      @submit.prevent="handleLogin"
      class="flex flex-col gap-4 w-3/4 md:gap-10 lg:w-1/2"
    >
      <input
        v-model="email"
        type="email"
        required
        placeholder="Email"
        autocomplete="email"
        aria-label="Email address"
        class="p-2 rounded-sm text-center ring-2 bg-emerald-200 hover:bg-teal-300"
      />
      <input
        v-model="password"
        required
        type="password"
        placeholder="Password"
        aria-label="Password"
        class="p-2 rounded-sm text-center ring-2 bg-emerald-200 hover:bg-teal-300"
      />
      <button
        type="submit"
        class="p-2 border-2 rounded-sm transition border-emerald-600 hover:bg-emerald-600 font-bold hover:text-white cursor-pointer"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/AuthStore";

const email = ref("");
const password = ref("");
const authStore = useAuthStore();

const handleLogin = async () => {
  try {
    await authStore.login(email.value, password.value);
  } catch (err) {
    console.error(err.message);
  }
};
</script>
