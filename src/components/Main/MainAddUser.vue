<template>
  <div class="form">
    <div class="form__title">
      Add a new user
    </div>
    <div class="form__controls-wrapper">
      <div class="form__controls">
        <div class="controls-stack">
          <div class="wrapper-control">
            <input
              class="form-control"
              type="text"
              v-model="newUser.name"
              placeholder="Name"
            />
          </div>
          <div class="wrapper-control">
            <input
              class="form-control"
              type="email"
              v-model="newUser.email"
              placeholder="Email"
            />
          </div>
        </div>
        <div class="controls-stack">
          <div class="wrapper-control">
            <input
              class="form-control"
              type="text"
              v-model="newUser.dev"
              placeholder="Framework"
            />
          </div>
          <div class="wrapper-control">
            <input
              class="form-control"
              type="text"
              v-model="newUser.country"
              placeholder="Country"
            />
          </div>
        </div>
        <div class="controls-stack">
          <div class="wrapper-control">
            <input
              class="form-control"
              type="text"
              placeholder="Your ID: 324234"
              readonly
            />
          </div>
          <div class="wrapper-control">
            <button type="button" class="editing">SAVE</button>
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
        country: ""
      }
    };
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
        padding: 10px;
        color: #8a96a0;
        outline: none;
        font-size: 15px;
        letter-spacing: 0.5px;
        &::placeholder {
          color: #c0c5d2;
        }
      }
      .controls-stack {
        display: flex;
        .wrapper-control {
          padding: 10px;
          .editing {
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            outline: none;
            cursor: pointer;
            width: 214px;
            height: 38px;
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
              height: 38px;
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
</style>
