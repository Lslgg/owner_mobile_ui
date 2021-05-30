<template>
  <div class="abbreviation">
    <div>
      <div v-for="(abbr, index) in abbrList1" :key="index" class="item" @click="onAbbr(abbr)">
        {{ abbr }}
      </div>
    </div>
    <div>
      <div v-for="(abbr, index) in abbrList2" :key="index" class="item" @click="onAbbr(abbr)">
        {{ abbr }}
      </div>
    </div>
    <div>
      <div v-for="(abbr, index) in abbrList3" :key="index" class="item" @click="onAbbr(abbr)">
        {{ abbr }}
      </div>
    </div>
    <div class="last-item">
      <div v-for="(abbr, index) in abbrList4" :key="index" class="item" @click="onAbbr(abbr)">
        {{ abbr }}
      </div>
      <div class="item-four-no"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class extends Vue {
  public abbrList1 = ["陕", "京", "津", "沪", "冀", "豫", "云", "辽"];
  public abbrList2 = ["黑", "湘", "皖", "鲁", "新", "苏", "浙", "赣"];
  public abbrList3 = ["鄂", "桂", "甘", "晋", "蒙", "吉", "闽", "贵"];
  public abbrList4 = ["粤", "川", "青", "藏", "琼", "宁", "渝"];
  public onAbbr(abbr:string) {
    this.$emit('onAbbr', abbr);
  } 
}
</script>
<style lang="less">
.abbreviation {
  background-color: #d2d5da;
  padding: 16px;
  > div {
    display: flex;
    justify-content: flex-start;
    gap: 5px;
    margin-bottom: 5px;
    > div {
      flex: 1;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      height: 35px;
      color: #333;
      min-width: 35px;
      border-radius: 6px;
      background-color: #fff;
    }
    .item-four-no {
      background-color: #d2d5da;
    }
  }
}
</style>
