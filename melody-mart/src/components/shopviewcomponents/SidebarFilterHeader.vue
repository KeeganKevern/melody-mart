<template>
  <div
    class="flex justify-between text-2xl md:text-4xl border-b-4 border-gray-300 m-4 md:m-8 w-4/5"
  >
    <h3 class="text-right cursor-pointer mr-3">
      {{ filterTitle }}
    </h3>
    <TheButton
      @click="handleClick"
      :aria-expanded="openCloseState === '-'"
      :buttonText="openCloseState"
      :class="'cursor-pointer'"
    />
  </div>

  <slot v-if="openCloseState === '-'"></slot>
</template>
<script setup>
import TheButton from "../universalcomponents/TheButton.vue";
import { ref } from "vue";
const props = defineProps({
  filterTitle: { type: String, required: true },
});

const openCloseState = ref("+");

function handleClick() {
  openCloseState.value = openCloseState.value === "+" ? "-" : "+";
}
</script>
