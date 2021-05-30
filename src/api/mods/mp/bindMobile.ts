/**
 * @desc 绑定当前客户手机号
 */

import * as defs from '../../baseClass';
import httpService from '@/utils/httpService';

export class Params {}
export const init = new defs.Resp();

export async function request(params: any) {
  return httpService({
    url: '/v1/mp/bindMobile',
    params,
    method: 'get',
  });
}
