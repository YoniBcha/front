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
    title: "Contract Date",
    dataIndex: "contractdate",
    key: "contractdate",
    fixed: "left",
    customFilterDropdown: true,
    onFilter: (value, record) =>
      record.contractdate
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
    title: "Enterprise Name",
    dataIndex: "enterprisename",
    key: "enterprisename",
    customFilterDropdown: true,
    onFilter: (value, record) =>
      record.enterprisename
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
    title: "Lessor Name",
    dataIndex: "lessorname",
    key: "enterprisename",
    customFilterDropdown: true,
    onFilter: (value, record) =>
      record.lessorname.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          searchInput.value.focus();
        }, 100);
      }
    },
  },

  {
    title: "Contract End Date",
    dataIndex: "contractenddate",
    key: "contractenddate",
    customFilterDropdown: true,
    onFilter: (value, record) =>
      record.contractenddate
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
    title: "Status",
    dataIndex: "status",
    fixed: "right",
    width: "20%",
  },
  {
    title: "operation",
    dataIndex: "operation",
    fixed: "right",
    width: "8%",
  },
];

</script>
