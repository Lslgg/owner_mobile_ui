/**
 * @desc 获取当前登录用户的公司列表
 */

import * as defs from '../../baseClass';
import httpService from '@/utils/httpService';

export class Params {}
export const init = new defs.Resp();

export async function request(params: any) {
  return httpService({
    url: '/v1/company/getList',
    params,
    method: 'get',
  });
}
