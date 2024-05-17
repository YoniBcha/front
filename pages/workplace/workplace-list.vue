<template>
  <div class="flex justify-between mt-5 mb-10">
    <div class="text-2xl text-[#0a58a4] font-bold">Workplace List</div>
    <div class="text-sm text-gray-400 font-bold">
      This is the workplace list that we have.
    </div>
  </div>
  <div>
    <DataTableListTable :data="dataSourceFromParent" :columns="columns" />
  </div>
</template>



<script setup>
definePageMeta({
  layout: "admin-dashboard",
});

const columns = [
  {
    title: "Workplace Name",
    dataIndex: "name",
    key: "name",
    fixed: "left",
    customFilterDropdown: true,
    onFilter: (value, record) =>
      record.name.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          searchInput.value.focus();
        }, 100);
      }
    },
  },

  {
    title: "Workplace Type",
    dataIndex: "workplacetype",
    key: "workplacetype",
    customFilterDropdown: true,
    onFilter: (value, record) =>
      record.workplacetype
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          searchInput.value.focus();
        }, 100);
      }
    },
  },

  {
    title: "workplace city",
    dataIndex: "workplacecity",
    key: "workplacecity",
    customFilterDropdown: true,
    onFilter: (value, record) =>
      record.workplacecity
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          searchInput.value.focus();
        }, 100);
      }
    },
  },

  {
    title: "Workplace Subcity",
    dataIndex: "workplacesubcity",
    key: "workplacesubcity",
    customFilterDropdown: true,
    onFilter: (value, record) =>
      record.workplacesubcity
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          searchInput.value.focus();
        }, 100);
      }
    },
  },
  {
    title: "Workplace Size(area)",
    dataIndex: "workplacesize",
    key: "workplacesize",
  },
  {
    title: "operation",
    dataIndex: "operation",
    fixed: "right",
    width: "8%",
  },
];

const dataSourceFromParent = ref([
  {
    key: "1",
    name: "Yonas Million",
    workplacesize: "34m2",
    workplacecity: "New York No. 1 Lake Park",
    status: ["pass"],
    workplcecity: "+(251)567-48-47",
    workplacetype: "test44@gmail.com",
    workplacesubcity: "ldeta",
  },
  {
    key: "2",
    name: "Joe Black",
    workplacecity: "London No. 1 Lake Park",
    workplacesize: "34m2",
    status: ["loser"],
    phonenumber: "+(251)56657567-48-47",
    workplacetype: "test44@gmasgfdil.com",
    workplacesubcity: "piassa",
  },
  {
    key: "3",
    name: "Jim Green",
    workplacecity: "Sidney No. 1 Lake Park",
    status: ["pass"],
    workplacesize: "34m2",
    phonenumber: "+(251)567-5675-47",
    workplacetype: "test44@gmghail.com",
    workplacesubcity: "bole",
  },
  {
    key: "4",
    name: "Jim Red",
    workplacecity: "London No. 2 Lake Park",
    status: ["pending"],
    workplacesize: "34m2",
    phonenumber: "+(251)5656757",
    workplacetype: "test44@gmail.djghjcom",
    workplacesubcity: "arada",
  },
]);
</script>
