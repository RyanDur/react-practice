import {AppState} from '../../../../store';

export const collapsibleRows = ({base, core}: AppState) =>
  base.rows.map((name: string) => ({name, data: core.data[name]}));
