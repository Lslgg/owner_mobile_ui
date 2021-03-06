import moment from 'moment';
import SingletonClass from './SingletonClass';


class  Utility extends SingletonClass {
    /** 单例模式 */
    public static ins(): Utility {
      return super.ins() as Utility
    }


    /**
     * 计算月的第一天和最和一天
     * @param nowDate 日期
     * @return 月份的第一天，和最后一天
     */
    public getMonthStarAndEnd(nowDate: Date): { StartDate: string, EndDate: string } {

        // 日期第一天
        const nDate = new Date(moment(nowDate).format('YYYY-MM-DD'));
        const start = new Date(nDate);
        start.setDate(1);
        const startDate = moment(start).format('YYYY-MM-DD');

        // 日期第一天
        const enddate = new Date(nDate);
        // 月份移至下月份
        enddate.setMonth(enddate.getMonth() + 1);
        // 下个月份的第一天
        enddate.setDate(1);
        // 日期-1当月的最后一天
        enddate.setDate(enddate.getDate() - 1);
        const endDate = moment(enddate).format('YYYY-MM-DD');
        return {
            StartDate: startDate,
            EndDate: endDate,
        };
    }


    /**
     * 减去时间单位天数
     * @param {date} date
     * @returns {number} day
     * @return {string} 2012-12-12
     */
    public reduceDateFormat(date: Date, day: number): string {
        const nowDate = new Date(moment(date).format('YYYY-MM-DD'));
        nowDate.setDate(nowDate.getDate() - day);
        const nowDay = moment(nowDate).format('YYYY-MM-DD');
        return nowDay;
    }

    /**
     * 减去时间天数
     * @param date 日期
     * @param day  要减去的天数
     * @returns {Date} 新的日期
     */
    public reduceDate(date: Date, day: number): Date {
        const nowDate = new Date(moment(date).format('YYYY-MM-DD'));
        nowDate.setDate(nowDate.getDate() - day);
        return nowDate;
    }

    /**
     *
     * 日期格式注意这是客户端时间
     * 如果要服务器时间请传入服务器日期
     * @param {Date} [date=new Date()]
     * @param {string} [format='YYYY-MM-DD']
     * @returns
     */
    public toDateFormat(date = new Date(), format = 'YYYY-MM-DD'): string {
        return moment(date).format(format);
    }

    /**
     * 获取url参数
     * @param name url
     */
    public getQueryString(name: string) {
        const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        const r = window.location.search.substr(1).match(reg);
        if (r !== null) { return unescape(r[2]); } return null;
    }

    /** 日期转换成数字秒 */
    public dateToNum(date: string) {
        return Number(((new Date(date)).getTime() / 1000).toFixed(0));
    }

    /** 数字秒转换成日期 */
    public numToDate(date: number, format = 'YYYY-MM-DD') {
        return this.toDateFormat(new Date(date), format);
    }
}

export default Utility.ins()
