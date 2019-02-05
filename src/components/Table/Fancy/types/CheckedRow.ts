import {Row} from '../../../../core/types';

export interface CheckedRow extends Row {
  name: string;
  checked?: boolean;
}
