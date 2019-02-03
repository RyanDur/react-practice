import {Data, Row} from './types';

export const normalize = (
  newData: Data[] = [],
  oldRows: Row[] = []): Row[] => {
  const newState: Data = newData.reduce(merge((row: Data) => ({
    [row.name]: {
      name: row.name,
      data: remove(row, 'name')
    }
  })), {});
  const oldState: Data = oldRows.reduce(merge((row: Data) => ({[row.name]: row})), {});

  return Object.keys(newState).map(name =>
    ({...oldState[name], ...newState[name]})
  );
};

const merge = (data: (r: Data) => Data) => (acc: Data, row: Data): Data => ({...acc, ...data(row)});

const remove = (obj: Data, prop: string): Data =>
  Object.keys(obj).reduce((object: Data, key: string) => {
    if (key !== prop) { object[key] = obj[key]; }
    return object;
  }, {});
