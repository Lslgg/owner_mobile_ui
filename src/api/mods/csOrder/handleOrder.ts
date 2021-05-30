/**
 * @desc 处理工单
 */

import * as defs from '../../baseClass';
import httpService from '@/utils/httpService';

export class Params {}
export const init = new defs.Resp();

export async function request(params: any, bodyParams: any) {
  return httpService({
    url: '/v1/csorder/handleOrder',
    data: bodyParams,
    method: 'post',
  });
}
