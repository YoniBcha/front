<template>
  <div>
    <div class="text-2xl text-gray-500 font-bold">
      City Subcity Woreda And Kebele Registration
    </div>
    <div class="flex justify-end gap-5 mt-10 p-5 bg-gray-100 rounded-lg">
      <div>
        <WorkplaceCityAddCity />
      </div>
      <div>
        <WorkplaceCityAddSubcity />
      </div>
      <div>
        <WorkplaceCityAddWoreda />
      </div>
      <div>
        <WorkplaceCityAddKebele />
      </div>
    </div>

    <div class="mt-10">
      <DataTableWorkplaceAddress
        :data-source="dataSourceFromParent"
        :columns="columns"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

definePageMeta({
  layout: "admin-dashboard",
});

const columns = [
  {
    title: "City Name",
    dataIndex: "city",
    key: "city",
    fixed: "left",
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
    title: "Subcity",
    dataIndex: "subcity",
    key: "subcity",
    customFilterDropdown: true,
    onFilter: (value, record) =>
      record.subcity.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          searchInput.value.focus();
        }, 100);
      }
    },
  },
  {
    title: "Woreda",
    dataIndex: "woreda",
    key: "woreda",
    customFilterDropdown: true,
    onFilter: (value, record) =>
      record.woreda.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          searchInput.value.focus();
        }, 100);
      }
    },
  },
  {
    title: "Kebele",
    dataIndex: "kebele",
    key: "kebele",
    customFilterDropdown: true,
    onFilter: (value, record) =>
      record.kebele.toString().toLowerCase().includes(value.toLowerCase()),
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
    width: "10%",
    fixed: "right",
  },
];

const dataSourceFromParent = ref([]);

const fetchData = async () => {
  try {
    const [cityResponse, subcityResponse, woredaResponse, kebeleResponse] =
      await Promise.all([
        fetch("http://127.0.0.1:8000/api/city"),
        fetch("http://127.0.0.1:8000/api/subcity"),
        fetch("http://127.0.0.1:8000/api/woreda"),
        fetch("http://127.0.0.1:8000/api/kebele"),
      ]);

    const [cityData, subcityData, woredaData, kebeleData] = await Promise.all([
      cityResponse.json(),
      subcityResponse.json(),
      woredaResponse.json(),
      kebeleResponse.json(),
    ]);

    dataSourceFromParent.value = cityData.map((city) => {
      const subcity = subcityData.find((s) => s.city_id === city.id) || {};
      const woreda = woredaData.find((w) => w.subcity_id === subcity.id) || {};
      const kebele = kebeleData.find((k) => k.woreda_id === woreda.id) || {};

      return {
        city: city.name,
        subcity: subcity.name || "",
        woreda: woreda.name || "",
        kebele: kebele.name || "",
      };
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(fetchData);
</script>
