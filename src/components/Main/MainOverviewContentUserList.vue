<template>
  <div class="user-list">
    <div class="user-list__title">All users in system</div>
    <div class="user-list__titles">
      <div class="title">Name</div>
      <div class="title">Email</div>
      <div class="title">Registration</div>
      <div class="title">Developer</div>
      <div class="title">Country</div>
      <div class="title">Actions</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainOverviewContentUserList"
};
</script>

<style lang="scss" scoped>
.user-list {
  display: flex;
  flex-direction: column;
  margin: 50px;
  &__title {
    font-size: 21px;
    color: #1a173b;
  }
  &__titles {
    display: flex;
    justify-content: space-between;
    .title {
      color: #b4bac6;
      font-size: 10px;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 1.49px;
    }
  }
}
</style>
