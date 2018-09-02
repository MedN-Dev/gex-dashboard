<template>
  <div class="overview">
    <MainOverviewHeader/>
    <MainOverviewContent/>

  </div>
</template>

<script>
export default {
  name: "MainOverview",
  components: {
    MainOverviewHeader: () => import("./Header/HeaderOverview.vue"),
    MainOverviewContent: () => import("./Content/ContentOverview.vue")
  }
};
</script>

<style lang="scss" scoped>
.overview {
  display: flex;
  flex-direction: column;
}
</style>
