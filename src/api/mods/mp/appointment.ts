/**
 * @desc 预约订单
 */

import * as defs from '../../baseClass';
import httpService from '@/utils/httpService';

export class Params {}
export const init = new defs.Resp();

export async function request(params: any, bodyParams: any) {
  return httpService({
    url: '/v1/mp/appointment',
    data: bodyParams,
    method: 'post',
  });
}
