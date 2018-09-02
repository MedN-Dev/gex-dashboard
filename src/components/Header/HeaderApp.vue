<template>
  <div class="header">
    <HeaderLogo/>
    <HeaderNav/>
    <HeaderButton/>
  </div>
</template>

<script>
export default {
  name: "HeaderApp",

  components: {
    HeaderLogo: () => import("./HeaderLogo.vue"),
    HeaderNav: () => import("./HeaderNav.vue"),
    HeaderButton: () => import("./HeaderButton.vue")
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  background-color: white;
  width: 1580px;
  height: 70px;
  border-bottom: 1px solid #ebedf8;
  box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.3);
}
</style>
