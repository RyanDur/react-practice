import {Data} from '../../../../core/types';
import {Columns} from '../../types';
import {Selected} from './Selected';

export interface FancyState {
  rows: Selected[];
  columns: Columns;
  totals?: Data;
  defaultChecked?: boolean;
}
