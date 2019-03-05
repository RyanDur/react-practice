import {AppState} from '../../../../types';
import {sumColumns} from '../../../helpers';
import {HeaderRow} from '../../element/types/row';

export const columns = ({base}: AppState) => base.columns;

export const rows = ({base, data}: AppState): HeaderRow[] =>
  base.rowNames.map((row) => ({name: row, data: data.table[row].data}));

export const totals = ({base, data}: AppState) =>
  sumColumns(base.rowNames.map((row) => data.table[row].data), base.columns);
