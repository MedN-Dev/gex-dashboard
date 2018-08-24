<template>
  <div class="logo">
    <div class="logo__wrapper">
      <div class="logo__wrapper_dot"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HeaderLogo"
  };
</script>

<style lang="scss" scoped>
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 70px;
    &__wrapper {
      position: relative;
      width: 36px;
      height: 36px;
      background-color: #0077ff;
      border-radius: 36px;
      &_dot {
        position: absolute;
        width: 7px;
        height: 7px;
        background-color: white;
        border-radius: 7px;
        left: 17px;
        top: 20px;
      }
    }
  }
</style>
