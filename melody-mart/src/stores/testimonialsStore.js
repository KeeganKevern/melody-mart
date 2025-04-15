import { defineStore } from "pinia";

export const useTestimonialsStore = defineStore("TestimonialsData", () => {
  const testimonialData = [
    {
      name: "John Doe",
      role: "Guitarist",
      quote:
        "This is the best platform I've ever used for fake buying instruments!",
    },
    {
      name: "Jane Smith",
      role: "Hiring Manager",
      quote:
        "I love this website! I should contact the developer to see if he is available to hire!",
    },
    {
      name: "Alex Roe",
      role: "Drummer",
      quote: "The UI is sleek and the experience was seamless.",
    },
    {
      name: "Maria Gomez",
      role: "Violinist",
      quote: "A joy to use, everything felt modern and intuitive.",
    },
    {
      name: "Lee Wong",
      role: "Producer",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      name: "Emily Chan",
      role: "Pianist",
      quote: "Super fast delivery and amazing support!",
    },
  ];

  return {
    testimonialData,
  };
});
