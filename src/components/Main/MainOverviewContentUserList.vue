<template>
<div class="main-content">
  <div class="main-content__user-list">
    <div class="user-list">
      <div class="user-list__title">All users in system</div>
      <div v-if="loadingUsers" class="loading">Loading...</div>
      <MainOverviewContentUsers v-else :users="filteredRows"/>
    </div>
  </div>
  <div class="main-content__footer">
    <div class="footer">
      <div class="footer__info">Showing <b>1</b> to <b>20</b> of 25 users</div>
      <MainOverviewFooterPagination v-model.number="selectedPage"
                                    :per-page="rowsPerPage"
                                    :total="totalRows"/>
    </div>
  </div>
</div>
</template>

<script>
import axios from "../../api/axios.js";

export default {
  name: "MainOverviewContentUserList",
  components: {
    MainOverviewContentUsers: () => import("./MainOverviewContentUsers.vue"),
    MainOverviewFooterPagination: () =>
      import("./MainOverviewContentPagination.vue")
  },
  data() {
    return {
      users: [],
      loadingUsers: true,
      rowsPerPage: 2,
      selectedPage: 1
    };
  },
  computed: {
    totalRows() {
      return this.users.length;
    },
    filteredRows() {
      return this.users.filter((item, index) => {
        const startIndex = (this.selectedPage - 1) * this.rowsPerPage;
        const finalIndex = startIndex + this.rowsPerPage;
        return startIndex <= index && index < finalIndex;
      });
    }
  },
  watch: {
    rowsPerPage() {
      this.selectedPage = 1;
    }
  },
  mounted() {
    this.loadUsers();
  },
  methods: {
    loadUsers() {
      this.loadingUsers = true;
      axios
        .get("/users.json")
        .then(response => {
          this.loadingUsers = false;
          this.users = response.data;
        })
        .catch(error => console.error(error));
    }
  }
};
</script>

<style lang="scss" scoped>
.main-content {
  &__user-list {
    border: 1px solid #ebedf8;
  }
}
.user-list {
  display: flex;
  flex-direction: column;
  margin: 40px;
  .loading {
    margin: 150px auto 0 auto;
    font-size: 12px;
    color: white;
    background-color: #f0166d;
    opacity: 0.5;
    padding: 2px 5px;
    border-radius: 2px;
  }
  &__title {
    font-size: 21px;
    color: #1a173b;
  }
}
.main-content__footer {
  background-color: #fafbfc;
  .footer {
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
}
</style>
