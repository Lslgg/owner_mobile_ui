import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';

import {
    Checkbox, CheckboxGroup, Toast, Swipe,
    SwipeItem, Button, CellGroup, Cell, Field,
    Calendar, Area, ActionSheet, Popup, Search,
    IndexAnchor, IndexBar, Tag
} from 'vant';
import 'vant/lib/index.css';
Vue.use(Checkbox).use(Toast).use(CheckboxGroup)
    .use(Swipe).use(SwipeItem).use(Button)
    .use(Cell).use(CellGroup).use(Field)
    .use(Calendar).use(Area).use(ActionSheet)
    .use(Popup).use(Search).use(IndexAnchor)
    .use(IndexBar).use(Tag);
import 'vant/lib/index.css';
// 引入utils
import utils from '@/assets/js/Utils';
// 引入自定义css样式
import '@/assets/css/base.css';
import '@/assets/css/globalStyle.css';
// import VConsole from 'vconsole';
// import 'lib-flexible';

import '@/assets/img' // icon

Vue.config.productionTip = false;

Vue.prototype.utils = utils;

// 判断是否测试环境
// if (process.env.VUE_APP_MODE === 'dev' || process.env.VUE_APP_MODE === 'test') { 
//     new VConsole();
// }

/* 全局颜色  #1786ff 蓝色   #FE9726 橙色 */
document.body.style.setProperty('--themeColor', '#1786ff');

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
