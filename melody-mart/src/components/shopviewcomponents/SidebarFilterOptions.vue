<template>
  <div class="flex justify-between items-center w-3/4">
    <label :for="optionName">{{ optionName }}</label>
    <input
      type="checkbox"
      class="size-4 appearance-none border-2 border-gray-300 checked:bg-amber-200"
      :id="optionName"
      :name="optionName"
      @click="catalogueDataStore.updateFilterList(optionName)"
    />
  </div>
</template>
<script setup>
defineProps({
  optionName: { type: String, required: true },
});

const selectedFilters = ref([]);
import { useCatalogueDataStore } from "@/stores/CatalogueDataStore";
import { ref } from "vue";
const catalogueDataStore = useCatalogueDataStore();

function testy(optionName) {
  selectedFilters.value.push(optionName);
  console.log(selectedFilters.value);
}
</script>
