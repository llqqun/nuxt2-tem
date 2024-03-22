import Vue from 'vue'
import SvgIcon from '~/components/svgIcon.vue'

Vue.component('SvgIcon', SvgIcon)

// 预请求svg组件(通过svg-sprite-loader加载)
const catchSvg = {}
const req = require.context('@/assets/svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map((key) => {
  return (catchSvg[key] = requireContext(key))
})
requireAll(req)

export default function (nuxtApp, inject) {
    console.log('加载自定义插件');
    Vue.prototype.catchSvg = catchSvg
}