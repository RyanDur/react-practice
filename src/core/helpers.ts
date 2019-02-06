import {Data, Row} from './types';

export const normalize = (
  newData: Data[] = [],
  oldRows: {[name: string]: Row} = {}): {[name: string]: Row} => {
  const newState: Data = newData.reduce(merge((row: Data) => ({
    [row.name]: {
      name: row.name,
      data: remove(row, 'name')
    }
  })), {});

  return Object.keys(newState).map(name =>
    ({...(oldRows[name] || {}), ...newState[name]})
  ).reduce((acc, state) => ({...acc, ...state}), {});
};

const merge = (data: (r: Data) => Data) => (acc: Data, row: Data): Data => ({...acc, ...data(row)});

const remove = (obj: Data, prop: string): Data =>
  Object.keys(obj).reduce((object: Data, key: string) => {
    if (key !== prop) { object[key] = obj[key]; }
    return object;
  }, {});
