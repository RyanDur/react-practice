import {Data, Row} from "./reducer";

type RowEntry = [string, number]

export const sumEntry = (acc: number, [_, val]: RowEntry): number => acc + val;
export const flattenObjects = (acc: object, obj: object): object => ({...acc, ...obj});
export const getRowsData = (rows: Row[] = []): Data[] => rows.map((row: Row) => row.data);

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