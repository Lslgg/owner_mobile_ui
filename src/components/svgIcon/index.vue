<template>
    <svg :class="svgClass" aria-hidden="true" v-on="$listeners">
        <use :xlink:href="iconName" />
    </svg>
</template>
 
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class SvgIcon extends Vue {
    @Prop({ default: '', required: true }) private iconClass?: string;
    @Prop({ default: '' }) private className?: string;
    get iconName() {
        return `#icon-${this.iconClass}`
    }
    get svgClass() {
        if (this.className) {
            return 'svg-icon ' + this.className
        } else {
            return 'svg-icon'
        }
    }
}
</script>
 
<style scoped>
.svg-icon {
    width: .44rem;
    height: .44rem;
    vertical-align: -0.15rem;
    fill: currentColor;
    overflow: hidden;
}
</style>