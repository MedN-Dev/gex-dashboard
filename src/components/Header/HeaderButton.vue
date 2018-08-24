<template>
  <div class="button-wrapper">
    <button type="button" class="button-wrapper__btn">
      Download default users
    </button>
  </div>
</template>

<script>
export default {
  name: "HeaderButton"
};
</script>

<style lang="scss" scoped>
.button-wrapper {
  width: 700px;
  display: flex;
  justify-content: flex-end;
  &__btn {
    display: flex;
    align-items: center;
    height: 35px;
    border-radius: 4px;
    background-color: #0077ff;
    color: white;
    font-size: 14px;
    padding: 0 10px;
    border: none;
    cursor: pointer;
    outline: none;
    letter-spacing: 0.5px;
    &:hover {
      box-shadow: 0px 0px 10px 0px #9ea7fc;
    }
  }
}
</style>
