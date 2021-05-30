import { apibase, noLoadingApiBase } from './apibase';
// 获取第三方要请求api
class RequestApi {
    private baseUrl =''
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }
    public getHttp(url: string, data: any, isloading: boolean) {
        let urlData = '';
        if (data) {
            for (const key in data) {
                urlData += `${key}=${data[key]}&`;
            }
        }
        const newUrlData = urlData ? urlData.substr(0, urlData.length - 1) : '';
        if (isloading) {
            return apibase({
                url: `${this.baseUrl + url}${newUrlData ? '?' + newUrlData : ''}`,
                method: 'get'
            })
        } else {
            return noLoadingApiBase({
                url: `${this.baseUrl + url}${newUrlData ? '?' + newUrlData : ''}`,
                method: 'get'
            })
        }
    }

    public postHttp(url: string, data: any, isloading: boolean): any {
        if (isloading) {
            return apibase({
                url: this.baseUrl + url,
                method: 'post',
                data: data
            })
        } else {
            return noLoadingApiBase({
                url: this.baseUrl + url,
                method: 'post',
                data: data
            })
        }
    }
}

export default RequestApi;