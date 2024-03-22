<template>
  <div :class="['box-svg', icon]" v-on="$listeners" v-html="svgContent"></div>
</template>

<script>

export default {
  name: 'svgIcon',
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.icon}`
    },
    svgClass () {
      if (this.icon) {
        return 'icon-' + this.icon
      } else {
        return 'icon'
      }
    },
    svgContent () {
      if (this.catchSvg) {
        return this.catchSvg[`./${this.icon}.svg`]?.default.content.replace(/symbol/g, 'svg')
      } else {
        return ''
      }
    }
  }
}
</script>

<style scoped lang="less">
.box-svg {
  width: 20px;
  height: 20px;
  box-sizing: content-box;
  display: inline-block;
  line-height: normal;
  min-width: 1em;
  min-height: 1em;
  //vertical-align: -0.15em;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>
