<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Utils from "./assets/js/Utils";
import { setUserToken } from "./utils/auth";

@Component
export default class extends Vue {
  constructor() {
    super();
    const token = Utils.getQuery("token");
    if (token) {
      setUserToken(token);
    }
  }
}
</script>

<style lang="less"></style>
