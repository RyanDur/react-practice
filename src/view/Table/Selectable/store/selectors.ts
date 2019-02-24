import {AppState} from '../../../../store';
import {sumColumns} from '../../../helpers';

export const selectedTotals = ({base, selectable, core}: AppState) =>
  sumColumns(
    selectable.selected.map((selection: string) => core.data[selection]),
    core.columns);

export const selectableRows = ({base, selectable, core}: AppState) =>
  base.rows.map((rowName: string) => ({
    name: rowName,
    selected: selectable.selected.includes(rowName),
    data: core.data[rowName]
  }));
