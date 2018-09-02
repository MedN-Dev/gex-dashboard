<template>
  <div class="form">
    <div class="form__title">
      Editing user:<span>{{ userName }}</span>
    </div>
    <div class="form__controls">
      <div class="controls">
        <div class="control-stack">
          <div class="control-wrapper">
            <input
              class="input-style"
              type="text"
              v-model="userName"
            />
          </div>
          <div class="control-wrapper">
            <input
              class="input-style"
              type="text"
              v-model="userEmail"
            />
          </div>
        </div>
      <div class="control-stack">
        <div class="control-wrapper">
          <input
            class="input-style"
            type="text"
            v-model="userDev"
          />
        </div>
        <div class="control-wrapper">
          <input
            class="input-style"
            type="text"
            v-model="userCountry"
          />
        </div>
      </div>
      <div class="control-stack">
        <div class="control-wrapper">
          <div class="button-wrapper">
            <button class="button" @click="deleteUser">DELETE</button>
          </div>
        </div>
        <div class="control-wrapper">
          <div class="status-wrapper">
            <div :class="{saved, editing}">SAVED</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditUser",

  data() {
    return {
      saved: false,
      editing: true
    };
  },

  computed: {
    getId() {
      return parseInt(this.$route.params.id, 10);
    },
    getUser() {
      return this.$store.getters.USERS[this.getId];
    },
    userName: {
      get() {
        return this.$store.getters.USERS[this.getId].name;
      },
      set(value) {
        this.saved = true;
        this.editing = false;
        this.$store.commit("UPDATE_NAME_USER", {
          value: value,
          id: this.getId
        });
        setTimeout(this.changeStatus, 300);
      }
    },
    userEmail: {
      get() {
        return this.$store.getters.USERS[this.getId].email;
      },
      set(value) {
        this.saved = true;
        this.editing = false;
        this.$store.commit("UPDATE_EMAIL_USER", {
          value: value,
          id: this.getId
        });
        setTimeout(this.changeStatus, 300);
      }
    },
    userDev: {
      get() {
        return this.$store.getters.USERS[this.getId].dev;
      },
      set(value) {
        this.saved = true;
        this.editing = false;
        this.$store.commit("UPDATE_DEV_USER", {
          value: value,
          id: this.getId
        });
        setTimeout(this.changeStatus, 300);
      }
    },
    userCountry: {
      get() {
        return this.$store.getters.USERS[this.getId].country;
      },
      set(value) {
        this.saved = true;
        this.editing = false;
        this.$store.commit("UPDATE_COUNTRY_USER", {
          value: value,
          id: this.getId
        });
        setTimeout(this.changeStatus, 300);
      }
    }
  },

  methods: {
    changeStatus() {
      this.saved = false;
      this.editing = true;
    },
    deleteUser() {
      this.$store.dispatch("DELETE_USER", this.getUser);
      this.$router.push("/users");
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  &__title {
    display: flex;
    align-items: center;
    width: 1402px;
    height: 90px;
    margin: 0 auto;
    font-size: 21px;
    letter-spacing: 0.14px;
    color: #1a173b;
    span {
      color: #0077ff;
      margin-left: 10px;
    }
  }
  &__controls {
    width: 1402px;
    margin: 0 auto;
    border: 1px solid #ebedf8;
    border-radius: 4px;
    .controls {
      padding: 50px;
      .control-stack {
        display: flex;
        .control-wrapper {
          padding: 10px;
          .input-style {
            border: 1px solid #ebedf8;
            border-radius: 4px;
            color: #8a96a0;
            padding: 10px;
            outline: none;
            font-size: 15px;
            letter-spacing: 0.5px;
          }
          .status-wrapper {
            width: 214px;
            height: 38px;
            display: flex;
            align-items: center;
            .editing {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 214px;
              height: 30px;
              border-radius: 4px;
              background: repeating-linear-gradient(
                45deg,
                white,
                white 10px,
                #0077ff 10px,
                #0077ff 20px
              );
              color: white;
              font-size: 15px;
              letter-spacing: 0.5px;
            }
            .saved {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 214px;
              height: 30px;
              border-radius: 4px;
              background-color: #0077ff;
              color: white;
              font-size: 15px;
              letter-spacing: 0.5px;
            }
          }
          .id {
            color: #8a96a0;
            outline: none;
            font-size: 15px;
            letter-spacing: 0.5px;
            border: 1px solid #ebedf8;
            border-radius: 4px;
            padding: 10px;
            &::placeholder {
              color: #c0c5d2;
            }
          }
          .button-wrapper {
            width: 214px;
            height: 38px;
            display: flex;
            align-items: center;
            .button {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 214px;
              height: 30px;
              border-radius: 4px;
              background: repeating-linear-gradient(
                45deg,
                white,
                white 10px,
                #f0166d 10px,
                #f0166d 20px
              );
              color: white;
              font-size: 15px;
              letter-spacing: 0.5px;
              border: none;
              cursor: pointer;
              &:hover {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 214px;
                height: 30px;
                border-radius: 4px;
                background: #f0166d;
                color: white;
                font-size: 15px;
                letter-spacing: 0.5px;
                border: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
