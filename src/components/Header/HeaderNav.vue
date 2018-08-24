<template>
  <div class="nav">
    <div>
      <router-link to="/">Main</router-link> |
      <router-link to="/users">Users</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style lang="scss" scoped>
  .nav {
    display: flex;
    justify-content: center;
    width: 760px;
  }
</style>
