<template>
  <div>
    <!-- Search input -->
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search resources..."
      class="p-1 border border-blue-700 rounded-md mb-4 text-s"
    />

    <!-- Resource cards -->
    <div class="flex flex-wrap justify-center">
      <div
        v-for="(file, index) in filteredPdfFiles"
        :key="index"
        class="relative flex flex-col w-56 m-4 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md bg-blue-200"
      >
        <div
          class="relative h-40 overflow-hidden rounded-t-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"
        >
          <img
            class="absolute inset-0 w-full h-full object-cover object-center"
            :src="file.img"
            alt="File Image"
          />
        </div>
        <div class="p-6">
          <h5
            class="mb-2 block font-sans text-sm font-semibold leading-snug tracking-normal text-blue-900 antialiased text-sm"
          >
            {{ file.name }}
          </h5>
          <p
            class="block font-sans text-base font-light leading-relaxed text-inherit antialiased text-s"
          >
            {{ file.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

definePageMeta({
  layout: "admin-dashboard",
});

const pdfFiles = ref([
  {
    name: "Enterprise_Aderejajet_Zerf",
    description: "የኢንተርፔራይዜ አዯረጃጀት መመሪያ ቁጥር 115/2014",
    path: "/Enterprise_Aderejajet_Zerf.pdf",
    img: "/addis.png",
  },
  {
    name: "የመስሪያ ቦታ አስተዳደር መመሪያ 2014",
    description: "የመስሪያ ቦታ አሰጣጥ፣ አጠቃቀም እና አስተዳደር መመሪያ",
    path: "/የመስሪያ ቦታ አስተዳደር መመሪያ 2014.pdf",
    img: "/addis.png",
  },
  {
    name: "የመስሪያ_ቦታዎች_ማስተላለፍ_እና_አስተዳደር",
    description: "የመሰረታዊ የስራ ሂደት ለውጥ ማሻሻያ የጥናት ሰነድ",
    path: "/የመስሪያ_ቦታዎች_ማስተላለፍ_እና_አስተዳደር_ዳይሬክቶሬት_Copy.pdf",
    img: "/addis.png",
  },
  {
    name: "Public Work Manual",
    description: "የከተሞች የምግብ ዋስትና ፕሮግራም የህብረተሰብ ተሳትፎ ማስፈጸሚያ ማንዋል ",
    path: "/public work manual.docx",
    img: "/addis.png",
  },
]);

const searchQuery = ref("");

const filteredPdfFiles = computed(() => {
  return pdfFiles.value.filter(
    (file) =>
      file.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      file.description.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<style>
/* Add any custom styles here if needed */
</style>
``
