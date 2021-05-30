<template>
  <div class="select_car_no">
    <div class=" van-cell van-field">
      <div class="van-cell__title van-field__label">
        <span>车牌号</span>
      </div>
      <div class="carNoInfo">
        <div class="carAddress" @click="onSelectAbbr">
          <span style="color: rgb(51, 51, 51);">{{ abbr }}</span>
          <img src="@/assets/img/arrow-down.png" />
        </div>
        <div class="no" @click="onSelectKey">
          <div class="line" :class="{ gray: carNo === '请输入车牌号码' }">
            {{ carNo }}
          </div>
        </div>
      </div>
    </div>
    <van-popup v-model="showKey" position="bottom" overlay-class="myOverlay">
      <keyboard @onKeyboard="onKeyboard" />
    </van-popup>
    <van-popup v-model="showAbbr" position="bottom" overlay-class="myOverlay">
      <abbreviation @onAbbr="onAbbr" />
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Abbreviation from "./abbreviation.vue";
import Keyboard from "./keyboard.vue";
@Component({
  components: {
    Abbreviation,
    Keyboard,
  },
})
export default class extends Vue {
  public showAbbr = false;
  public showKey = false;
  public abbr = "粤";
  public carNo = "请输入车牌号码";
  public onSelectAbbr(event: Event) {
    event.stopPropagation();
    this.showAbbr = true;
    this.showKey = false;
  }
  public onSelectKey(event: Event) {
    event.stopPropagation();
    this.showKey = true;
    this.showAbbr = false;
  }
  public onAbbr(abbr: string) {
    this.abbr = abbr;
    this.showAbbr = false;
  }
  public onKeyboard(cardNumList: any[]) {
    this.carNo = cardNumList.join("");
  }

  public onHidePop() {
    console.log(this);
    this.showKey = false;
    this.showAbbr = false;
  }
}
</script>

<style lang="less" scoped>
::v-deep .myOverlay {
  background-color: transparent;
}
.select_car_no {
  .carNoInfo .carAddress {
    justify-content: center;
    max-width: 46px;
    width: 46px;
    height: 25px;
    background-color: rgb(244, 242, 245);
    border-radius: 2px;
    margin-right: 10px;
  }
  .carNoInfo .carAddress,
  .carNoInfo {
    display: flex;
    align-items: center;
    font-size: 16px;
  }
  .carNoInfo .no {
    display: flex;
    align-items: center;
    font-size: 16px;
    width: 140px;
    letter-spacing: 2px;
  }
  .carNoInfo img {
    width: 12px;
    height: 12px;
    margin-left: 2px;
  }
  .gray {
    color: #ccc;
  }
}
</style>
