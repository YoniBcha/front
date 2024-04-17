<template>
  <div>
    <div class="flex justify-between">
      <div class="font-bold text-lg text-[#0a58a4]">Jobless Registration</div>
    </div>
    <div class="mt-5">
      <a-input-search
        placeholder="search jobless person"
        @search="onSearch"
        :style="{ width: '300px' }"
      />
    </div>
    <div class="mt-5">
      <DatatableJoblessDataTable />
    </div>
  </div>
</template>

