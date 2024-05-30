<template>
  <div class="">
    <div class="h-[600px] bg-green-500 p-5">
      <div class="h-56 w-56">
        <p class="text-xl text-gray-600">Enterprise Logo</p>
        <img src="~assets/img/addis.png" class="bg-cover" alt="" />
      </div>
      <div class="mt-10">
        <p class="text-2xl text-gray-600 mb-5">Enterprise Member List</p>
        <joblessDatatTableJoblessList />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "enterprise-page",
});
</script>
