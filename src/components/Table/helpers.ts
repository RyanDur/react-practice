import {Data, Row} from '../../core/types';
import {CheckedRow} from './Fancy/types';
import {Columns} from './types';
import {Direction} from './Menu/types';

export const sumColumns = (rows: Row[], columns: string[]): Data => {
  return columns.map(column =>
    ({
      [column]: rows
        .map((row: Row) => row.data[column])
        .reduce((acc, num) => acc + num, 0)
    })
  ).reduce((acc, col) => ({...acc, ...col}), {});
};

export const updateChecked = (namedRow: CheckedRow, rows: CheckedRow[] = []): CheckedRow[] =>
  rows.map((row) =>
    namedRow.name === row.name ? {...namedRow, checked: !namedRow.checked} : row);

export const addColumns = (
  side: Direction,
  column: string,
  columnsToAdd: string[],
  columns: Columns): Columns => {
  return {
    active: addTo({side, column, columnsToAdd, columns: columns.active}),
    inactive: remove(columnsToAdd, columns.inactive)
  };
};

export const removeColumns = (columnsToRemove: string[], columns: Columns): Columns => ({
  active: remove(columnsToRemove, columns.active),
  inactive: [...columns.inactive, ...columnsToRemove]
});

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
  parameters: { side: Direction, column: string, columnsToAdd: string[], columns: string[] }
): string[] => {
  const {side, column, columnsToAdd, columns} = parameters;
  const columnIndex = columns.indexOf(column);
  const front = (n: number) => columns.slice(0, columnIndex + n);
  const back = (n: number) => columns.slice(columnIndex + n);
  return side === Direction.Right ?
    [...front(1), ...columnsToAdd, ...back(1)] :
    [...front(0), ...columnsToAdd, ...back(0)];
};
