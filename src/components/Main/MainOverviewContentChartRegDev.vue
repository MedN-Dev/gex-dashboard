<template>
  <div class="chart">
    <MainOverviewContentChartRegDevChart/>
  </div>
</template>

<script>
export default {
  name: "MainOverviewContentChartRegDev",
  components: {
    MainOverviewContentChartRegDevChart: () =>
      import("./MainOverviewContentChartRegDevChart.vue")
  }
};
</script>

<style lang="scss" scoped>
.chart {
  width: 549px;
  border-right: 1px solid #ebedf8;
  border-left: 1px solid #ebedf8;
  border-top: 1px solid #ebedf8;
}
</style>
