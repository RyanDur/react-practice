import {Data} from '../../../../core/types';
import {SelectedRow} from './SelectedRow';

export interface CollapsibleRow extends SelectedRow {
  subRows?: Array<Data<number>>;
}
