<template>
  <div id="app">
    <transition appear name="modal">
      <div v-if="modal" class="modal" key="modal">
        <div class="modal__text">This app is for full-hd resolution 😎</div>
        <button type="button" class="modal__btn" @click="showModal">Open</button>
      </div>
      <div v-else key="app">
        <TheHeader/>
        <div class="main-wrapper">
          <TheSidebar/>
          <TheMain/>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  components: {
    TheHeader: () => import("./components/Header/TheHeader.vue"),
    TheSidebar: () => import("./components/Sidebar/TheSidebar.vue"),
    TheMain: () => import("./components/Main/TheMain.vue")
  },
  data() {
    return {
      modal: true
    };
  },
  methods: {
    showModal() {
      this.modal = false;
    }
  }
};
</script>

<style lang="scss">
@import "./assets/reset/reset.css";

#app {
  margin: 100px auto 0 auto;
  width: 1580px;
}
.modal {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 300px;
  background-color: white;
  border-radius: 4px;
  margin: 0 auto;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
  &__btn {
    padding: 8px 15px;
    border-radius: 4px;
    background-color: #0077ff;
    color: white;
    font-size: 14px;
    border: none;
    cursor: pointer;
    outline: none;
    letter-spacing: 0.5px;
    margin: 0 0 20px 0;
    &:hover {
      box-shadow: 0px 0px 10px 0px #9ea7fc;
    }
  }
  &__text {
    color: #8a96a0;
    margin: 20px 0;
  }
  &-enter-active {
    transition: all 0.3s ease;
  }
  &-leave-active {
    transition: all 0.01s cubic-bezier(1, 0.5, 0.8, 1);
  }
  &-enter {
    transform: translateX(10px);
    opacity: 0;
  }
  &-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
}
.main-wrapper {
  display: flex;
  margin-bottom: 100px;
}
</style>
