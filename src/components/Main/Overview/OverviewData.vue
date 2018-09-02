<template>
  <div class="overview">
    <HeaderOverview/>
    <ContentOverview/>
  </div>
</template>

<script>
export default {
  name: "OverviewData",

  components: {
    HeaderOverview: () => import("./Header/HeaderOverview.vue"),
    ContentOverview: () => import("./Content/ContentOverview.vue")
  }
};
</script>

<style lang="scss" scoped>
.overview {
  display: flex;
  flex-direction: column;
}
</style>
