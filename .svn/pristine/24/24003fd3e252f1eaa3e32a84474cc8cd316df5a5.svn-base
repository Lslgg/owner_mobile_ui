<template>
  <div class="keyboard">
    <div class="select1">
      <div
        v-for="(num, index) in numList"
        :key="index"
        class="item"
        :class="{ gray: isEmity }"
        @click="onKeyNum(num)"
      >
        {{ num }}
      </div>
    </div>
    <div class="select2">
      <div
        v-for="(keyStr, index) in keyStrList2"
        :key="index"
        class="item"
        :class="{ gray: keyStr === 'I' || keyStr === 'O' }"
        @click="onKeyStr(keyStr)"
      >
        {{ keyStr }}
      </div>
    </div>
    <div class="select3">
      <div
        v-for="(keyStr, index) in keyStrList3"
        :key="index"
        class="item"
        @click="onKeyStr(keyStr)"
      >
        {{ keyStr }}
      </div>
    </div>
    <div class="select4" style="padding-bottom: 20px;">
      <div
        v-for="(keyStr, index) in keyStrList4"
        :key="index"
        class="item"
        @click="onKeyStr(keyStr)"
      >
        {{ keyStr }}
      </div>
    </div>
    <div class="del flex-center" style="bottom: 20px;" @click="onClear">
      <img src="@/assets/img/del.png" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class extends Vue {
  public numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  public keyStrList2 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  public keyStrList3 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  public keyStrList4 = ["Z", "X", "C", "V", "B", "N", "M"];
  public isEmity = true;
  public carNoNum: any[] = [];
  public onKeyNum(num: number) {
    if (!this.isEmity && this.carNoNum.length < 6) {
      this.carNoNum.push(num);
      this.$emit("onKeyboard", this.carNoNum);
    }
  }

  public onKeyStr(str: string) {
    if (this.carNoNum.length < 6) {
      this.isEmity = false;
      if (!(str === "I" || str === "O")) {
        this.carNoNum.push(str);
        this.$emit("onKeyboard", this.carNoNum);
      }
    }
  }

  public onClear() {
    if (this.carNoNum.length > 0) {
      this.carNoNum = this.carNoNum.filter(
        (_, index) => index !== this.carNoNum.length - 1
      );
      this.$emit("onKeyboard", this.carNoNum);
      if (this.carNoNum.length === 0) this.isEmity = true;
    } else {
      this.isEmity = true;
    }
  }
}
</script>
<style lang="less">
.keyboard {
  background-color: #d2d5d9;
  .select1,
  .select2 {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .select3,
  .select4 {
    width: 100%;
    display: flex;
    justify-content: center;
    .item {
      margin-right: 5px;
    }
  }
  .item {
    background-color: #fff;
    height: 40px;
    width: 32px;
    box-shadow: 0 1px 0 0 #00000029;
    border-radius: 3px;
    font-size: 20px;
    line-height: 40px;
    color: #030303;
    text-align: center;
    margin-top: 5px;
  }
  .del {
    position: absolute;
    right: 3px;
    bottom: 5px;
    height: 40px;
    width: 50px;
    background-color: #aab2bb;
    border-radius: 3px;
    img {
      width: 23px;
      height: 23px;
    }
  }
  .gray {
    color: gray;
  }
}
</style>
