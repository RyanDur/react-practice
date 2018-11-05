import {Data, Row} from "./TableState";

type RowEntry = [string, number]

export const sumEntry = (acc: number, [_, val]: RowEntry): number => acc + val;
export const flattenObjects = (acc: object, obj: object): object => ({...acc, ...obj});
export const getRowsData = (rows: Row[] = []): Data[] => rows.map((row: Row) => row.data);
const merge = (data: (r: Data) => Data) => (acc: Data, row: Data): Data => ({...acc, ...data(row)});

export const transposeRows = (rows: Data[]): RowEntry[][] => {
  const rowEntries = rows.map(Object.entries);
  return rowEntries[0] && rowEntries[0]
    .map((_, index: number) =>
      rowEntries.map(row => row[index])) || [];
};

export const collectEntries = (fn: (acc: number, entry: RowEntry) => number) =>
  (row: RowEntry[]): Data =>
    row.reduce((acc: {}, [key]: RowEntry) =>
      ({...acc, [key]: row.reduce(fn, 0)}), {});

export const sumColumns = (rows: Row[]): Data =>
  transposeRows(getCheckedRowsData(rows))
    .map(collectEntries(sumEntry))
    .reduce(flattenObjects, {});

export const updateChecked = (namedRow: Row, rows: Row[] = []): Row[] =>
  rows.map((row) =>
    namedRow.name === row.name ? {...namedRow, checked: !namedRow.checked} : row);

export const getCheckedRowsData = (rows: Row[] = []): Data[] =>
  rows.filter(row => row.checked)
    .map(row => row.data);

const consolidate = (data: Data[], rows: Row[] = [], defaultChecked?: boolean): Row[] => {
  const newData = (row: Data) => ({
    [row.name]: {
      name: row.name,
      data: removeFromObject(row, 'name')
    }
  });

  const oldData = (row: Data) => ({[row.name]: row});
  const initialData = (row: Data) => ({
    [row.name]: {checked: defaultChecked}
  });

  const newState: Data = data.reduce(merge(newData), {});
  const oldState: Data = rows.length === 0 ?
    data.reduce(merge(initialData), {}) :
    rows.reduce(merge(oldData), {});

  return Object.keys(newState).map(name =>
    ({...oldState[name], ...newState[name]})
  );
};

export const normalize = (newData: Data[] = [], oldRows: Row[] = [], defaultChecked?: boolean): { rows: Row[], totals: Data } => {
  const rows = consolidate(newData, oldRows, defaultChecked);
  const totals = sumColumns(rows);
  return {rows, totals};
};

const removeFromObject = (obj: Data, prop: string): Data =>
  Object.keys(obj).reduce((object: Data, key: string) => {
    if (key !== prop) object[key] = obj[key];
    return object;
  }, {});