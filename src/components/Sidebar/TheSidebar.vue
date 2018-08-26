<template>
  <div class="sidebar">
    <div class="sidebar__bs"></div>
    <div class="sidebar__item dashboard">
      <i class="material-icons">dashboard</i>
    </div>
    <div class="sidebar__item forum">
      <i class="material-icons">forum</i>
    </div>
    <div class="sidebar__item">
      <i class="material-icons">cloud</i>
    </div>
    <div class="sidebar__item">
      <i class="material-icons">email</i>
    </div>
    <div class="sidebar__item">
      <i class="material-icons">settings</i>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSidebar"
};
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  height: auto;
  background-color: white;
  width: 85px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.3);
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 25px;
    color: #c0c5d2;
    width: 82px;
    height: 85px;
    cursor: pointer;
    &:hover {
      color: #0077ff;
    }
  }
  &__bs {
    height: 50px;
  }
}

.dashboard {
  border-right: 3px solid #0077ff;
  color: #0077ff;
}
</style>
