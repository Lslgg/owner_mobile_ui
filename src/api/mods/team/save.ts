/**
 * @desc 保存团队信息
 */

import * as defs from '../../baseClass';
import httpService from '@/utils/httpService';

export class Params {}
export const init = new defs.Resp();

export async function request(params: any, bodyParams: any) {
  return httpService({
    url: '/v1/team/save',
    data: bodyParams,
    method: 'post',
  });
}
