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
          name: "Series 1",
          data: [190, 150, 35, 50, 49, 60, 70, 91, 10],
        },
        {
          name: "Series 2",
          data: [23, 101, 32, 19, 37, 28, 105, 55, 159],
        },
        {
          name: "Series 3",
          data: [45, 70, 50, 80, 150, 85, 75, 95, 110],
        },
      ],
    };
  },
});
</script>