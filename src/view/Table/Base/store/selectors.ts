import {AppState} from '../../../../types';
import {sumColumns} from '../../../helpers';

export const columns = ({base}: AppState) => base.columns;

export const rows = ({base, core}: AppState) =>
  base.rows.map((name: string) => ({name, data: core.data[name]}));

export const totals = ({base, core}: AppState) =>
  sumColumns(base.rows.map((name: string) => core.data[name]), base.columns);
