<template>
  <div class="overview-footer">
    <div class="overview-footer__info">Showing <b>1</b> to <b>20</b> of 25 users</div>
   <MainOverviewFooterPagination/>
  </div>
</template>

<script>
export default {
  name: "MainOverviewFooter",
  components: {
    MainOverviewFooterPagination: () =>
      import("./MainOverviewFooterPagination.vue")
  }
};
</script>

<style lang="scss" scoped>
.overview-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1402px;
  margin: 0 auto;
  height: 110px;
  &__info {
    color: #8a96a0;
    font-size: 15px;
    b {
      color: #1a173b;
    }
  }
}
</style>
