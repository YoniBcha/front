<template>
  <div class="">
    <FormWorkplaceRegistration />
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
    dataIndex: "name",
    key: "name",
    fixed: "left",
    width: "20%",
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
    title: "Status",
    dataIndex: "status",
    fixed: "right",
    width: "15%",
  },
  {
    title: "operation",
    dataIndex: "operation",
    fixed: "right",
    width: "8%",
  },
];

const dataSourceFromParent = ref([]);

const fetchWorkplace = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/workplace", {
      method: "GET",
    });
    const data = await response.json();
    dataSourceFromParent.value = data.map((enterprise, index) => ({
      key: index + 1,
      name: enterprise.workplace_name,
      workplacetype: enterprise.workplace_type,
      workplacecity: enterprise.workplace_city,
      workplacesubcity: enterprise.workplace_subcity,
      kebele: enterprise.enterprise_kebele,
      city: enterprise.enterprise_city,
      status: enterprise.workplace_status,
      workplacesize: enterprise.workplace_block_size,
    }));
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(fetchWorkplace);
</script>
