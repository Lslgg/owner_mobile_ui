/**
 * @desc 保存客户信息
 */

import * as defs from '../../baseClass';
import httpService from '@/utils/httpService';

export class Params {}
export const init = new defs.Resp();

export async function request(params: any, bodyParams: any) {
  return httpService({
    url: '/v1/customer/save',
    data: bodyParams,
    method: 'post',
  });
}
