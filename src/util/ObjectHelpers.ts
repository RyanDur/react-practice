import {Data} from '../view/Table/data/types';

export const merge = <T>(
  left: Data<T> = {},
  right: Data<T> = {}
): Data<T> => ({...left, ...right});

export const remove = (obj: Data<any>, prop: string): Data<any> =>
  Object.keys(obj).reduce((object: Data<any>, key: string) => {
    if (key !== prop) {
      object[key] = obj[key];
    }
    return object;
  }, {});
