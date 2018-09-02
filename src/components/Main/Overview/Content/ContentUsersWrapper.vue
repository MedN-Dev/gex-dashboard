<template>
  <div class="content">
    <div class="content__users">
      <div class="users">
        <div class="title">All users in system</div>
        <div v-if="loader" class="loader">Loading...</div>
        <ContentUsers
          v-else
          :users="filteredUsers"
          @deleteUser="deleteUser"
        />
      </div>
      <div v-show="getStarterStatus" class="starter">
        <button class="button" @click="loadUsers">
          Download users
        </button>
      </div>
    </div>
    <div class="content__footer">
      <div class="footer">
        <ContentUsersPagination
          v-model.number="selectedPage"
          :per-page="usersPerPage"
          :total="getUsers.length"
        />
        <div class="info">
          <a href="https://github.com/heysafronov/gex-dashboard" target="_blank">
            <img src="../../../../assets/img/gh.png">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentUsersWrapper",

  components: {
    ContentUsers: () => import("./ContentUsers.vue"),
    ContentUsersPagination: () => import("./ContentUsersPagination.vue")
  },

  data() {
    return {
      loader: null,
      usersPerPage: 2,
      selectedPage: 1
    };
  },

  computed: {
    getStarterStatus() {
      return this.$store.getters.STARTER;
    },
    getUsers() {
      return this.$store.getters.USERS;
    },
    filteredUsers() {
      return this.getUsers.filter((item, index) => {
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
    async loadUsers() {
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
.content {
  &__users {
    border: 1px solid #ebedf8;
    .users {
      display: flex;
      flex-direction: column;
      margin: 40px;
      .loader {
        margin: 0 auto;
        font-size: 12px;
        color: white;
        background-color: #0077ff;
        padding: 2px 5px;
        border-radius: 2px;
      }
      .title {
        font-size: 21px;
        color: #1a173b;
      }
    }
    .starter {
      display: flex;
      justify-content: center;
      margin: 40px;
      .button {
        font-size: 15px;
        padding: 9px 15px;
        color: white;
        background: #f0166d;
        transition: all 0.3s linear;
        animation-iteration-count: infinite;
        border: none;
        cursor: pointer;
        border-radius: 4px;
        animation-duration: 1s;
        animation-name: shrink;
        @keyframes shrink {
          0% {
            transform: scaleY(1);
          }
          49% {
            transform: scale(0.9, 0.9);
          }
          100% {
            transform: scaleY(1);
          }
        }
        &:hover {
          background: repeating-linear-gradient(
            45deg,
            white,
            white 10px,
            #f0166d 10px,
            #f0166d 20px
          );
        }
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
      .info {
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
