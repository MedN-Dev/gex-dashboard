<template>
  <div class="users">
    <div class="users__title">
      <div class="title">
        All users in system
      </div>
      <HeaderProgress/>
    </div>
    <div class="users__list">
      <div class="list">
        <div class="table">
          <ContentUsers
            :users="getUsers"
            @deleteUser="deleteUser"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserList",

  components: {
    ContentUsers: () => import("../Overview/Content/ContentUsers.vue"),
    HeaderProgress: () => import("../Overview/Header/HeaderProgress.vue")
  },

  computed: {
    getUsers() {
      return this.$store.getters.USERS;
    }
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
    justify-content: space-between;
    width: 1114px;
    height: 90px;
    margin: 0 auto;
    .title {
      display: flex;
      align-items: center;
      font-size: 21px;
      letter-spacing: 0.14px;
      color: #1a173b;
    }
  }
  &__list {
    width: 1114px;
    margin: 0 auto;
    .list {
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
