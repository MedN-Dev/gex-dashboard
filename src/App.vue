<template>
  <div id="app">
    <Header/>
    <div class="main-wrapper">
      <Sidebar/>
      <Main/>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import("./components/Header/Header.vue"),
    Sidebar: () => import("./components/Sidebar/Sidebar.vue"),
    Main: () => import("./components/Main/Main.vue")
  }
};
</script>

<style lang="scss">
@import "./assets/reset/reset.css";

#app {
  margin: 100px auto 0 auto;
  width: 1580px;
  height: 70px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

.main-wrapper {
  display: flex;
  max-height: 950px;
  margin-bottom: 100px;
}
</style>
