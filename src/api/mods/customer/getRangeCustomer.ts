/**
 * @desc 获取客户周边范围的客户
 */

import * as defs from '../../baseClass';
import httpService from '@/utils/httpService';

export class Params {}
export const init = new defs.Resp();

export async function request(params: any) {
  return httpService({
    url: '/v1/customer/getRangeCustomer',
    params,
    method: 'get',
  });
}
