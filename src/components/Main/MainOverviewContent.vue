<template>
  <div class="overview-content">
    <div class="overview-content__charts">
      <MainOverviewContentChartRegDev/>
      <MainOverviewContentChartCountry/>
    </div>
    <MainOverviewContentUserList/>
  </div>
</template>

<script>
export default {
  name: "MainOverviewContent",
  components: {
    MainOverviewContentChartRegDev: () =>
      import("./MainOverviewContentChartRegDev.vue"),
    MainOverviewContentChartCountry: () =>
      import("./MainOverviewContentChartCountry.vue"),
    MainOverviewContentUserList: () =>
      import("./MainOverviewContentUserList.vue")
  }
};
</script>

<style lang="scss" scoped>
.overview-content {
  width: 1401px;
  border-radius: 4px;
  /*border: 1px solid #ebedf8;*/
  background-color: #ffffff;
  margin: 0 auto;
  &__charts {
    display: flex;
    height: 270px;
  }
}
</style>
