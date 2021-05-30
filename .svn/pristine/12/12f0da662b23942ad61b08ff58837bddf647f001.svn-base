import { Toast } from 'vant';
/** 显示提示信息 */
export const toastBottom = (message: string) => {
    Toast.loading({
        message,
        position: 'bottom',
        forbidClick: true,
    });
};

/**
 * 空格换行
 * @param content 文本内容
 */
export function transferString(content: string) {
    let str = content;
    try {
        str = str.replace(/\r\n/g, "<br>");
        str = str.replace(/\n/g, "<br>");
    } catch (e) {
        alert(e.message);
    }
    return str;
}


