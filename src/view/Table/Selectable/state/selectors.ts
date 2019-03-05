import {AppState} from '../../../../types';
import {sumColumns} from '../../../helpers';

export const selectedTotals = ({base, selectable, data}: AppState) =>
  sumColumns(selectable.selected.map((row) => data.table[row].data), data.columns);

export const selectableRows = ({base, selectable, data}: AppState) =>
  base.rowNames.map((row: string) => ({
    name: row,
    selected: selectable.selected.includes(row),
    data: data.table[row].data
  }));
