<template>
  <div class="">
    <div class="flex justify-between">
      <div class="font-bold text-lg text-[#0a58a4]">Jobless Registration</div>
      <div class="">
        <button
          class="bg-[#0a58a4] text-white px-5 py-2 rounded-lg text-semibold"
        >
          New Jobless
        </button>
      </div>
    </div>
    <div class="mt-5">
      <a-input-search
        placeholder="search jobless person"
        @search="onSearch"
        :style="{ width: '300px'}"
      />
    </div>
  </div>
</template>

<script setup>


</script>
