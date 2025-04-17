<template>
  <div class="flex justify-center gap-4 w-3/4">
    <TheButton
      @click="handleLogout"
      :buttonText="'LogOut'"
      class="p-2 border-2 transition rounded-sm border-red-600 hover:bg-red-600 font-bold hover:text-white cursor-pointer w-full"
    />
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/AuthStore";
import TheButton from "../universalcomponents/TheButton.vue";

const authStore = useAuthStore();

const handleLogout = async () => {
  try {
    await authStore.logout();
  } catch (err) {
    console.error(err.message);
  }
};
</script>
