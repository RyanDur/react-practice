import {AppState} from '../../../../types';

export const expandableRows = ({base, expandable, core}: AppState) =>
  base.rows.map((name: string) => ({
    name,
    selected: expandable.open.includes(name),
    data: core.data[name].data,
    subRows: core.data[name].subData
  }));
