import { ref } from "vue";
import { defineStore } from "pinia";

export const useCatalogueDataStore = defineStore("CatalogueData", () => {
  const catalogueOfProducts = [
    {
      id: 0,
      instrumentCategory: "Guitar",
      instrumentName: "Gibson SG",
      colour: "Red",
      price: 1500,
      imagePath: "./src/assets/images/instruments/GibsonSG.jpg",
    },
    {
      id: 1,
      instrumentCategory: "Guitar",

      instrumentName: "Squire Stratocaster",
      colour: "Black",
      price: 200,
      imagePath: "./src/assets/images/instruments/SquireStratocaster.jpg",
    },
    {
      id: 2,
      instrumentCategory: "Guitar",
      instrumentName: "Fender Telecaster",
      colour: "White",
      price: 2300,
      imagePath: "./src/assets/images/instruments/FenderTelecaster.jpg",
    },
    {
      id: 3,
      instrumentCategory: "Piano",
      instrumentName: "Yamaha P45",
      colour: "Black",
      price: 350,
      imagePath: "./src/assets/images/instruments/YamahaP45.jpg",
    },
    {
      id: 4,
      instrumentCategory: "Piano",
      instrumentName: "Thomann DP140WH",
      colour: "White",
      price: 890,
      imagePath: "./src/assets/images/instruments/ThomannDP140WH.jpg",
    },
    {
      id: 5,
      instrumentCategory: "Piano",
      instrumentName: "Steinway D-274",
      colour: "Black",
      price: 89000,
      imagePath: "./src/assets/images/instruments/SteinwayD274.jpg",
    },
    {
      id: 6,
      instrumentCategory: "Drums",
      instrumentName: "MapexComet18",
      colour: "Blue",
      price: 350,
      imagePath: "./src/assets/images/instruments/MapexComet18.jpg",
    },
    {
      id: 7,
      instrumentCategory: "Drums",
      instrumentName: "Sonor SQ1 Shell Pack",
      colour: "Black",
      price: 2500,
      imagePath: "./src/assets/images/instruments/SonorSQ1.jpg",
    },
    {
      id: 8,
      instrumentCategory: "Drums",
      instrumentName: "Alesis Nitro Max",
      colour: "Black",
      price: 400,
      imagePath: "./src/assets/images/instruments/AlesisNitroMax.jpg",
    },
  ];

  const catalogueFilterableCategories = ref([]);

  const filterableCategories = ["CATEGORY", "COLOUR", "PRICE"];

  const categoryFilterOptions = ref([]);
  const colourFilterOptions = ref([]);
  const priceFilterOptions = ["Up To £499", "£499 To £1999", "£2000+"];

  createFilterableOptionsArray();

  function createFilterableOptionsArray() {
    for (const product of catalogueOfProducts) {
      if (!categoryFilterOptions.value.includes(product.instrumentCategory)) {
        categoryFilterOptions.value.push(product.instrumentCategory);
      }
      if (!colourFilterOptions.value.includes(product.colour)) {
        colourFilterOptions.value.push(product.colour);
      }
    }
  }

  const filterSidebarVisible = ref(false);
  const sidebarIconPath = ref("../src/assets/icons/hamburgerIcon.svg");

  function toggleFilterSidebar() {
    filterSidebarVisible.value = !filterSidebarVisible.value;
    filterSidebarVisible.value === true
      ? (sidebarIconPath.value = "../src/assets/icons/cross.svg")
      : (sidebarIconPath.value = "../src/assets/icons/hamburgerIcon.svg");
  }
  return {
    catalogueOfProducts,
    filterableCategories,
    filterSidebarVisible,
    sidebarIconPath,
    toggleFilterSidebar,
  };
});
