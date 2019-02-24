import {Data} from '../core/types';
import {Columns, direction as Direction} from './Table/elements/types';

const sum = (acc: number, num: number = 0) => acc + num;

const rowData = (column: string) => (data: Data<number> = {}) => data[column] || 0;

export const sumColumns = (data: Array<Data<number>> = [], columns: string[] = []): Data<number> =>
  columns.map(column =>
    ({[column]: data.map(rowData(column)).reduce(sum, 0)})
  ).reduce((acc, col) => ({...acc, ...col}), {});

export const updateSelected = (selection: string, selected: string[] = []): string[] =>
  selected.includes(selection) ? remove([selection], selected) : [...selected, selection];

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

const remove = <T>(
  thingsToRemove: T[],
  things: T[]
): T[] =>
  thingsToRemove.reduce((
    acc: T[],
    thing: T
  ): T[] => {
    const index = acc.indexOf(thing);
    return [...acc.slice(0, index), ...acc.slice(index + 1)];
  }, things);

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

export const union = <T>(arr1: T[], arr2: T[]): T[] =>
  Array.from(new Set<T>([...(arr1 || []), ...(arr2 || [])]));
