<template>
  <div class="select_car_type">
    <van-search
      v-if="show.brand"
      v-model="search"
      placeholder="请输入搜索关键词"
    />
    <van-index-bar v-if="show.brand">
      <template v-for="(item, index) in brandGroups">
        <van-index-anchor :index="item.group" :key="index" />
        <van-cell
          v-for="brandItem in item.list"
          :title="brandItem.name"
          :key="brandItem.name + index"
          @click="getSeries(brandItem.name)"
        >
          <template #icon>
            <img :src="brandItem.imgSrc" style="width:35px;height:35px;" />
          </template>
        </van-cell>
      </template>
    </van-index-bar>
    <van-cell-group v-if="show.series">
      <van-cell
        v-for="(item, index) in seriesList"
        :key="index"
        :title="item"
        @click="getYears(item)"
      />
    </van-cell-group>
    <van-cell-group v-if="show.years">
      <van-cell
        v-for="(item, index) in yearList"
        :key="index"
        :title="item"
        @click="getLastCarName(item)"
      />
    </van-cell-group>
    <van-cell-group v-if="show.lastCarName">
      <van-cell
        v-for="(item, index) in lastCarNameList"
        :key="index"
        :title="item"
        @click="onSubmitSelectCar(item)"
      />
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import RequestApi from "@/utils/requestApi";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Getter } from "vuex-class";
@Component
export default class extends Vue {
  @Prop({ default: false }) public visable?: boolean;
  @Getter public brandList: any;
  public show = {
    brand: true,
    series: false,
    years: false,
    lastCarName: false,
  };

  public cartInfo: string[] = [];

  public search = "";
  public thirdHttp = new RequestApi("http://ycpdapi.hotgz.com");

  public brandGroups: any[] = [];
  public seriesList: any[] = [];
  public yearList: any[] = [];
  public lastCarNameList: any[] = [];

  @Watch("visible")
  public onVisibleChanged() {
    console.log("visible", this.visable)
  }

  public created() {
    this.brandGroups = [];
    this.cartInfo = [];
    this.init();
  }

  public async init() {
    let list: any = [];
    this.cartInfo = [];
    if (!this.brandList || this.brandList.length <= 0) {
      const res: any = await this.thirdHttp.getHttp(
        "/Customer/GetBrand",
        null,
        true
      );
      this.$store.dispatch("base/setBrands", res.list);
      list = this.getCarTypeList(res.list);
    } else {
      list = this.getCarTypeList(this.brandList);
    }
    this.$set(this, "brandGroups", list);
  }

  public getSeries(name: string) {
    this.showStatus("series");
    this.cartInfo.push(name);
    this.thirdHttp
      .getHttp(`/Customer/GetSeries?brand=${name}`, null, true)
      .then((res: any) => {
        this.seriesList = res.list.map((item) => item.brandSeriesName);
      });
  }

  public getYears(name: string) {
    this.showStatus("years");
    this.cartInfo.push(name);
    this.thirdHttp
      .getHttp(
        `/Customer/GetYears?brand=${this.cartInfo[0]}&seriesName=${this.cartInfo[1]}`,
        null,
        true
      )
      .then((res: any) => {
        this.yearList = res.list.map((item) => item.yearNames);
      });
  }

  public getLastCarName(name: string) {
    this.showStatus("lastCarName");
    this.cartInfo.push(name);
    const url = `/Customer/GetModel?brand=${this.cartInfo[0]}&seriesName=${this.cartInfo[1]}&years=${this.cartInfo[2]}`;
    this.thirdHttp.getHttp(url, null, true).then((res: any) => {
      this.lastCarNameList = res.list.map((item) => item.yearModel);
    });
  }

  public onSubmitSelectCar(name: string) {
    this.cartInfo.push(name);
    this.$store.dispatch("base/setCurrentCarList", this.cartInfo);
    this.$emit("onSubmitSelectCar");
  }

  private getCarTypeList(list: any[]) {
    if (list.length > 0) {
      list = list.map((p: any) => {
        const nameList = p.Brands.split(",");
        const imgList = p.ImgUrl.split(",");
        const list: any[] = [];
        for (let index = 0; index < nameList.length; index++) {
          const name = nameList[index];
          const imgSrc = imgList[index];
          list.push({ name, imgSrc });
        }
        return {
          group: p.Group,
          list,
        };
      });
    }
    return list;
  }

  public showStatus(showParams = "brand") {
    for (const item in this.show) {
      if (Object.prototype.hasOwnProperty.call(this.show, item)) {
        this.show[item] = false;
      }
    }
    this.show[showParams] = true;
  }
}
</script>

<style lang="less" scoped>
::v-deep .van-cell {
  display: flex;
  align-items: center;
  align-content: center;
  img {
    margin-right: 8px;
  }
}
</style>
