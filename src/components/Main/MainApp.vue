<template>
  <div class="main">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "MainApp"
};
</script>

<style lang="scss" scoped>
.main {
  width: 1184px;
  height: auto;
  background-color: #fafbfc;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
}
</style>
