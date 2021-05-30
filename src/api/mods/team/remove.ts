/**
 * @desc 删除团队
 */

import * as defs from '../../baseClass';
import httpService from '@/utils/httpService';

export class Params {}
export const init = new defs.Resp();

export async function request(params: any) {
  return httpService({
    url: '/v1/team/delete',
    params,
    method: 'delete',
  });
}
