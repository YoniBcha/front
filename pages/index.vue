<template>
  <div class="mt-20 ml-5">
    <div class="grid grid-cols-3 gap-3 mr-3">
      <div class="grid gird-col-3 bg-[#f5f5f5] mt-5 rounded-md">
        <div class="flex flex-col justify-between py-4 pl-3">
          <div class="text-xl">Total Enterprise</div>
          <div class="">
            <p class="font-bold text-5xl mb-1">12,123</p>
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
          <div class="text-xl">Total Workplace</div>
          <div class="">
            <p class="font-bold text-5xl mb-1">1,123</p>
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
          <div class="text-xl">Total Jobless</div>
          <div class="">
            <p class="font-bold text-5xl mb-1">22,123</p>
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

<script>
import apexchart from "vue3-apexcharts";

export default {
  name: "DashboardPage",
  components: { apexchart },
  data() {
    return {
      chartOptions: {
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
      },
      seriesData: [
        {
          name: "serios 1",
          data: [5, 10, 30, 40, 25, 40],
        },
      ],
    };
  },
};
</script>
