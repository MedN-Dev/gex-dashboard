<template>
  <div class="users">
    <div class="users__title">
      All users in system
    </div>
    <div class="users__list">
      <div class="users__list-wrapper">
        <div class="table">
          <MainOverviewContentUsers
            :users="this.$store.getters.USERS"
            @deleteUser="deleteUser"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainUsers",
  components: {
    MainOverviewContentUsers: () => import("./MainOverviewContentUsers.vue")
  },
  methods: {
    deleteUser(user) {
      this.$store.dispatch("DELETE_USER", user);
    }
  }
};
</script>

<style lang="scss" scoped>
.users {
  &__title {
    display: flex;
    align-items: center;
    width: 1402px;
    height: 90px;
    margin: 0 auto;
    font-size: 21px;
    letter-spacing: 0.14px;
    color: #1a173b;
  }
  &__list {
    width: 1402px;
    margin: 0 auto;
    &-wrapper {
      border: 1px solid #ebedf8;
      border-radius: 4px;
      margin-bottom: 40px;
      .table {
        margin: 10px 0 20px 20px;
      }
    }
  }
}
</style>
