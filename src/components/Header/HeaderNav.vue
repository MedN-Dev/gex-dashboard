<template>
  <div class="nav">
    <router-link class="nav__link" to="/" exact>Overview</router-link>
    <router-link class="nav__link" to="/users">Users</router-link>
    <router-link class="nav__link" to="/add">Add user</router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderNav"
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: flex-end;
  width: 745px;
  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    margin: 0 55px;
    text-decoration: none;
    color: #8a96a0;
    font-size: 15px;

    letter-spacing: 0.5px;
    &:hover {
      color: #0077ff;
    }
    &-active {
      border-bottom: 2px solid #0077ff;
      color: #0077ff;
    }
  }
}
</style>
