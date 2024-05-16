<template>
  <div class="">
    <FormNewContract />
  </div>
  <div>
    <DataTableDaynamicDataTable
      :data-source="dataSourceFromParent"
      :columns="columns"
    />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin-dashboard",
});
const columns = [
  {
    title: "Workplace Name",
    dataIndex: "wokplacename",
    key: "workplace",
    fixed: "left",
    customFilterDropdown: true,
    onFilter: (value, record) =>
      record.wokplacename
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
      record.phonenumber.toString().toLowerCase().includes(value.toLowerCase()),
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
    key: "address",
    customFilterDropdown: true,
    onFilter: (value, record) =>
      record.address.toString().toLowerCase().includes(value.toLowerCase()),
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
    title: "Status",
    dataIndex: "status",
    fixed: "right",
    width: "6%",
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
    wokplacename: "Yonas Million",
    workplacesize: "34m2",
    workplacecity: "New York No. 1 Lake Park",
    status: ["pass"],
    workplcecity: "+(251)567-48-47",
    workplacetype: "test44@gmail.com",
    workplacesubcity: "ldeta",
  },
  {
    key: "2",
    wokplacename: "Joe Black",
    workplacecity: "London No. 1 Lake Park",
    workplacesize: "34m2",
    status: ["loser"],
    phonenumber: "+(251)56657567-48-47",
    workplacetype: "test44@gmasgfdil.com",
    workplacesubcity: "piassa",
  },
  {
    key: "3",
    wokplacename: "Jim Green",
    workplacecity: "Sidney No. 1 Lake Park",
    status: ["pass"],
    workplacesize: "34m2",
    phonenumber: "+(251)567-5675-47",
    workplacetype: "test44@gmghail.com",
    workplacesubcity: "bole",
  },
  {
    key: "4",
    wokplacename: "Jim Red",
    workplacecity: "London No. 2 Lake Park",
    status: ["pending"],
    workplacesize: "34m2",
    phonenumber: "+(251)5656757",
    workplacetype: "test44@gmail.djghjcom",
    workplacesubcity: "arada",
  },
]);
</script>
