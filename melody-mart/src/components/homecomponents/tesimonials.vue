<template>
  <section class="py-16 min-h-fit">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12">Testimonials</h2>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(testimonial, index) in testimonialStore.testimonialData"
          :key="index"
          :class="[
            'p-6 rounded-2xl shadow-md text-white transition hover:shadow-xl flex flex-col justify-between hover:scale-110',
            index === 1 ? 'hover:scale-200 cursor-pointer z-10' : '',
            assignedColors[index],
          ]"
          data-aos="fade-up"
          :data-aos-delay="index * 500"
        >
          <p class="text-gray-600 italic mb-4 text-2xl">
            "{{ testimonial.quote }}"
          </p>
          <div class="text-right">
            <p class="font-semibold text-xl">{{ testimonial.name }}</p>
            <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Aos from "aos";

import { useTestimonialsStore } from "@/stores/testimonialsStore";
const testimonialStore = useTestimonialsStore();

const colorClasses = [
  "bg-purple-400",
  "bg-emerald-400",
  "bg-amber-400",
  "bg-pink-400",
  "bg-cyan-400",
  "bg-indigo-400",
];

const assignedColors = ref([]);

onMounted(() => {
  const shuffled = [...colorClasses].sort(() => 0.5 - Math.random());
  assignedColors.value = testimonialStore.testimonialData.map(
    (_, i) => shuffled[i % shuffled.length]
  );
});
</script>
