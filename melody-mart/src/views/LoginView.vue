<template>
  <main class="flex flex-col items-center gap-50 p-20">
    <h1
      class="text-center font-bold text-2xl lg:text-4xl text-white italic mix-blend-overlay cursor-default lg:m-20"
    >
      Please Log in to access the Checkout Page
    </h1>
    <Login v-if="!authStore.user" class="w-full" />
    <Logout v-if="authStore.user" />
    <p
      v-if="!authStore.user"
      class="text-center font-bold text-2xl lg:text-4xl italic cursor-text m-10 lg:m-20"
    >
      DEFAULT EMAIL @ PASSWORD<br />default@defaultemail.com
      <br />D3F4(_)lt_P4$$W0Rd
    </p>
  </main>
</template>
<script setup>
import Login from "@/components/loginviewcomponents/Login.vue";
import Logout from "@/components/loginviewcomponents/Logout.vue";
import { useAuthStore } from "@/stores/AuthStore";
import { onMounted } from "vue";
const authStore = useAuthStore();

import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";

const route = useRoute();
const toast = useToast();

onMounted(() => {
  if (route.query.reason === "auth") {
    toast.warning("You must be logged in to access the checkout page.", {
      toastClassName: "top-75",
      bodyClassName: "!text-2xl !font-extrabold",
    });
  }
});
</script>
