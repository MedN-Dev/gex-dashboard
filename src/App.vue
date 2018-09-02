<template>
  <div id="app">
    <ModalBox/>
  </div>
</template>

<script>
export default {
  components: {
    ModalBox: () => import("./components/ModalBox.vue")
  }
};
</script>
