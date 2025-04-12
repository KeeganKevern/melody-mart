import { ref } from "vue";
import { defineStore } from "pinia";

export const useCatalogueDataStore = defineStore("CatalogueData", () => {
  const catalogueOfProducts = [
    {
      id: 0,
      instrumentCategory: "GUITAR",
      instrumentName: "Gibson SG",
      colour: "RED",
      price: 1500,
      imagePath: "./src/assets/images/instruments/GibsonSG.jpg",
    },
    {
      id: 1,
      instrumentCategory: "GUITAR",
      instrumentName: "Squire Stratocaster",
      colour: "BLACK",
      price: 200,
      imagePath: "./src/assets/images/instruments/SquireStratocaster.jpg",
    },
    {
      id: 2,
      instrumentCategory: "GUITAR",
      instrumentName: "Fender Telecaster",
      colour: "WHITE",
      price: 2300,
      imagePath: "./src/assets/images/instruments/FenderTelecaster.jpg",
    },
    {
      id: 3,
      instrumentCategory: "PIANO",
      instrumentName: "Yamaha P45",
      colour: "BLACK",
      price: 350,
      imagePath: "./src/assets/images/instruments/YamahaP45.jpg",
    },
    {
      id: 4,
      instrumentCategory: "PIANO",
      instrumentName: "Thomann DP140WH",
      colour: "WHITE",
      price: 890,
      imagePath: "./src/assets/images/instruments/ThomannDP140WH.jpg",
    },
    {
      id: 5,
      instrumentCategory: "PIANO",
      instrumentName: "Steinway D-274",
      colour: "BLACK",
      price: 89000,
      imagePath: "./src/assets/images/instruments/SteinwayD274.jpg",
    },
    {
      id: 6,
      instrumentCategory: "DRUMS",
      instrumentName: "MapexComet18",
      colour: "BLUE",
      price: 350,
      imagePath: "./src/assets/images/instruments/MapexComet18.jpg",
    },
    {
      id: 7,
      instrumentCategory: "DRUMS",
      instrumentName: "Sonor SQ1 Shell Pack",
      colour: "BLACK",
      price: 2500,
      imagePath: "./src/assets/images/instruments/SonorSQ1.jpg",
    },
    {
      id: 8,
      instrumentCategory: "DRUMS",
      instrumentName: "Alesis Nitro Max",
      colour: "BLACK",
      price: 400,
      imagePath: "./src/assets/images/instruments/AlesisNitroMax.jpg",
    },
  ];

  const filterData = ref([
    {
      filterName: "CATEGORY",
    },
    {
      filterName: "COLOUR",
    },
    {
      filterName: "PRICE",
      filterOptions: ["Up To £499", "£499 To £1999", "£2000+"],
    },
  ]);

  populateFilterData();

  //This is for dynamically creating the filters
  function populateFilterData() {
    //Create array from catalogueOfProducts
    const categoryOptions = ref([]);
    const colourOptions = ref([]);

    for (let product of catalogueOfProducts) {
      if (!categoryOptions.value.includes(product.instrumentCategory)) {
        categoryOptions.value.push(product.instrumentCategory);
      }
      if (!colourOptions.value.includes(product.colour)) {
        colourOptions.value.push(product.colour);
      }
    }
    filterData.value.forEach((item) => {
      console.log(item.filterName);
      if (item.filterName === "CATEGORY") {
        item.filterOptions = categoryOptions.value;
      }
      if (item.filterName === "COLOUR") {
        item.filterOptions = colourOptions.value;
      }
    });
  }

  const filterSidebarVisible = ref(false);
  const sidebarIconPath = ref("../src/assets/icons/hamburgerIcon.svg");

  function toggleFilterSidebar() {
    populateFilterData;
    filterSidebarVisible.value = !filterSidebarVisible.value;
    filterSidebarVisible.value === true
      ? (sidebarIconPath.value = "../src/assets/icons/cross.svg")
      : (sidebarIconPath.value = "../src/assets/icons/hamburgerIcon.svg");
  }
  return {
    catalogueOfProducts,
    filterData,
    filterSidebarVisible,
    sidebarIconPath,
    toggleFilterSidebar,
  };
});
