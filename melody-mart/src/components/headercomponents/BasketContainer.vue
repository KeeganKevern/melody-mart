<template>
  <button>
    <img
      class="size-12"
      src="../../assets/icons/cart.svg"
      alt="A Shopping Cart"
    />
    <!-- Quantity badge -->
    <div
      v-if="quantityInCart != 0"
      :aria-label="`Shopping cart, ${quantityInCart} items`"
      role="img"
      class="rounded-full size-6 text-center align-middle items-center font-extrabold bg-amber-200 absolute top-0 right-0 text-sm text-black"
    >
      {{ quantityInCart }}
    </div>
  </button>
</template>
<script setup>
const props = defineProps({
  quantityInCart: {
    type: Number,
    required: false,
  },
});
</script>
