<template>
  <div class="user-list">
    <div class="user-list__title">All users in system</div>
    <div v-if="loadingUsers" class="loading">Loading...</div>
    <MainOverviewContentUsers v-else :users="users"/>
  </div>
</template>

<script>
import axios from "../../api/axios.js";

export default {
  name: "MainOverviewContentUserList",
  components: {
    MainOverviewContentUsers: () => import("./MainOverviewContentUsers.vue")
  },
  data() {
    return {
      users: [],
      loadingUsers: true
    };
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
</style>
