<template>
  <div class="content">
    <div class="content__charts">
      <ContentChartCountries/>
      <ContentChartDev/>
    </div>
    <ContentUsersWrapper/>
  </div>
</template>

<script>
export default {
  name: "ContentOverview",

  components: {
    ContentChartCountries: () => import("./ContentChartCountries.vue"),
    ContentChartDev: () => import("./ContentChartDev.vue"),
    ContentUsersWrapper: () => import("./ContentUsersWrapper.vue")
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 1401px;
  border-radius: 4px;
  background-color: #ffffff;
  margin: 0 auto;
  &__charts {
    display: flex;
    height: 270px;
  }
}
</style>
