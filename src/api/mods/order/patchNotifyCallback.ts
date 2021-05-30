/**
 * @desc notifyCallback
 */

import * as defs from '../../baseClass';
import httpService from '@/utils/httpService';

export class Params {}
export const init = undefined;

export async function request(params: any) {
  return httpService({
    url: '/v1/order/notifyCallback',
    params,
    method: 'patch',
  });
}
