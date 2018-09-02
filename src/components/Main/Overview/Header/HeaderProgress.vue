<template>
  <div class="progress-wrapper">
    <div class="progress">
      <div class="progress-bar" :style="getWidth">
      </div>
    </div>
    <div class="progress-text">
        in system <b>{{ getUsersLength }}</b> users left
    </div>
  </div>
</template>

<script>
export default {
  name: "MainOverviewHeaderProgress",
  data() {
    return {
      maxUsers: 12
    };
  },
  computed: {
    getWidth() {
      let usersLength = this.$store.getters.USERS.length;
      let size = (usersLength / this.maxUsers) * 100;
      return {
        width: size + "%"
      };
    },
    getUsersLength() {
      return this.$store.getters.USERS.length;
    }
  }
};
</script>

<style lang="scss" scoped>
.progress-wrapper {
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
  }
}
.progress-text {
  color: #8a96a0;
  b {
    color: #1a173b;
  }
}
</style>
