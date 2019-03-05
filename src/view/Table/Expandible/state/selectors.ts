import {AppState} from '../../../../types';
import {ExpandableRow} from '../../element/types/row';

export const expandableRows = ({base, expandable, data}: AppState): ExpandableRow[] =>
  base.rowNames.map((row) => ({
    name: row,
    selected: expandable.open.includes(row),
    data: data.table[row].data,
    subRows: data.table[row].subRows
  }));
