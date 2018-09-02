<template>
  <div class="item" :class="stat" @click="handleClick">
    <span v-if="errorLog" class="item-error">not working</span>
    <i v-else class="material-icons">{{ icon }}</i>
  </div>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    icon: {
      type: String,
      required: true
    },
    stat: {
      type: String
    }
  },

  data() {
    return {
      errorLog: false
    };
  },

  methods: {
    handleClick() {
      if (!this.stat) {
        this.errorLog = !this.errorLog;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 25px;
  color: #c0c5d2;
  width: 82px;
  height: 85px;
  cursor: pointer;
  .item-error {
    font-size: 9px;
    color: white;
    background-color: #0077ff;
    padding: 2px 5px;
    border-radius: 2px;
  }
  &:hover {
    color: #0077ff;
  }
}

.active {
  border-right: 3px solid #0077ff;
  color: #0077ff;
}
</style>
