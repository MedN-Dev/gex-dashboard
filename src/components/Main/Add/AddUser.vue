<template>
  <div class="form">
    <div class="form__title">
      Add a new user: <span>{{ newUser.name }}</span>
    </div>
    <div class="form__controls">
      <div class="controls">
        <div class="control-stack">
          <div class="control-wrapper validation">
            <input
              type="text"
              v-model.trim="newUser.name"
              placeholder="Name"
              required
            />
          </div>
          <div class="control-wrapper validation">
            <input
              type="email"
              v-model.trim="newUser.email"
              placeholder="Email"
            />
          </div>
        </div>
        <div class="control-stack">
          <div class="control-wrapper">
            <select
              class="select-style"
              type="text"
              v-model="newUser.dev"
            >
              <option disabled value="">Framework</option>
              <option>Vue.js</option>
              <option>React.js</option>
              <option>Angular</option>
            </select>
          </div>
          <div class="control-wrapper">
            <select
              class="select-style"
              type="text"
              v-model="newUser.country"
              placeholder="Country"
            >
              <option disabled value="">Country</option>
              <option>Russia</option>
              <option>Czech</option>
              <option>Thailand</option>
              <option>USA</option>
            </select>
          </div>
        </div>
        <div class="control-stack">
          <div class="control-wrapper">
            <input
              class="readonly"
              type="text"
              :placeholder="`Your ID: ${newUser.id}`"
              readonly
            />
          </div>
          <div class="control-wrapper">
            <div class="button-wrapper">
              <button type="button" class="button" @click="saveNewUser">SAVE</button>
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
      newUser: {
        id: "",
        reg: "",
        dev: "",
        name: "",
        email: "",
        country: ""
      }
    };
  },

  mounted() {
    this.setId();
    this.setDate();
  },

  methods: {
    saveNewUser() {
      if (this.newUser.name.length) {
        this.$store.dispatch("ADD_USER", this.newUser);
        this.$router.push("/users");
      }
    },
    setId() {
      this.newUser.id = this.$store.getters.USERS.length;
    },
    setDate() {
      this.newUser.reg = new Date().toLocaleDateString();
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
        .validation input:invalid {
          border: 1px solid #0077ff;
          border-radius: 4px;
          padding: 10px;
          color: #8a96a0;
          outline: none;
          font-size: 15px;
          letter-spacing: 0.5px;
        }
        .validation input:valid {
          border: 1px solid #ebedf8;
          border-radius: 4px;
          padding: 10px;
          color: #8a96a0;
          outline: none;
          font-size: 15px;
          letter-spacing: 0.5px;
          &::placeholder {
            color: #8a96a0;
          }
        }
        .control-wrapper {
          padding: 10px;
          .select-style {
            width: 214px;
            height: 39px;
            border: 1px solid #ebedf8;
            border-radius: 4px;
            padding: 10px;
            color: #8a96a0;
            outline: none;
            font-size: 15px;
            letter-spacing: 0.5px;
            &::placeholder {
              color: #8a96a0;
            }
          }
          .readonly {
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
            height: 39px;
            display: flex;
            align-items: center;
            justify-content: center;
            .button {
              display: flex;
              justify-content: center;
              align-items: center;
              border: none;
              outline: none;
              cursor: pointer;
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
              &:hover {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 214px;
                height: 30px;
                border-radius: 4px;
                background: #0077ff;
                color: white;
                font-size: 15px;
                letter-spacing: 0.5px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
