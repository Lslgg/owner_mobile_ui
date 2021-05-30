/**
 * @desc 获取维修师傅列表
 */

import * as defs from '../../baseClass';
import httpService from '@/utils/httpService';

export class Params {}
export const init = new defs.Resp();

export async function request(params: any) {
  return httpService({
    url: '/v1/order/getRepairUser',
    params,
    method: 'get',
  });
}
