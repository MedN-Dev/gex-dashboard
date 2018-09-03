<template>
  <div class="header">
    <div class="header__title">
      Data overview
    </div>
    <div class="header__left">
      <HeaderProgress/>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderOverview",

  components: {
    HeaderProgress: () => import("./HeaderProgress.vue")
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1114px;
  height: 90px;
  margin: 0 auto;
  &__title {
    font-size: 21px;
    letter-spacing: 0.14px;
    color: #1a173b;
  }
}
</style>
