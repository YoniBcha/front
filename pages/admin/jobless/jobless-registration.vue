<template>
  <div class="">
    <FormJobelssRegistration />
  </div>
  <div>
    <JoblessDatatTableJoblessDataTable
      :data-source="dataSourceFromParent"
      :columns="columns"
      :loading="loading"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

definePageMeta({
  layout: "admin-dashboard",
});

const columns = [
  {
    title: "Jobless Name",
    dataIndex: "name",
    key: "name",
    fixed: "left",
    customFilterDropdown: true,
  },
  { title: "Sex", dataIndex: "sex", fixed: "left", width: "11%" },
  { title: "Age", dataIndex: "age", width: "8%" },
  {
    title: "Phone Number",
    dataIndex: "phonenumber",
    key: "phonenumber",
    customFilterDropdown: true,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    customFilterDropdown: true,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    customFilterDropdown: true,
  },
  { title: "Status", dataIndex: "status", fixed: "right", width: "12%" },
  { title: "operation", dataIndex: "operation", fixed: "right", width: "8%" },
];

const dataSourceFromParent = ref([]);
const loading = ref(true);

const fetchJobless = async () => {
  loading.value = true;
  try {
    const response = await fetch("http://127.0.0.1:8000/api/jobless", {
      method: "GET",
    });
    const data = await response.json();
    dataSourceFromParent.value = data.map((jobless, index) => ({
      key: jobless.id, // Use the actual id from the API response
      name: jobless.jobless_full_name,
      grandfather_name: jobless.jobless_grandfather_name,
      sex: jobless.jobless_sex,
      age: jobless.jobless_age,
      address: jobless.jobless_city,
      phonenumber: jobless.jobless_phonenumber,
      email: jobless.jobless_email,
      status: jobless.jobless_status,
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(fetchJobless);
</script>
