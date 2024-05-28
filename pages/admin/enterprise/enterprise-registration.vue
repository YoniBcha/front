<template>
  <div class="">
    <FormEnterpriseRegistration />
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
    title: "Enterprise Name",
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
    title: "Enterpise Phone number",
    dataIndex: "phonenumber",
    key: "phonenumber",
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
    title: "Enterprise Address",
    dataIndex: "address",
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
    title: "Enterprise Email",
    dataIndex: "email",
    key: "email",
    customFilterDropdown: true,
    onFilter: (value, record) =>
      record.email.toString().toLowerCase().includes(value.toLowerCase()),
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
const dataSourceFromParent = ref([]);

const fetchEnterprise = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/enterprise", {
      method: "GET",
    });
    const data = await response.json();
    dataSourceFromParent.value = data.map((enterprise, index) => ({
      key: index + 1, // Ensure each item has a unique key
      name: enterprise.enterprise_name,
      phonenumber: enterprise.enterprise_phone_number,
      email: enterprise.enterprise_email,
      address: enterprise.enterprise_city,
      status: enterprise.enterprise_status,
    }));
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(fetchEnterprise);
</script>
