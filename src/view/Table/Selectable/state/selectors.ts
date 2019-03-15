import {AppState} from '../../../../types';
import {sumColumns} from '../../../helpers';

export const selectedTotals = ({base, selectable, data}: AppState) =>
  sumColumns(Object.entries(selectable.selected)
    .filter(([_, selected]) => selected)
    .map(([row]) => data.table[row].data), data.columns);

export const selectableRows = ({base, selectable, data}: AppState) =>
  base.rowNames.map((row: string) => ({
    name: row,
    selected: selectable.selected[row],
    data: data.table[row].data
  }));
