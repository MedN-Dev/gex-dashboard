<template>
  <div class="sidebar">
    <div class="empty"></div>
    <SidebarItem :icon="icons.dashboard" :stat="status"/>
    <SidebarItem :icon="icons.forum"/>
    <SidebarItem :icon="icons.cloud"/>
    <SidebarItem :icon="icons.email"/>
    <SidebarItem :icon="icons.settings"/>
  </div>
</template>

<script>
export default {
  name: "SidebarApp",
  components: {
    SidebarItem: () => import("./SidebarItem.vue")
  },

  data() {
    return {
      status: "active",
      icons: {
        email: "email",
        cloud: "cloud",
        forum: "forum",
        settings: "settings",
        dashboard: "dashboard"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  height: auto;
  background-color: white;
  width: 85px;
  box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  border-right: 1px solid #ebedf8;
  .empty {
    height: 50px;
  }
}
</style>
