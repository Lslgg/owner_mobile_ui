
import Vue from 'vue'
import { SvgIcon } from '@/components'// svg组件

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().map(requireContext)
requireAll(req)