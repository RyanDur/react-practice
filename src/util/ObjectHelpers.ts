import {Data} from '../core/types';

export const merge = <T>(
  left: Data<T> = {},
  right: Data<T> = {}
): Data<T> => ({...left, ...right});

export const remove = <T, S>(obj: Data<T | S>, prop: string): Data<S> =>
  Object.keys(obj).reduce((object: Data<T | S>, key: string) => {
    if (key !== prop) {
      object[key] = obj[key];
    }
    return object;
  }, {});
