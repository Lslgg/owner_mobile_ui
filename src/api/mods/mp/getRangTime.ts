/**
 * @desc 获取预约日期的可预约时间段
 */

import * as defs from '../../baseClass';
import httpService from '@/utils/httpService';

export class Params {}
export const init = new defs.Resp();

export async function request(params: any) {
  return httpService({
    url: '/v1/mp/getRangTime',
    params,
    method: 'get',
  });
}
