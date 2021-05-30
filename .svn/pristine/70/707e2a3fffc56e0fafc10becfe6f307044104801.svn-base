import { Toast } from 'vant';

class Utils {
    static toast(message: string, time?: number): any {
        return Toast({
            message: message,
            duration: time || 1500
        })
    }

    // 获取url参数
    static getQuery(str: string): string|null{
        const reg = new RegExp('(^|&)' + str + "=([^&]*)", "i");
        const r = decodeURI(window.location.search.substr(1)).match(reg);
        if (r != null) return r[2];
        return null;
	}

    static isIos(): boolean {
        const u = navigator.userAgent;
        const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
        // const isIOS = !!u.match(/(i[^;]+;( U;)? CPU.+Mac OS X/);
        if (isAndroid) {
            return false;
        }else {
            return true
        }
    }

    static isMobiler(): boolean {
        let isMobile = false;
        ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad'].map(function (terminal) {
            if (window.navigator.userAgent.indexOf(terminal) > 0) {
                isMobile = true;
            }
            return terminal;
        })
        return isMobile
    }
}

export default Utils;