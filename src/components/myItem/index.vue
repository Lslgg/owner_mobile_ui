<template>
    <div class='myItem'
        :class="[isCenter ? 'flex-sides-center' : 'flex-sides', bottomLine ? 'show_1px_bottom' : '', pd]"
    >
        <div class="left" :class="[lFontSize, lFontColor]">{{ lStr }}</div>
        <div v-if="rStr" class="right" :class="[rFontSize, rFontColor]">{{ rStr }} </div>
        <slot v-else name="custom"></slot>
    </div>
</template>

<script lang=ts>
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component
export default class  extends Vue {
    @Prop({ default: '' }) private lFontSize?: string;
    @Prop({ default: '' }) private rFontSize?: string;
    @Prop({ default: 'fc6' }) private lFontColor?: string;
    @Prop({ default: 'fc8' }) private rFontColor?: string;
    @Prop({ default: '' }) private lStr?: string;
    @Prop({ default: '' }) private rStr?: string;
    @Prop({ default: 'pd15' }) private pd?: string;
    @Prop({ default: true }) private isCenter?: string;
    @Prop({ default: false }) private bottomLine?: string;
}
</script>

<style lang='less' scoped>
.myItem {
    background-color: #fff;
}
</style>
