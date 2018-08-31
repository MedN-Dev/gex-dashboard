<template>
  <div class="overview-header">
    <div class="overview-header__title">
      Data overview
    </div>
    <div class="overview-header__left">
      <MainOverviewHeaderProgress/>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainOverviewHeader",
  components: {
    MainOverviewHeaderProgress: () => import("./MainOverviewHeaderProgress.vue")
  }
};
</script>

<style lang="scss" scoped>
.overview-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1402px;
  height: 90px;
  margin: 0 auto;
  &__title {
    font-size: 21px;
    letter-spacing: 0.14px;
    color: #1a173b;
  }
}
</style>
