import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/appointment'
    },
    {
        path: '/appointment',
        name: 'appointment',
        component: () => import("@/views/appointment/index.vue"),
        meta: { title: '预约', keepAlive: true }
    },
    {
        path: '/selectTheSite',
        name: 'selectTheSite',
        component: () => import("@/views/selectTheSite/index.vue"),
        meta: { title: '维修部位选择', keepAlive: true }
    },
    {
        path: '/upload',
        name: 'upload',
        component: () => import("@/views/upload/index.vue"),
        meta: { title: '预约系统', keepAlive: false }
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

// 跳转修改页面标题
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    document.getElementsByTagName("body")[0].style.overflow = "";
    next();
})

export default router
