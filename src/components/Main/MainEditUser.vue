<template>
  <div>
    <div class="edit-user">
      Editing user: <span>{{ nameUser }}</span>
    </div>
    <div class="edit-form">
      <div>
        <label>ID</label>
        <input type="text" v-model="nameUser"/>
      </div>
      <div>
        <label>Email</label>
        <input type="text" v-model="nameUser"/>
      </div>
      <div>
        <label>REGISTRATION</label>
        <input type="text" v-model="nameUser"/>
      </div>
      <div>
        <label>DEVELOPER</label>
        <input type="text" v-model="nameUser"/>
      </div>
      <div>
        <label>COUNTRY</label>
        <input type="text" v-model="nameUser"/>
      </div>
      <div v-show="saveStatus">SAVED</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainAddUser",
  data() {
    return {
      saveStatus: false
    };
  },
  computed: {
    id() {
      return parseInt(this.$route.params.id, 10);
    },
    nameUser: {
      get() {
        return this.$store.getters.USERS[this.id].name;
      },
      set(value) {
        this.saveStatus = true;
        this.$store.commit("UPDATE_NAME", { value: value, id: this.id });
        setTimeout(this.changeSaveStatus, 300);
      }
    }
  },
  methods: {
    changeSaveStatus() {
      this.saveStatus = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.edit-user {
  display: flex;
  align-items: center;
  width: 1402px;
  height: 90px;
  margin: 0 auto;
  font-size: 21px;
  letter-spacing: 0.14px;
  color: #1a173b;
  span {
    color: #8a96a0;
  }
}
  .edit-form {
    width: 1402px;
    margin: 0 auto;
  }
</style>
