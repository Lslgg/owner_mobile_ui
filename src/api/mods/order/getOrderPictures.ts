/**
 * @desc 获取订单照片
 */

import * as defs from '../../baseClass';
import httpService from '@/utils/httpService';

export class Params {}
export const init = new defs.Resp();

export async function request(params: any) {
  return httpService({
    url: '/v1/order/getOrderPictures',
    params,
    method: 'get',
  });
}
