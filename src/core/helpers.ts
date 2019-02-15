import {NormalizedRows} from './helpers';
import {Data, Row} from './types';

export interface NormalizedRows {
  [name: string]: Row;
}

const merge = (
  left: Record<string, any> = {},
  right: Record<string, any> = {}
): Record<string, any> => ({...left, ...right});

const getData = (currentData: Data = {}, newData: Data): Data =>
  ({
    ...Object.keys(newData)
      .map(column => currentData[column])
      .reduce(merge, {}),
    ...newData
  });

export const normalize = (
  currentState: NormalizedRows = {},
  newRows: Data[] = []
): NormalizedRows => {
  if (newRows.length === 0) {
    return currentState;
  }
  return newRows.map(row => ({
    name: row.name,
    data: getData(
      currentState[row.name] && currentState[row.name].data,
      remove(row, 'name')
    )
  })).reduce((acc: NormalizedRows, row: Row) => ({
    ...acc, [row.name]: {
      name: row.name,
      data: merge(acc[row.name] && acc[row.name].data, row.data)
    }
  }), {});
};

const remove = (obj: Data, prop: string): Data =>
  Object.keys(obj).reduce((object: Data, key: string) => {
    if (key !== prop) {
      object[key] = obj[key];
    }
    return object;
  }, {});
