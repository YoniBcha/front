<template>
  <div class="flex justify-between mt-5 mb-10">
    <div class="text-2xl text-[#0a58a4] font-bold">Jobless List</div>
    <div class="text-sm text-gray-400 font-bold">
      The jobless that fulfill the requirement will appear here
    </div>
  </div>
  <div>
    <JoblessDatatTableJoblessList :data="dataSourceFromParent" :columns="columns" />
  </div>
</template>

<script setup>
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
    width: "8%",
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
    fixed: "right",
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
    title: "Operation",
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
      photoUrl: `http://127.0.0.1:8000/image/${jobless.jobless_photo}`,
      name: jobless.jobless_full_name,
      sex: jobless.jobless_sex,
      age: jobless.jobless_age,
      woreda: jobless.jobless_woreda,
      kebele: jobless.jobless_kebele,
      subcity: jobless.jobless_subcity,
      city: jobless.jobless_city,
      status: jobless.jobless_status,
      phonenumber: jobless.jobless_phonenumber,
      email: jobless.jobless_email,
      username: jobless.jobless_username,
      password: jobless.jobless_password,
      grandfather_name: jobless.jobless_grandfather_name,
      profession: jobless.jobless_profession,
      housenumber: jobless.jobless_housenumber,
      familysize: jobless.jobless_familysize,
      livingstatus: jobless.jobless_livingstatus,
      birthplace: jobless.jobless_birthplace,
      family: jobless.jobless_family_status,
      martial: jobless.jobless_martial_status,
      disability: jobless.jobless_disability_status,
      reason: jobless.jobless_reason_tocome,
      identification: jobless.jobless_identification_card,
      training: jobless.jobless_training_cirtificate,
      evidence: jobless.jobless_evidence_card,
      priority: jobless.jobless_priority_evidence,
    }));
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(fetchJobless);
</script>
