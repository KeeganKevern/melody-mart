import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import ProductCard from "@/components/shopviewcomponents/ProductCard.vue";
import { useCartStore } from "@/stores/CartStore";

// Mock the CartStore
vi.mock("@/stores/CartStore", () => {
  return {
    useCartStore: vi.fn(),
  };
});

describe("ProductCard.vue", () => {
  const mockAddToCart = vi.fn();

  beforeEach(() => {
    // Reset mocks before each test
    useCartStore.mockReturnValue({
      addToCart: mockAddToCart,
    });
  });

  const defaultProps = {
    instrumentName: "Example instrument",
    price: 499.99,
    imagePath: "/images/guitar.png",
  };

  it("renders product name, price, and image correctly", () => {
    const wrapper = mount(ProductCard, {
      props: defaultProps,
    });

    // Check product name
    expect(wrapper.text()).toContain("Example instrument");

    // Check product price
    expect(wrapper.text()).toContain("£499.99");

    // Check product image source
    const img = wrapper.find("img");
    expect(img.attributes("src")).toBe("/images/guitar.png");
    expect(img.attributes("alt")).toContain("Example instrument");
  });

  it("calls addToCart when 'Add to Cart' button is clicked", async () => {
    const wrapper = mount(ProductCard, {
      props: defaultProps,
    });

    const button = wrapper.find("button");
    await button.trigger("click");

    expect(mockAddToCart).toHaveBeenCalledTimes(1);
    expect(mockAddToCart).toHaveBeenCalledWith("Example instrument");
  });
});
