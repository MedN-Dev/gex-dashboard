<template>
  <div class="header">
    <HeaderLogo/>
    <HeaderNav/>
    <HeaderButton/>
  </div>
</template>

<script>
export default {
  name: "Header",
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
}
</style>
