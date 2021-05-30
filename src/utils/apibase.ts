import axios from 'axios'
import { Toast } from 'vant';
import router from '@/router/index';

window.axiosCancel = [];

// 取消重复的请求
const removePending = (url: string) => {
    for (const key in window.axiosCancel) {
        const item = +key;
        const list = window.axiosCancel[key];
        // 当前请求在数组中存在时执行函数体
        if (list.url === url) {
            // 执行取消操作
            list.cancel();
            // 从数组中移除记录
            window.axiosCancel.splice(item, 1);
        }
    }
};

const getUrl = (url: string) => {
    const arr = url.split('?');
   return arr[0];
}

const createdApiBase = (hideLoading: boolean) => {

    // 创建axios实例
    const apibase = axios.create()

    // 设置请求拦截器
    apibase.interceptors.request.use(
        request => {
            if(!hideLoading) {
                Toast.loading ({
                    duration: 0,       // 持续展示 toast
                    forbidClick: true, // 禁用背景点击
                    loadingType: 'spinner',
                    message: '加载中,请稍后'
                })
            }
            
            request.headers['Authorization'] = sessionStorage.getItem('Authorization');
             
            if (request.url && request.url !== 'undefined') {
                removePending(getUrl(request.url));
                // 将每次请求添加到创建的数组中  用于阻止请求
                request.cancelToken = new axios.CancelToken(cancel => {
                    window.axiosCancel.push({
                        url: getUrl(request.url as string),
                        cancel: cancel
                    })
                })
            }
            
            return request;
        }
    )

    // 设置响应数据
    apibase.interceptors.response.use(
        response => {
            const res = response.data;
            if (res.Authorization) {
                sessionStorage.setItem('Authorization', res.Authorization);
            }
            // 清除加载框
            if (!hideLoading) {
                Toast.clear();
            }
            if(res.Code === 200 && res.Msg == ""){
                return res.Data;
            }else { 
                return Promise.reject(res);
            }
        },

        // 服务器错误情况
        error => {
            // 清除加载框
            if (!hideLoading) {
                Toast.clear();
            }
            if (error.response.status === 401) {
                Toast({
                    message: '登录已过期,请重新登录',
                    duration: 1500
                })
                setTimeout(() => {
                    router.replace({
                        path: '/'
                    })
                }, 1500);
            }else {
                return Promise.reject({ msg: '服务开小差啦,请您稍后再试' + error });
            }
        }
    )

    return apibase
}

// 有加载框
export const apibase = createdApiBase(false);

// 无加载框
export const noLoadingApiBase = createdApiBase(true);