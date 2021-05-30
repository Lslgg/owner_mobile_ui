/**
 * @desc 微信公众号登录
 */

import * as defs from '../../baseClass';
import httpService from '@/utils/httpService';

export class Params {}
export const init = new defs.Resp();

export async function request(params: any) {
  return httpService({
    url: '/v1/cp/login',
    params,
    method: 'get',
  });
}
