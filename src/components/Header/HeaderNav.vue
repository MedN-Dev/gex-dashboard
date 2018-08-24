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
  justify-content: center;
  width: 760px;
  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    margin: 0 30px;
    text-decoration: none;
    color: #8a96a0;
    font-size: 15px;

    letter-spacing: 0.5px;
    &:hover {
      color: #1880e7;
    }
    &_active {
      border-bottom: 2px solid #1880e7;
      color: #1880e7;
    }
  }
}
</style>
