<template>
  <div>
    <!-- Search input -->
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search resources..."
      class="p-1 border border-blue-700 rounded-md mb-4"
    />

    <!-- Resource cards -->
    <div class="flex flex-wrap justify-center">
      <div
        v-for="(file, index) in filteredPdfFiles"
        :key="index"
        class="relative flex flex-col w-56 m-4 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
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
            class="block font-sans text-base font-light leading-relaxed text-inherit antialiased text-xs"
          >
            {{ file.description }}
          </p>
        </div>
        <div class="p-6 pt-0">
          <a
            :href="file.path"
            target="_blank"
            class="select-none rounded-lg bg-blue-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-grey-500/20 transition-all hover:shadow-lg hover:shadow-grey-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            View File
          </a>
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
  {
    name: "File 5",
    description: "Description of file 5",
    path: "/file5.pdf",
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
