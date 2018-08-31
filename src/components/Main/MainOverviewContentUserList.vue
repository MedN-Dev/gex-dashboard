<template>
<div class="main-content">
  <div class="main-content__user-list">
    <div class="user-list">
      <div class="user-list__title">All users in system</div>
      <div v-if="loader" class="loading">Loading...</div>
      <MainOverviewContentUsers
        v-else
        :users="filteredUsers"
        @deleteUser="deleteUser"
      />
    </div>
    <div v-show="this.$store.getters.STARTER" class="starter">
      <button class="btn-starter" @click="getUsers">
        Start
      </button>
    </div>
  </div>
  <div class="main-content__footer">
    <div class="footer">
      <MainOverviewFooterPagination
        v-model.number="selectedPage"
        :per-page="usersPerPage"
        :total="totalUsers"
      />
      <div class="footer__info">
        <a href="https://github.com/heysafronov/gex-dashboard" target="_blank">
          <img src="http://safronov.io/trash/gh.png">
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "MainOverviewContentUserList",
  components: {
    MainOverviewContentUsers: () => import("./MainOverviewContentUsers.vue"),
    MainOverviewFooterPagination: () =>
      import("./MainOverviewContentPagination.vue")
  },
  data() {
    return {
      loader: null,
      usersPerPage: 2,
      selectedPage: 1
    };
  },
  computed: {
    totalUsers() {
      return this.$store.getters.USERS.length;
    },
    filteredUsers() {
      return this.$store.getters.USERS.filter((item, index) => {
        const startIndex = (this.selectedPage - 1) * this.usersPerPage;
        const finalIndex = startIndex + this.usersPerPage;
        return startIndex <= index && index < finalIndex;
      });
    }
  },
  watch: {
    usersPerPage() {
      this.selectedPage = 1;
    }
  },
  methods: {
    async getUsers() {
      this.$store.dispatch("UPDATE_STARTER");
      this.loader = true;
      await this.$store.dispatch("GET_USERS");
      this.loader = false;
    },
    deleteUser(user) {
      this.$store.dispatch("DELETE_USER", user);
    }
  }
};
</script>

<style lang="scss" scoped>
.main-content {
  &__user-list {
    border: 1px solid #ebedf8;
    .user-list {
      display: flex;
      flex-direction: column;
      margin: 40px;
      .loading {
        margin: 0 auto;
        font-size: 12px;
        color: white;
        background-color: #0077ff;
        padding: 2px 5px;
        border-radius: 2px;
      }
      &__title {
        font-size: 21px;
        color: #1a173b;
      }
    }
    .starter {
      display: flex;
      justify-content: center;
      margin: 40px;
      .btn-starter {

      }
    }
  }
  &__footer {
    background-color: #fafbfc;
    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 1402px;
      margin: 0 auto;
      height: 110px;
      &__info {
        display: flex;
        color: #1a173b;
        font-size: 15px;
        img {
          height: 23px;
        }
      }
    }
  }
}
</style>
