<template>
  <div class="overview-header">
    <div class="overview-header__title">
      Data overview
    </div>
    <div class="overview-header__left">
      <div class="progress">
        <div class="progress-bar" :style="getProgress"></div>
      </div>
      <div class="progress-text">
        in system <b>{{ this.$store.getters.users.length }}</b> users left
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainOverviewHeader",
  data() {
    return {
      maxUsers: 8
    };
  },
  computed: {
    getProgress() {
      let size = (this.$store.getters.users.length / this.maxUsers) * 100;
      return {
        width: size + "%"
      };
    }
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
  &__left {
    display: flex;
    align-items: center;
    font-size: 15px;
    .progress {
      width: 300px;
      display: flex;
      height: 5px;
      overflow: hidden;
      font-size: 0.75rem;
      background-color: #e9ecef;
      border-radius: 0.25rem;
      margin-right: 20px;
    }
    .progress-bar {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background-color: #0077ff;
      transition: width 0.6s ease;
    }
    .progress-text {
      color: #8a96a0;
      b {
        color: #1a173b;
      }
    }
  }
}
</style>
