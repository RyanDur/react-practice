import {Data} from '../../../../core/types';
import {Columns} from '../../types';

export interface FancyState {
  selected: string[];
  rows: string[];
  columns: Columns;
  totals?: Data<number>;
  defaultChecked?: boolean;
}
