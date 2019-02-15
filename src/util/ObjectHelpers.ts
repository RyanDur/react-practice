import {Data} from '../core/types';

export const merge = (
  left: Record<string, any> = {},
  right: Record<string, any> = {}
): Record<string, any> => ({...left, ...right});

export const remove = (obj: Data, prop: string): Data =>
  Object.keys(obj).reduce((object: Data, key: string) => {
    if (key !== prop) {
      object[key] = obj[key];
    }
    return object;
  }, {});
