<template>
  <div class="header">
    <Logo/>
    <Nav/>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {
    Logo: () => import("./Logo.vue"),
    Nav: () => import("./Nav.vue")
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
