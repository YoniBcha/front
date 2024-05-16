<template>
  <div class="">
    <div class="text-2xl text-[#0a58a4] font-bold">
      City Subcity Woreda And Kebele Registration
    </div>
    <div class="flex justify-end gap-5 mt-10 p-5 bg-gray-100 rounded-lg">
      <div class="">
        <WorkplaceCityAddCity />
      </div>
      <div class="">
        <WorkplaceCityAddSubcity />
      </div>
      <div class="">
        <WorkplaceCityAddWoreda />
      </div>
      <div class="">
        <WorkplaceCityAddKebele />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin-dashboard",
});
</script>
