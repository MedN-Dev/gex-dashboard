<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import("./components/Header/Header.vue")
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/reset/reset.css";

#app {
  margin: 100px auto;
  width: 1580px;
  height: 70px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
</style>
