import {Data} from '../../../../core/types';
import {Columns} from '../../types';
import {CheckedRow} from './CheckedRow';

export interface FancyState {
  rows: CheckedRow[];
  columns: Columns;
  totals?: Data;
  defaultChecked?: boolean;
}
