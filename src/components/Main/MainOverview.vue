<template>
  <div class="overview">
    <MainOverviewHeader/>
    <MainOverviewContent/>
    <MainOverviewFooter/>
  </div>
</template>

<script>
export default {
  name: "MainOverview",
  components: {
    MainOverviewHeader: () => import("./MainOverviewHeader.vue"),
    MainOverviewContent: () => import("./MainOverviewContent.vue"),
    MainOverviewFooter: () => import("./MainOverviewFooter.vue")
  }
};
</script>

<style lang="scss" scoped>
.overview {
  display: flex;
  flex-direction: column;
}
</style>
