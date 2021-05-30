/**
 * @desc 发送手机验证码
 */

import * as defs from '../../baseClass';
import httpService from '@/utils/httpService';

export class Params {}
export const init = new defs.Resp();

export async function request(params: any) {
  return httpService({
    url: '/v1/mp/sendSmsCode',
    params,
    method: 'get',
  });
}
