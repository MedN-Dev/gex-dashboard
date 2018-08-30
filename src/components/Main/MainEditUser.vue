<template>
  <div>
    <div>
      Edit user ID: {{ id }}
    </div>
    <div>
      <div>
        <label>ID</label>
        <input type="text" v-model="nameUser"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainAddUser",
  computed: {
    id() {
      return parseInt(this.$route.params.id, 10);
    },
    nameUser: {
      get() {
        return this.$store.getters.USERS[this.id].name;
      },
      set(value) {
        this.$store.commit("UPDATE_NAME", { value: value, id: this.id });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
