<template>
  <aside
    class="p-4 md:p-8 border-gray-300 border-4 border-l-0 rounded-md bg-white fixed left-0 top-1/4 flex flex-col items-right justify-center"
  >
    <TheButton
      :imageSrc="catalogueDataStore.sidebarIconPath"
      :imageClass="'size-4 sm:size-6 md:size-8'"
      :class="'font-medium absolute cursor-pointer right-2 top-2 sm:right-1 sm:top-1 md:right-2 md:top-2 md:m-2 '"
      @click="catalogueDataStore.toggleFilterSidebar"
      :aria-expanded="!catalogueDataStore.filterSidebarHidden"
      aria-label="Toggle product filters"
    />
    <section class="flex flex-col items-center gap-2 md:gap-4 md:text-3xl">
      <SidebarFilterHeader
        v-if="catalogueDataStore.filterSidebarHidden"
        v-for="category of catalogueDataStore.filterData"
        :filterTitle="category.filterName"
      >
        <SidebarFilterOptions
          v-for="option of category.filterOptions"
          :optionName="option"
        />
      </SidebarFilterHeader>
      <TheButton
        v-if="catalogueDataStore.filterSidebarHidden"
        :buttonText="'Apply Filters'"
        :class="'border-2 p-2 md:p-4 rounded-sm cursor-pointer border-emerald-500 hover:bg-emerald-500 hover:text-white text-emerald-500 font-bold'"
        @click="catalogueDataStore.updateProductsToDisplay"
      />
    </section>
  </aside>
</template>
<script setup>
import SidebarFilterHeader from "@/components/shopviewcomponents/SidebarFilterHeader.vue";
import TheButton from "../universalcomponents/TheButton.vue";
import SidebarFilterOptions from "./SidebarFilterOptions.vue";
import { useCatalogueDataStore } from "@/stores/CatalogueDataStore.js";

const catalogueDataStore = useCatalogueDataStore();
</script>
