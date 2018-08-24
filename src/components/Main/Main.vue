<template>
  <div class="main">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Main"
};
</script>

<style lang="scss" scoped>
.main {
  width: 1495px;
  height: auto;
  background-color: #fafbfc;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.3);
}
</style>
