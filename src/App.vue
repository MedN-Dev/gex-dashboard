<template>
  <div id="app">
    <TheHeader/>
    <div class="main-wrapper">
      <TheSidebar/>
      <TheMain/>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    TheHeader: () => import("./components/Header/TheHeader.vue"),
    TheSidebar: () => import("./components/Sidebar/TheSidebar.vue"),
    TheMain: () => import("./components/Main/TheMain.vue")
  }
};
</script>

<style lang="scss">
@import "./assets/reset/reset.css";

#app {
  margin: 100px auto 0 auto;
  width: 1580px;
}

.main-wrapper {
  display: flex;
  max-height: 950px;
  margin-bottom: 100px;
}
</style>
