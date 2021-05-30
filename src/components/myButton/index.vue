<template>
    <div :class="[position ? 'position': '', 'myButton']">
        <div
            class="submit flex-center show_1px_all_blue_radius200 fs16"
            :class="[height, marginLeft, marginTop]"
            :style="`color: ${color}; background-color: ${bgcColor}; border-radius: ${radius}px; width: ${width}%;`"
            @click="submit"
        >
            {{ msg }}
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
@Component
export default class myButton extends Vue {
    @Prop() private msg!: string;
    @Prop({ default: '#fff' }) private color?: string;
    @Prop({ default: '#F22D2D' }) private bgcColor?: string;
    @Prop({ default: '4' }) private radius?: string;
    @Prop({ default: 'h40' }) private height?: string;
    @Prop({ default: '100' }) private width?: string;
    @Prop({ default: '0' }) private marginLeft?: string;
    @Prop({ default: 'mt60' }) private marginTop?: string;
    @Prop({ default: '' }) private position?: string;

    @Emit('submit')
    public submit(): void {
        // this.$emit("submit");
    }
}
</script>

<style lang='less' scoped>
.mt60 {
    margin-top: .60rem;
}
.mt30 {
    margin-top: .30rem;
}
.h40 {
    height: .4rem;
}
.h50 {
    height: .5rem;
}
.myButton {
    width: 100%;
}
.position {
    position: fixed;
    width: 100%;
    max-width: 750px;
    bottom: .30rem;
}
.submit {
    width: 100%;
}
</style>
