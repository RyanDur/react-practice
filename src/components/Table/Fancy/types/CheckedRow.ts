import {Row} from '../../../../core/types';

export interface CheckedRow extends Partial<Row> {
  name: string;
  checked?: boolean;
}
