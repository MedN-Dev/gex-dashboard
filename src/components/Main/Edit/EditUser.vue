<template>
  <div class="form">
    <div class="form__title">
      Editing user:<span>{{ userName }}</span>
    </div>
    <div class="form__controls-wrapper">
      <div class="form__controls">
        <div class="controls-stack">
          <div class="wrapper-control">
            <input class="form-control" type="text" v-model="userName"/>
          </div>
          <div class="wrapper-control">
            <input class="form-control" type="text" v-model="userEmail"/>
          </div>
        </div>
      <div class="controls-stack">
        <div class="wrapper-control">
          <input class="form-control" type="text" v-model="userDev"/>
        </div>
        <div class="wrapper-control">
          <input class="form-control" type="text" v-model="userCountry"/>
        </div>
      </div>
      <div class="controls-stack">
        <div class="wrapper-control">
          <input
            class="id"
            type="text"
            :placeholder="`Your ID: ${id}`"
            readonly
          />
        </div>
        <div class="wrapper-control">
          <div class="button">
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
  name: "MainAddUser",
  data() {
    return {
      saved: false,
      editing: true
    };
  },
  computed: {
    id() {
      return parseInt(this.$route.params.id, 10);
    },
    userName: {
      get() {
        return this.$store.getters.USERS[this.id].name;
      },
      set(value) {
        this.saved = true;
        this.editing = false;
        this.$store.commit("UPDATE_NAME_USER", { value: value, id: this.id });
        setTimeout(this.changeSaveStatus, 300);
      }
    },
    userEmail: {
      get() {
        return this.$store.getters.USERS[this.id].email;
      },
      set(value) {
        this.saved = true;
        this.editing = false;
        this.$store.commit("UPDATE_EMAIL_USER", { value: value, id: this.id });
        setTimeout(this.changeSaveStatus, 300);
      }
    },
    userDev: {
      get() {
        return this.$store.getters.USERS[this.id].dev;
      },
      set(value) {
        this.saved = true;
        this.editing = false;
        this.$store.commit("UPDATE_DEV_USER", { value: value, id: this.id });
        setTimeout(this.changeSaveStatus, 300);
      }
    },
    userCountry: {
      get() {
        return this.$store.getters.USERS[this.id].country;
      },
      set(value) {
        this.saved = true;
        this.editing = false;
        this.$store.commit("UPDATE_COUNTRY_USER", {
          value: value,
          id: this.id
        });
        setTimeout(this.changeSaveStatus, 300);
      }
    }
  },
  methods: {
    changeSaveStatus() {
      this.saved = false;
      this.editing = true;
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
  &__controls-wrapper {
    width: 1402px;
    margin: 0 auto;
    border: 1px solid #ebedf8;
    border-radius: 4px;
    .form__controls {
      padding: 50px;
      .form-control {
        border: 1px solid #ebedf8;
        border-radius: 4px;
        color: #8a96a0;
        padding: 10px;
        outline: none;
        font-size: 15px;
        letter-spacing: 0.5px;
      }
      .controls-stack {
        display: flex;
        .wrapper-control {
          padding: 10px;
          .button {
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
        }
      }
    }
  }
}
</style>
