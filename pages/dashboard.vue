<template>
  <div class="">
    <div class="grid grid-cols-3 gap-3 mr-3">
      <div class="grid gird-col-3 bg-[#f5f5f5] mt-5 rounded-md">
        <div class="flex flex-col justify-between py-4 pl-3">
          <div class="text-lg">Total Enterprise</div>
          <div class="">
            <p class="font-bold text-4xl mb-1">12,123</p>
            <p class="text-xs">1.23% increase from last month</p>
          </div>
        </div>
        <div class="col-start-2 col-span-2 -ml-2">
          <apexchart
            :options="chartOptions"
            :series="seriesData"
            type="line"
            height="160"
          />
        </div>
      </div>
      <div class="grid gird-col-3 bg-[#f5f5f5] mt-5 rounded-md">
        <div class="flex flex-col justify-between py-4 pl-3">
          <div class="text-lg">Total Workplace</div>
          <div class="">
            <p class="font-bold text-4xl mb-1">1,123</p>
            <p class="text-xs">1.23% increase from last month</p>
          </div>
        </div>
        <div class="col-start-2 col-span-2 -ml-2">
          <apexchart
            :options="chartOptions"
            :series="seriesData"
            type="line"
            height="160"
          />
        </div>
      </div>
      <div class="grid gird-col-3 bg-[#f5f5f5] mt-5 rounded-md">
        <div class="flex flex-col justify-between py-4 pl-3">
          <div class="text-lg">Total Jobless</div>
          <div class="">
            <p class="font-bold text-4xl mb-1">22,123</p>
            <p class="text-xs">1.23% increase from last month</p>
          </div>
        </div>
        <div class="col-start-2 col-span-2 -ml-2">
          <apexchart
            :options="chartOptions"
            :series="seriesData"
            type="line"
            height="160"
          />
        </div>
      </div>
    </div>
    <div class="grid gap-3 sm:grid-cols-1 xl:grid-cols-2 mr-3 mt-20">
      <div class="">
        <linegraph />
      </div>
      <div>
        <pichart class="mr-10" />
      </div>
    </div>
  </div>
</template>

<script setup>
import "@/assets/css/login_signup.css"; // Correct the path if necessary
import { useAuthStore } from "@/stores/auth";
import { ref, computed } from "vue";
import apexchart from "vue3-apexcharts";

definePageMeta({
  layout: "admin-dashboard",
});

const authStore = useAuthStore();

const chartOptions = ref({
  tooltip: {
    enabled: true,
  },
  chart: {
    id: "line-chart",
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  grid: {
    show: false,
  },
});

const seriesData = ref([
  {
    name: "series 1",
    data: [5, 10, 30, 40, 25, 40],
  },
]);
</script>
