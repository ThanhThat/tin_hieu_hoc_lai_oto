<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
import LoginView from "./views/auth/LoginView.vue";
import HomeView from "./views/HomeView.vue";

export default {
  computed: {
    layout() {
      if (this.$route.meta.layout) {
        return this.$route.meta.layout !== null;
      }
      return "div";
    },
  },
  components: { LoginView, HomeView },
};
</script>

<style lang="scss" scoped></style>
