import axiosHttp from './request';

/**
 * 公共的请数据方法
 */
export class HttpHelper {

    /**
     *  get 请求方法
     * @param url  url
     * @param data 对象
     */
    public static httpGet(url: string, data?: object): Promise<ResData<any>> {
        const params = this.setQueryParams(data);
        return new Promise((resolve, reject) => {
            axiosHttp.get(`/${url}${params}`).then((data: any) => resolve(data)).catch((err: any) => reject(err));
        });
    }

    /**
     *  post 请求方法
     * @param url url
     * @param data 对象
     */
    public static httpPost(url: string, data?: object) {
        return new Promise((resolve, reject) => {
            axiosHttp.post(`/${url}`, data).then((data: unknown) => resolve(data)).catch((err: any) => reject(err));
        });
    }

    /** 对象转换成url,id=1&name=2 */
    private static setQueryParams(params?: any) {
        if (params) {
            const keys = Object.keys(params);
            const paramsList = keys.map(p => `${p}=${params[p]}`);
            if (paramsList.length > 0) {
                const paramsStr = `?${paramsList.join('&')}`;
                return paramsStr;
            }
        }
        return '';
    }
}

