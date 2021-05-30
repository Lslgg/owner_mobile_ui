<template>
  <div class="layout">
    <section class="app-main">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <router-view :key="key" />
        </keep-alive>
      </transition>
    </section>
    <tab-bar-bottom></tab-bar-bottom>
  </div>
</template>

<script>
import Bottom from "./components/bottom";
export default {
  name: "layout",
  components: {
    "tab-bar-bottom": Bottom,
  },
  computed: {
    key() {
      return this.$route.fullPath;
    },
  },
};
</script>

<style lang="scss"></style>
