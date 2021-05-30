/**
 * @desc 保存公司配置
 */

import * as defs from '../../baseClass';
import httpService from '@/utils/httpService';

export class Params {}
export const init = new defs.Resp();

export async function request(params: any, bodyParams: any) {
  return httpService({
    url: '/v1/company/save',
    data: bodyParams,
    method: 'post',
  });
}
