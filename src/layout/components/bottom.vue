<template>
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o">
      <span>工单</span>
      <template #icon>
        <i class="iconfont icon-compass"></i>
      </template>
    </van-tabbar-item>
    <van-tabbar-item icon="search">
      <span>统计</span>
      <template #icon>
        <i class="iconfont icon-statistics"></i>
      </template>
    </van-tabbar-item>
    <van-tabbar-item icon="friends-o">
      <span>我的</span>
      <template #icon>
        <i class="iconfont icon-my"></i>
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class Home extends Vue {
  //#region 属性
  public urlList = ["home", "statistics", "user"];

  public active = 0;

  //#endregion

  //#region 事件

  public onChange(active: number) {
    const name = this.urlList[active];
    const params = {};
    this.$router.push({ name, params });
  }

  //#endregion

  //#region  方法

  //#endregion
}
</script>

<style lang="scss">
</style>
