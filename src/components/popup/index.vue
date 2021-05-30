<template>
    <div class='popup flex-center'>
        <div class="popup-body">
            <div class="popup-main">
                <div class="title">
                    <span>你选择了</span>
                    <span class="select-name">{{ name }}</span>
                </div>
                <div class="img">
                    <img src="@/assets/img/carImg.png" />
                </div>
                <div class="title mt15">请问该部位是否有凹陷？</div>
                <div class="example flex-sides-center mt10">
                    <div class="item">
                        <img src="@/assets/img/example.png" />
                        <div class="flex-center">轻微刮痕</div>
                    </div>
                    <div class="item">
                        <img src="@/assets/img/example.png" />
                        <div class="flex-center">有凹陷</div>
                    </div>
                </div>
                <div class="tips fs12 fc4 mt10">
                    注：如果该部位有严重的裂痕或者机械损坏，可能会涉及额外费用，到店后请与商家沟通后改价
                </div>
            </div>

            <div class="buttom fs15 flex-sides-center mt20 px1-t">
                <div class="left flex-center px1-r" @click="slightSubmit">轻微刮痕</div>
                <div class="right flex-center" @click="sunkenSubmit">有凹陷</div>
            </div>

        </div>
    </div>
</template>

<script lang='ts'>
import { Component, Vue, Emit, Prop } from 'vue-property-decorator';
@Component
export default class  extends Vue {
    @Prop() private name?: string;

    @Emit('slightSubmit')
    public slightSubmit(): void {
        // retrun 
    }

    @Emit('sunkenSubmit')
    public sunkenSubmit(): void {
        // this.$emit('sunkenSubmit');
    }

    @Emit('hidePopup')
    public hidePopup(): void {
        // this.$emit('hidePopup');
    }
}
</script>

<style lang='less' scoped>
.popup {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    padding: 0 .42rem;
    max-width: 750px;
    .popup-body {
        background-color: #fff;
        width: 100%;
        border-radius: .04rem;
        font-size: .14rem;
        .popup-main {
            padding: .24rem .32rem 0 .32rem;
        }
        .title {
            font-weight: bold;
            .select-name {
                font-size: .16rem;
                background-color: var(--themeColor);
                color: #fff;
                border-radius: .02rem;
                padding: .01rem .06rem;
                margin-left: .03rem;
            }
        }
        .img {
            img {
                width: 100%;
                height: 1.13rem;
                margin-top: .10rem;
            }
        }
        .example {
            .item {
                width: 1.08rem;
                height: 1.08rem;
                position: relative;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: .02rem;
                }
                div {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: .28rem;
                    background-color: rgba(0,0,0,0.3);
                    color: #fff;
                    font-size: .12rem;
                }
            }
            
        }
        .buttom {
            height: .49rem;
            width: 100%;
            div {
                flex: 1;
                height: 100%;
                color: var(--themeColor);
            }
        }
    }
}
</style>
