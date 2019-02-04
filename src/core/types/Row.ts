import {CheckedRow} from '../../components/Table/Fancy/types';
import {Data} from './Data';

export interface Row extends Partial<CheckedRow> {
  name: string;
  data: Data;
}
