<template>
<div>
  <div v-for="user in users" :key="user.id" class="users">
    <div class="item">{{ user.name }}</div>
    <div class="item">{{ user.email }}</div>
    <div class="item">{{ user.reg }}</div>
    <div class="item">{{ user.dev }}</div>
    <div class="item">{{ user.country }}</div>
    <div class="item">
      <button type="button">Edit</button>
      <button type="button">Delete</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "MainOverviewContentUsers",
  props: {
    users: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.users {
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  .item {
    margin: 15px 0 30px 0;

  }
}
</style>
