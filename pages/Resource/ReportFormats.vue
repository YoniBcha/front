<template>
    <div>
      <!-- Search input -->
      <input type="text" v-model="searchQuery" placeholder="Search resources..." class="p-1 border border-blue-700 rounded-md mb-4 ml-40">
  
      <!-- Resource cards -->
      <div class="flex flex-wrap justify-center">
        <!-- PDF files -->
        <div v-for="(file, index) in filteredPdfFiles" :key="index" class="relative flex flex-col w-56 m-4 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="relative h-40 overflow-hidden rounded-t-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img class="absolute inset-0 w-full h-full object-cover object-center" :src="file.img" alt="File Image" />
          </div>
          <div class="p-6">
            <h5 class="mb-2 block font-sans text-sm font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-sm">
              {{ file.name }}
            </h5>
            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased text-xs">
              {{ file.description }}
            </p>
          </div>
          <div class="p-6 pt-0">
            <a :href="file.path" target="_blank" class="select-none rounded-lg bg-pink-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-grey-500/20 transition-all hover:shadow-lg hover:shadow-grey-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              View PDF
            </a>
          </div>
        </div>
  
        <!-- XLSX file -->
        <div v-for="(file, index) in filteredXlsxFiles" :key="'xlsx-' + index" class="relative flex flex-col w-56 m-4 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="relative h-40 overflow-hidden rounded-t-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img class="absolute inset-0 w-full h-full object-cover object-center" :src="file.img" alt="File Image" />
          </div>
          <div class="p-6">
            <h5 class="mb-2 block font-sans text-sm font-semibold leading-snug tracking-normal text-blue-900 antialiased text-sm">
              {{ file.name }}
            </h5>
            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased text-xs">
              {{ file.description }}
            </p>
          </div>
          <div class="p-6 pt-0">
            <a :href="file.path" target="_blank" class="select-none rounded-lg bg-blue-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-black-500/20 transition-all hover:shadow-lg hover:shadow-black-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              Download XLSX
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pdfFiles: [
          
        ],
        xlsxFiles: [
            { name: "Report 2015 ድጋፍና ክትትል", description: "Description of Excel file", path: "/Report 2015 ድጋፍና ክትትል.xlsx", img: "/addis.png" },
            { name: "Report 2015 አስተዳደር", description: "Description of Excel file", path: "/Report 2015 አስተዳደር.xlsx", img: "/addis.png" },
            { name: "Report 2015 ማስተላለፍ", description: "Description of Excel file", path: "/Report 2015 ማስተላለፍ.xlsx", img: "/addis.png" },
            { name: "LH report format", description: "Description of Excel file", path: "/LH report format.docx", img: "/addis.png" },
            // Add more XLSX files as needed
        ],
        searchQuery: '',
      };
    },
    computed: {
      filteredPdfFiles() {
        return this.pdfFiles.filter(file =>
          file.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          file.description.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
      filteredXlsxFiles() {
        return this.xlsxFiles.filter(file =>
          file.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          file.description.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
  };
  </script>
  
  <style>
  /* Add any custom styles here if needed */
  </style>
  