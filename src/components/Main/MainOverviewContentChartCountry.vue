<template>
  <div class="chart">
    <div class="chart__country"></div>
    <div class="chart__total"></div>
  </div>
</template>

<script>
export default {
  name: "MainOverviewContentChartCountry"
};
</script>

<style lang="scss" scoped>
.chart {
  display: flex;
  &__country {
    width: 549px;
    border-right: 1px solid #ebedf8;
    border-top: 1px solid #ebedf8;
  }
  &__total {
    width: 301px;
    border-right: 1px solid #ebedf8;
    border-top: 1px solid #ebedf8;
  }
}
</style>
