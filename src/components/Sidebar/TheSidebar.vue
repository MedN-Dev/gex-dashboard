<template>
  <div class="sidebar">
    <div class="sidebar__bs"></div>
    <SidebarItem :icon="icons.dashboard" :stat="status"/>
    <SidebarItem :icon="icons.forum"/>
    <SidebarItem :icon="icons.cloud"/>
    <SidebarItem :icon="icons.email"/>
    <SidebarItem :icon="icons.settings"/>
  </div>
</template>

<script>
export default {
  name: "TheSidebar",
  components: {
    SidebarItem: () => import("./SidebarItem.vue")
  },
  data() {
    return {
      icons: {
        settings: "settings",
        email: "email",
        cloud: "cloud",
        forum: "forum",
        dashboard: "dashboard"
      },
      status: "active"
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
  box-shadow: -2px 2px 5px 0px rgba(0,0,0,0.2);
  border-right: 1px solid #ebedf8;
  &__bs {
    height: 50px;
  }
}
</style>
