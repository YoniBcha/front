<template>
  <div>
    <div class="flex justify-between">
      <div class="font-bold text-2xl text-[#0a58a4]">Jobless Registration</div>
      <div class="">
        <button
          class="bg-[#0a58a4] text-white px-4 py-1 rounded-sm mb-10 float-end text-[16px]"
          @click="showModal"
        >
          new jobless
        </button>
        <a-modal
          v-model:open="open"
          width="1000px"
          title="Basic Modal"
          @ok="handleOk"
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </a-modal>
      </div>
    </div>
    <div class="mt-5">
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
