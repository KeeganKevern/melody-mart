<template>
  <aside
    class="max-w-3/4 md:max-w-1/5 p-4 border-gray-300 border-4 border-l-0 rounded-md bg-white fixed h-fit left-0 top-1/4 flex flex-col items-right justify-center"
  >
    <TheButton
      :imageSrc="catalogueDataStore.sidebarIconPath"
      :imageClass="'size-4'"
      :class="'text-2xl font-medium absolute right-2 top-2 p-0 m-0'"
      @click="catalogueDataStore.toggleFilterSidebar"
    />
    <section class="flex flex-col items-center">
      <SidebarFilterHeader
        v-if="catalogueDataStore.filterSidebarVisible"
        v-for="category of catalogueDataStore.filterData"
        :filterTitle="category.filterName"
      >
        <SidebarFilterOptions
          v-for="option of category.filterOptions"
          :optionName="option"
        />
      </SidebarFilterHeader>
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
