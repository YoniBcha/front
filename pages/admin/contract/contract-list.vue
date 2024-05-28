<template>
  <div class="flex justify-between mt-5 mb-10">
    <div class="text-2xl text-[#0a58a4] font-bold">Contract List</div>
    <div class="text-sm text-gray-400 font-bold">
      The contract between the enterprise and the office is listed here
    </div>
  </div>
  <div>
    <DataTableListTable
      :data="dataSourceFromParent"
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
    title: "operation",
    dataIndex: "operation",
    fixed: "right",
    width: "8%",
  },
];

const dataSourceFromParent = ref([
  {
    key: "1",
    sex: "M",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    status: ["pass"],
    phonenumber: "+(251)567-48-47",
    email: "test44@gmail.com",
  },
  {
    key: "2",
    name: "Joe Black",
    sex: "M",
    age: 42,
    address: "London No. 1 Lake Park",
    status: ["loser"],
    phonenumber: "+(251)56657567-48-47",
    email: "test44@gmasgfdil.com",
  },
  {
    key: "3",
    name: "Jim Green",
    sex: "M",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    status: ["pass"],
    phonenumber: "+(251)567-5675-47",
    email: "test44@gmghail.com",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    sex: "F",
    address: "London No. 2 Lake Park",
    status: ["pending"],
    phonenumber: "+(251)5656757",
    email: "test44@gmail.djghjcom",
  },
]);
</script>
