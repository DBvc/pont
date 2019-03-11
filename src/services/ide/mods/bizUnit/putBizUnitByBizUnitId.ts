/**
 * @desc 更新一个业务板块
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** bizUnitId */
  bizUnitId: number;
}

export const init = undefined;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/bizUnit/{bizUnitId}',
    params: bodyParams,
    method: 'put'
  });
}