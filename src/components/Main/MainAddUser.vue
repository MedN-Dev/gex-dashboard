<template>
  <div class="form">
    <div class="form__title">
      Add a new user
    </div>
    <div class="form__controls-wrapper">
      <div class="form__controls">
        <div class="controls-stack">
          <div class="wrapper-control type-email">
            <input
              type="text"
              v-model.trim="newUser.name"
              placeholder="Name"
              required
            />
          </div>
          <div class="wrapper-control type-email">
            <input
              type="email"
              v-model.trim="newUser.email"
              placeholder="Email"
            />
          </div>
        </div>
        <div class="controls-stack">
          <div class="wrapper-control type-email">
            <select
              class="form-control-select"
              type="text"
              v-model="newUser.dev"
            >
              <option disabled value="">Framework</option>
              <option>Vue</option>
              <option>React</option>
              <option>Angular</option>
            </select>
          </div>
          <div class="wrapper-control type-email">
            <select
              class="form-control-select"
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
        <div class="controls-stack">
          <div class="wrapper-control">
            <input
              class="id"
              type="text"
              :placeholder="`Your ID: ${newUser.id}`"
              readonly
            />
          </div>
          <div class="wrapper-control">
            <div class="button">
              <button type="button" class="editing" @click="saveNewUser">SAVE</button>
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
        name: "",
        email: "",
        dev: "",
        country: "",
        id: "",
        reg: ""
      }
    };
  },
  mounted() {
    this.randomID();
    this.date();
  },
  methods: {
    saveNewUser() {
      if (this.newUser.name.length) {
        this.$store.dispatch("ADD_USER", this.newUser);
        this.$router.push("/users");
      }
    },
    randomID() {
      this.newUser.id = Math.round(Math.random() * 36 ** 8).toString(36);
    },
    date() {
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
  &__controls-wrapper {
    width: 1402px;
    margin: 0 auto;
    border: 1px solid #ebedf8;
    border-radius: 4px;
    .form__controls {
      padding: 50px;
      .form-control-select {
        width: 214px;
        height: 39px;
      }
      .controls-stack {
        display: flex;
        .wrapper-control {
          padding: 10px;
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
          .button {
            width: 214px;
            height: 39px;
            display: flex;
            align-items: center;
            justify-content: center;
            .editing {
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
        .type-email input:invalid {
          border: 1px solid #f0166d;
          border-radius: 4px;
          padding: 10px;
          color: #8a96a0;
          outline: none;
          font-size: 15px;
          letter-spacing: 0.5px;
        }
        .type-email input:valid {
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
        .type-email select {
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
      }
    }
  }
}
</style>
