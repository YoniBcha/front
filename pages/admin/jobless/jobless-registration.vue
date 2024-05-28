<template>
  <div class="">
    <FormJobelssRegistration />
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
    title: "Jobelss Name",
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
    title: "Sex",
    dataIndex: "sex",
    fixed: "left",
    width: "11%",
  },
  {
    title: "Age",
    dataIndex: "age",
    width: "8%",
  },
  {
    title: "Phone Number",
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
    title: "Address",
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
    title: "Email",
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

const fetchJobless = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/jobless", {
      method: "GET",
    });
    const data = await response.json();
    dataSourceFromParent.value = data.map((jobless, index) => ({
      key: index + 1, // Ensure each item has a unique key
      name: jobless.jobless_full_name,
      grandfather_name: jobless.jobless_grandfather_name,
      sex: jobless.jobless_sex,
      age: jobless.jobless_age,
      address: jobless.jobless_city,
      status: jobless.status,
      phonenumber: jobless.jobless_phonenumber,
      email: jobless.jobless_email,
      status: jobless.jobless_status
    }));
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(fetchJobless);
</script>
