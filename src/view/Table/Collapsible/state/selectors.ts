import {AppState} from '../../../../types';

export const collapsibleRows = ({base, collapsible, core}: AppState) =>
  base.rows.map((name: string) => ({
    name,
    selected: collapsible.open.includes(name),
    data: core.data[name].data,
    subRows: core.data[name].subData
  }));
