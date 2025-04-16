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
  const reviewData = [
    {
      name: "Alice",
      title: "Fantastic Quality!",
      rating: 5,
      comment:
        "The sound is rich and warm, and the build quality is top-notch.",
    },
    {
      name: "Ben",
      title: "Very Satisfied",
      rating: 4,
      comment:
        "It plays beautifully. I just wish it came with extra accessories.",
    },
    {
      name: "Charlie",
      title: "Professional Feel",
      rating: 5,
      comment: "This instrument exceeded my expectations in every way.",
    },
    {
      name: "Dana",
      title: "Good, but slow shipping",
      rating: 3,
      comment:
        "Great value for the price, though shipping took longer than expected.",
    },
  ];

  return {
    testimonialData,
    reviewData,
  };
});
