<template>
  <div>
    <apexchart
      :options="chartOptions"
      :series="series"
      type="pie"
      height="350"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ApexCharts from "vue3-apexcharts";

export default defineComponent({
  name: "PiChart",
  components: {
    Apexchart: ApexCharts,
  },
  data() {
    return {
      chartOptions: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      },
      series: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    };
  },
});
</script>
