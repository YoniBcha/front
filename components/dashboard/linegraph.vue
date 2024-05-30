<template>
  <div>
    <apexchart
      :options="chartOptions"
      :series="series"
      type="line"
      height="350"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ApexCharts from "vue3-apexcharts";

export default defineComponent({
  name: "LineGraph",
  components: {
    Apexchart: ApexCharts,
  },
  data() {
    return {
      chartOptions: {
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
          ],
        },
        yaxis: {
          title: {
            text: "Value",
          },
        },
      },
      series: [
        {
          name: "Enterprises",
          data: [2, 5, 5, 6, 5, 12, 13, 14, 15],
        },
        {
          name: "workplaces",
          data: [5, 6, 9, 11, 7, 6, 6, 5, 6],
        },
        {
          name: "Jobless",
          data: [5, 10, 12, 14, 15, 17, 18, 20, 20],
        },
      ],
    };
  },
});
</script>