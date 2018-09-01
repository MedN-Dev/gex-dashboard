<template>
  <div class="container">
    <canvas ref="canvas" width="900" height="400"></canvas>
  </div>
</template>

<script>
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  name: "MainOverviewContentChartRegDevChart",
  extends: Line,
  mixins: [reactiveProp],
  props: ["options"],
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
};
</script>

<style lang="scss" scoped>
</style>
