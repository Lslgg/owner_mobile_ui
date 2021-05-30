import axiosHttp from './request';

interface Params {
    url: string;
    data?: any;
    params?: any;
    method: string;
}

/**
 * 生成的api单独使用的方法
 * @param params 参数
 */
export default function httpService(params: Params) {
    const newParams: any = getNewParams(params);
    return new Promise((resolve, reject) => {
        axiosHttp(newParams).then((data) => resolve(data)).catch((err: any) => reject(err));
    });
}


// 处理传参
function getNewParams(params: Params) {
    const url = params.url;
    const index = url.search(/{/i); // 是否有路径传参
    const newUrls: string[] = [];
    if (index > -1) { // 如果有
        const urls = url.split('/'); // 通过/转换成数组
        urls.forEach(p => {
            if (p) {
                const num = p.search(/{/i); // 当前是否是路径参数 {taskId}
                if (num > -1) { // 如果是
                    const reqStr = /^\{(\w+)\}*$/.exec(p); // 通过正则查找
                    if (reqStr && reqStr.length > 0) { // 如果 匹配 ['{taskId}','taskId']
                        const repStr = reqStr[0]; // 第0个是匹配的 {taskId}是要替换的字符
                        if (typeof params.params === 'object') {
                            const val = params.params[reqStr[1]]; // params.params[taskId] 是传入的值
                            delete params.params[reqStr[1]]; // 从对象中删除这个参数
                            p = p.replace(repStr, val);
                        }
                    }
                }
                newUrls.push(p);
            }
        });
        params.url = "/" + newUrls.join('/');
    }
    return params;
}

