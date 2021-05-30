/**
 * @desc 获取最近7天的预约日期
 */

import * as defs from '../../baseClass';
import httpService from '@/utils/httpService';

export class Params {}
export const init = new defs.Resp();

export async function request(params: any) {
  return httpService({
    url: '/v1/order/getOrderDateList',
    params,
    method: 'get',
  });
}
