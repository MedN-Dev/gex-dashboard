<template>
  <transition appear name="modal">
    <div v-if="modal" class="modal" key="modal">
      <div class="modal__text">This app is for full-hd resolution 😎</div>
      <button class="modal__btn" type="button" @click="showModal">Open</button>
    </div>
    <div v-else class="wrapper" key="app">
      <HeaderApp/>
      <div class="main-wrapper">
        <SidebarApp/>
        <MainApp/>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalBox",

  components: {
    HeaderApp: () => import("../components/Header/HeaderApp.vue"),
    SidebarApp: () => import("../components/Sidebar/SidebarApp.vue"),
    MainApp: () => import("../components/Main/MainApp.vue")
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
@import "../assets/reset/index.css";

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

.wrapper {
  width: 1270px;
  margin: 0 auto;
  .main-wrapper {
    display: flex;
  }
}
</style>
