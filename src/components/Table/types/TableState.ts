import {Data, Row} from '../../../core/types';
import {Columns} from './Columns';

export interface TableState {
  rows?: Row[];
  defaultChecked?: boolean;
  totals?: Data;
  columns: Columns;
}
