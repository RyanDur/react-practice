import {AppState} from '../../../../types';

export const collapsibleRows = ({base, core}: AppState) =>
  base.rows.map((name: string) => ({name, data: core.data[name]}));