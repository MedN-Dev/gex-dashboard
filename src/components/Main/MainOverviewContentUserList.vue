<template>
  <div class="user-list">
    <div class="user-list__title">All users in system</div>
    <div class="user-list__titles">
      <div class="title">Name</div>
      <div class="title">Email</div>
      <div class="title">Registration</div>
      <div class="title">Developer</div>
      <div class="title">Country</div>
      <div class="title">Actions</div>
    </div>
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
  margin: 50px;
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
  &__titles {
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    .title {
      color: #b4bac6;
      font-size: 10px;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 1.49px;
    }
  }
}
</style>
