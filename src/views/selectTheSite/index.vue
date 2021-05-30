<template>
    <div class='selectTheSite'>
        <div class="imgBox flex-column-center">
            <div class="top">
                <svg-icon @click="getValueByKey('S')" :className="list[18].isSelect ? 'active': 'noActive'" style="width: .52rem; height: .73rem;" icon-class="S"></svg-icon>
                <svg-icon @click="getValueByKey('E')" :className="list[4].isSelect ? 'active': 'noActive'" style="width: .41rem; height: 1.16rem;" icon-class="E"></svg-icon>
                <div class="flex-column-center">
                    <svg-icon @click="getValueByKey('C')" :className="list[2].isSelect ? 'active': 'noActive'" style="width: .97rem; height: .52rem;" icon-class="C"></svg-icon>
                    <svg-icon @click="getValueByKey('B')" :className="list[1].isSelect ? 'active': 'noActive'" style="width: .96rem; height: .96rem;" icon-class="B"></svg-icon>
                </div>
                <svg-icon @click="getValueByKey('D')" :className="list[3].isSelect ? 'active': 'noActive'" style="width: .41rem; height: 1.16rem;" icon-class="D"></svg-icon>
                <svg-icon @click="getValueByKey('R')" :className="list[17].isSelect ? 'active': 'noActive'" style="width: .52rem; height: .73rem;" icon-class="R"></svg-icon>
            </div>
            <div class="center">
                <svg-icon @click="getValueByKey('P')" :className="list[15].isSelect ? 'active': 'noActive'" style="width: .45rem; height: .35rem;" icon-class="P"></svg-icon>
                <svg-icon @click="getValueByKey('O')" :className="list[14].isSelect ? 'active': 'noActive'" style="width: .20rem; height: 2.08rem; margin-right: .02rem;" icon-class="O"></svg-icon>
                <div class="flex-column-center">
                    <svg-icon @click="getValueByKey('G')" :className="list[6].isSelect ? 'active': 'noActive'" style="width: .62rem; height: 1.03rem;" icon-class="G"></svg-icon>
                    <svg-icon @click="getValueByKey('H')" :className="list[7].isSelect ? 'active': 'noActive'" style="width: .62rem; height: 1.03rem;" icon-class="H"></svg-icon>
                </div>
                <div class="flex-column-center">
                    <svg-icon @click="getValueByKey('V')" :className="list[21].isSelect ? 'active': 'noActive'" style="width: .79rem; height: .53rem;" icon-class="V"></svg-icon>
                    <svg-icon @click="getValueByKey('A')" :className="list[0].isSelect ? 'active': 'noActive'" style="width: .76rem; height: 1.49rem;" icon-class="A"></svg-icon>
                </div>
                <div class="flex-column-center">
                    <svg-icon @click="getValueByKey('F')" :className="list[5].isSelect ? 'active': 'noActive'" style="width: .62rem; height: 1.03rem;" icon-class="F"></svg-icon>
                    <svg-icon @click="getValueByKey('I')" :className="list[8].isSelect ? 'active': 'noActive'" style="width: .62rem; height: 1.03rem;" icon-class="I"></svg-icon>
                </div>
                <svg-icon @click="getValueByKey('N')" :className="list[13].isSelect ? 'active': 'noActive'" style="width: .20rem; height: 2.08rem; margin-left: .02rem;" icon-class="N"></svg-icon>
                <svg-icon @click="getValueByKey('Q')" :className="list[16].isSelect ? 'active': 'noActive'" style="width: .45rem; height: .35rem;" icon-class="Q"></svg-icon>
            </div>
            <div class="bottom">
                <svg-icon @click="getValueByKey('U')" :className="list[20].isSelect ? 'active': 'noActive'" style="width: .52rem; height: .73rem;" icon-class="U"></svg-icon>
                <svg-icon @click="getValueByKey('L')" :className="list[11].isSelect ? 'active': 'noActive'" style="width: .48rem; height: 1.37rem;" icon-class="L"></svg-icon>
                <div class="flex-column-center">
                    <svg-icon @click="getValueByKey('W')" :className="list[22].isSelect ? 'active': 'noActive'" style="width: .72rem; height: .54rem;" icon-class="W"></svg-icon>
                    <svg-icon @click="getValueByKey('K')" :className="list[10].isSelect ? 'active': 'noActive'" style="width: .72rem; height: .67rem;" icon-class="K"></svg-icon>
                    <svg-icon @click="getValueByKey('M')" :className="list[12].isSelect ? 'active': 'noActive'" style="width: .73rem; height: .24rem;" icon-class="M"></svg-icon>
                </div>
                <svg-icon @click="getValueByKey('J')" :className="list[9].isSelect ? 'active': 'noActive'" style="width: .48rem; height: 1.37rem;" icon-class="J"></svg-icon>
                <svg-icon @click="getValueByKey('T')" :className="list[19].isSelect ? 'active': 'noActive'" style="width: .52rem; height: .73rem;" icon-class="T"></svg-icon>
            </div>
        </div>
        

        <div class="select">
            <div class="title fs14 fc8">已选择部位({{ selectData.length }})</div>
            <div class="list">
                <div class="item flex-center fc6" v-for="(item, index) in selectData" :key="index">
                    <span>{{ item.key }}-{{ item.name }}</span>
                    <svg-icon @click="deleteItem(item, index)" className="close" icon-class="close"></svg-icon>
                </div>
            </div>
        </div>

        <my-button
            style="padding: 0 .19rem;"
            :msg="'选好了，下一步'"
            :height="'h50'"
            :marginTop="'mt30'"
            :bgcColor="getBgcColor"
            :radius="'100'"
            :position="'fixed'"
            @submit="jumpUpload"
        />

        <popup 
            v-if="showPupop"
            @slightSubmit="slightSubmit"
            @sunkenSubmit="sunkenSubmit"
            :name="text"
        />

    </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import {MyButton,Popup} from '@/components';
@Component({
    components: {
        MyButton,
        Popup
    }
})
export default class SelectTheSite extends Vue {
    private list = [
        { key: 'A', name: '车顶', isSelect: false, index: 0 },
        { key: 'B', name: '发动机罩', isSelect: false, index: 1 },
        { key: 'C', name: '前挡泥板', isSelect: false, index: 2 },
        { key: 'D', name: '前右翼子板', isSelect: false, index: 3 },
        { key: 'E', name: '前左翼子板', isSelect: false, index: 4 },
        { key: 'F', name: '前右门', isSelect: false, index: 5 },
        { key: 'G', name: '前左门', isSelect: false, index: 6 },
        { key: 'H', name: '后左门', isSelect: false, index: 7 },
        { key: 'I', name: '后右门', isSelect: false, index: 8 },
        { key: 'J', name: '后右翼子板', isSelect: false, index: 9 },
        { key: 'K', name: '行李箱盖', isSelect: false, index: 10 },
        { key: 'L', name: '后左翼子板', isSelect: false, index: 11 },
        { key: 'M', name: '后挡泥板', isSelect: false, index: 12 },
        { key: 'N', name: '右侧挡泥板', isSelect: false, index: 13 },
        { key: 'O', name: '左侧挡泥板', isSelect: false, index: 14 },
        { key: 'P', name: '左倒车镜', isSelect: false, index: 15 },
        { key: 'Q', name: '右倒车镜', isSelect: false, index: 16 },
        { key: 'R', name: '前右轮', isSelect: false, index: 17 },
        { key: 'S', name: '前左轮', isSelect: false, index: 18 },
        { key: 'T', name: '后右轮', isSelect: false, index: 19 },
        { key: 'U', name: '后左轮', isSelect: false, index: 20 },
        { key: 'V', name: '前窗玻璃', isSelect: false, index: 21 },
        { key: 'W', name: '后窗玻璃', isSelect: false, index: 22 },
    ]
    private selectData: any = [];
    private showPupop = false;
    private text = '';

    get getBgcColor(): string {
        const bgc = this.$route.query.color || '';
        let str = '';
        if (bgc) {
            if(this.selectData.length === 0) {
                str = '#1786ff';
            }else {
                str = 'var(--themeColor)';
            }
            
        }else {
            if(this.selectData.length === 0) {
                str = '#1786ff';
            }else {
                str = 'var(--themeColor)';
            }
        }
        return str
    }

    public mounted(): void {
        this.setColor();
    }

    public setColor(): void {
        if (this.$route.query.color === 'blue') {
            document.body.style.setProperty('--themeColor', '#1786ff');
        }else {
            document.body.style.setProperty('--themeColor', '#1786ff');
        }
    }
    
    public getValueByKey(key: string): void {
        let flag = false;
        this.selectData.map((val: any) => {
            if (val.key === key) {
                flag = true;
            }
        })
        if (!flag) {
            this.list.map(item => {
                if (item.key === key) {
                    item.isSelect = true;
                    this.showPupop = true;
                    this.text =key + '-' + item.name;
                    this.selectData.push(item);
                }
            })            
        }
    }

    public deleteItem(item: any, index: number): void {
        this.selectData.splice(index, 1);
        for (let i = 0; i < this.list.length; i++) {
            if (item.key === this.list[i].key) {
                this.list[i].isSelect = false;
            }
        }
    }

    public slightSubmit(): void {
        this.showPupop = false;
    }

    public sunkenSubmit(): void {
        this.showPupop = false
    }

    public jumpUpload(): void {
        if (this.selectData.length === 0 ) return;
        this.$router.push({
            path: '/upload'
        })
    }
}
</script>

<style lang='less' scoped>
.active {
    color: var(--themeColor);
}
.noActive {
    color: #595F72;
}
.selectTheSite {
    padding: .14rem 0 1.2rem 0;
    .imgBox {
        padding: 0 .19rem;
    }
    .top {
        position: relative;
        display: flex;
        align-items: flex-end;
    }
    .center {
        display: flex;
        align-items: flex-start;
    }
    .bottom {
        display: flex;
        align-items: flex-start;
    }
    .select {
        margin-top: .30rem;
        padding: 0 .19rem;
        
        .title {
            font-weight: bold;
        }
        .list {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            .item {
                width: 31%;
                height: .40rem;
                border: .01rem solid var(--themeColor);
                font-size: .13rem;
                border-radius: .02rem;
                margin-top: .10rem;
                position: relative;
                .close {
                    width: .25rem;
                    height: .25rem;
                    position: absolute;
                    right: -1px;
                    top: 0;
                    color: var(--themeColor);
                }
            }
            .item:nth-child(3n-1) {
                margin: 0 .11rem;
                margin-top: .10rem;
            }
        }
    }
}
</style>
