<template>
  <div class="flex justify-between mt-5 mb-10">
    <div class="text-2xl text-[#0a58a4] font-bold">Enterprise List</div>
    <div class="text-sm text-gray-400 font-bold">
      The enterprise that fullfill the reqirement will appear here
    </div>
  </div>
  <div>
    <EnterpriseListTableEnterpriseTable :data="dataSourceFromParent" :columns="columns" />
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
    dataIndex: "city",
    key: "city",
    customFilterDropdown: true,
    onFilter: (value, record) =>
      record.city.toString().toLowerCase().includes(value.toLowerCase()),
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
const dataSourceFromParent = ref([]);

const fetchEnterprise = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/enterprise", {
      method: "GET",
    });
    const data = await response.json();
    dataSourceFromParent.value = data.map((enterprise, index) => ({
      key: index + 1, 
      name: enterprise.enterprise_name,
      type: enterprise.enterprise_type,
      sector: enterprise.enterprise_sector,
      address: enterprise.enterprise_city,
      city: enterprise.enterprise_city,
      kebele: enterprise.enterprise_kebele,
      subcity: enterprise.enterprise_subcity,
      city: enterprise.enterprise_city,
      status: enterprise.enterprise_status,
      phonenumber: enterprise.enterprise_phone_number,
      email: enterprise.enterprise_email,
      username: enterprise.enterprise_username,
      password: enterprise.enterprise_password,
      enterprise_manager_name: enterprise.enterprise_manager_name,
      enterprise_stock_price: enterprise.enterprise_stock_price,
      enterprise_taxpayer_identification_card:
        enterprise.enterprise_taxpayer_identification_card,
      enterprise_taxpayer_identification_number:
        enterprise.enterprise_taxpayer_identification_number,
      enterprise_approved_trade_name: enterprise.enterprise_approved_trade_name,
      enterprise_professional_qualification_certification:
        enterprise.enterprise_professional_qualification_certification,
      enterprise_business_plan: enterprise.enterprise_business_plan,
      enterprise_ownership_ofbusiness_adress_and_approved_lease:
        enterprise.enterprise_ownership_ofbusiness_adress_and_approved_lease,
      enterprise_Price_per_share: enterprise.enterprise_Price_per_share,
      enterprise_Approved_bylaws_of_establishment:
        enterprise.enterprise_Approved_bylaws_of_establishment,
      enterprise_Business_license: enterprise.enterprise_Business_license,
      enterprise_Bylaws_of_shares: enterprise.enterprise_Bylaws_of_shares,
      enterprise_priority_evidence: enterprise.enterprise_priority_evidence,
    }));
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(fetchEnterprise);
</script>





 