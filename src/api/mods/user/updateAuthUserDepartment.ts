/**
 * @desc 修改用户的权限部门
 */

import * as defs from '../../baseClass';
import httpService from '@/utils/httpService';

export class Params {}
export const init = new defs.Resp();

export async function request(params: any, bodyParams: any) {
  return httpService({
    url: '/v1/user/updateAuthUserDepartment',
    data: bodyParams,
    method: 'post',
  });
}
