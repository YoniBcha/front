<template>
  <div>
    <div class="font-bold text-2xl text-[#0a58a4]">Jobless Registration</div>
    <div class="mt-10">
      <a-input-search
        placeholder="search jobless person"
        @search="onSearch"
        :style="{ width: '300px' }"
      />
    </div>
    <div class="mt-5 mb-32">
      <DatatableJoblessDataTable />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const open = ref(false);
const showModal = () => {
  open.value = true;
};

const handleOk = (e) => {
  console.log(e);
  open.value = false;
};
</script>
