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

  //This is for dynamically creating the filter options
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
      if (item.filterName === "CATEGORY") {
        item.filterOptions = categoryOptions.value;
      }
      if (item.filterName === "COLOUR") {
        item.filterOptions = colourOptions.value;
      }
    });
  }

  const filterSidebarHidden = ref(true);
  const sidebarIconPath = ref("../src/assets/icons/hamburgerIcon.svg");

  function toggleFilterSidebar() {
    populateFilterData();
    filterSidebarHidden.value = !filterSidebarHidden.value;
    filterSidebarHidden.value === true
      ? (sidebarIconPath.value = "../src/assets/icons/cross.svg")
      : (sidebarIconPath.value = "../src/assets/icons/hamburgerIcon.svg");
  }

  const productsToDisplay = ref(null);
  const listOfSelectedFilters = ref(null);

  function updateFilterList(filter) {
    //If list of filters is null, initialise it into an array
    if (!listOfSelectedFilters.value) {
      listOfSelectedFilters.value = [];
    }

    const filterAlreadySelected = listOfSelectedFilters.value.includes(filter);

    //if already selected, checkbox has been unchecked. Remove filter from array.
    if (filterAlreadySelected) {
      const index = listOfSelectedFilters.value.indexOf(filter);
      listOfSelectedFilters.value.splice(index, 1);
    } else {
      listOfSelectedFilters.value.push(filter);
    }

    if (listOfSelectedFilters.value.length === 0) {
      listOfSelectedFilters.value = null;
    }
  }

  function updateProductsToDisplay() {
    productsToDisplay.value = [];

    if (!listOfSelectedFilters.value) {
      productsToDisplay.value = catalogueOfProducts;
    } else {
      //If no colours are selected, add all colours to filters.
      const colourFilterSelected = catalogueOfProducts.some((product) =>
        listOfSelectedFilters.value.includes(product.colour)
      );
      if (!colourFilterSelected) {
        catalogueOfProducts.forEach((product) => {
          if (!listOfSelectedFilters.value.includes(product.colour)) {
            listOfSelectedFilters.value.push(product.colour);
          }
        });
      }

      //If no categories are selected, add all colours to filters.
      const categoryFilterSelected = catalogueOfProducts.some((product) =>
        listOfSelectedFilters.value.includes(product.instrumentCategory)
      );
      if (!categoryFilterSelected) {
        catalogueOfProducts.forEach((product) => {
          if (
            !listOfSelectedFilters.value.includes(product.instrumentCategory)
          ) {
            listOfSelectedFilters.value.push(product.instrumentCategory);
          }
        });
      }

      console.log(listOfSelectedFilters.value);
      let temp = [];
      let temp2 = [];

      listOfSelectedFilters.value.forEach((filter) => {
        catalogueOfProducts.forEach((product) => {
          if (!temp.includes(product)) {
            if (product.instrumentCategory === filter) {
              temp.push(product);
            }
          }
        });
      });

      listOfSelectedFilters.value.forEach((filter) => {
        temp.forEach((product) => {
          if (!temp2.includes(product)) {
            if (product.colour === filter) {
              temp2.push(product);
            }
          }
        });
      });

      productsToDisplay.value = temp2;
    }
    toggleFilterSidebar();
    listOfSelectedFilters.value = null;
  }

  populateFilterData();
  updateProductsToDisplay();
  return {
    catalogueOfProducts,
    productsToDisplay,
    filterData,
    filterSidebarHidden,
    sidebarIconPath,
    listOfSelectedFilters,
    toggleFilterSidebar,
    updateProductsToDisplay,
    updateFilterList,
  };
});
