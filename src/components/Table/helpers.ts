import {Columns, Data, Row} from './types';
import {Direction} from './menu/types';

export const sumColumns = (rows: Row[], columns: string[]): Data => {
  return columns.map(column =>
    ({
      [column]: rows
        .map((row: Row) => row.checked ? row.data[column] : 0)
        .reduce((acc, num) => acc + num, 0)
    })
  ).reduce((acc, col) => ({...acc, ...col}), {});
};

export const updateChecked = (namedRow: Row, rows: Row[] = []): Row[] =>
  rows.map((row) =>
    namedRow.name === row.name ? {...namedRow, checked: !namedRow.checked} : row);

export const normalize = (
  newData: Data[] = [],
  oldRows: Row[] = []): Row[] => {
  const newState: Data = newData.reduce(merge((row: Data) => ({
    [row.name]: {
      name: row.name,
      data: removeFromObject(row, 'name')
    }
  })), {});
  const oldState: Data = oldRows.reduce(merge((row: Data) => ({[row.name]: row})), {});

  return Object.keys(newState).map(name =>
    ({...oldState[name], ...newState[name]})
  );
};

export const addColumns = (
  side: Direction,
  column: string,
  columnsToAdd: string[],
  columns: Columns): Columns => {
  return {
    active: addTo(side, column, columnsToAdd, columns.active),
    inactive: remove(columnsToAdd, columns.inactive)
  };
};

export const removeColumns = (columnsToRemove: string[], columns: Columns): Columns => ({
  active: remove(columnsToRemove, columns.active),
  inactive: [...columns.inactive, ...columnsToRemove]
});

const merge = (data: (r: Data) => Data) => (acc: Data, row: Data): Data => ({...acc, ...data(row)});

const removeFromObject = (obj: Data, prop: string): Data =>
  Object.keys(obj).reduce((object: Data, key: string) => {
    if (key !== prop) object[key] = obj[key];
    return object;
  }, {});

const remove = (
  columnsToRemove: string[],
  columns: string[]
): string[] =>
  columnsToRemove.reduce((
    acc: string[],
    column: string
  ): string[] => {
    const index = acc.indexOf(column);
    return [...acc.slice(0, index), ...acc.slice(index + 1)];
  }, columns);

const addTo = (
  side: Direction,
  column: string,
  addColumns: string[],
  columns: string[],
): string[] => {
  const columnIndex = columns.indexOf(column);
  const front = (n: number) => columns.slice(0, columnIndex + n);
  const back = (n: number) => columns.slice(columnIndex + n);
  return side === Direction.Right ?
    [...front(1), ...addColumns, ...back(1)] :
    [...front(0), ...addColumns, ...back(0)];
};