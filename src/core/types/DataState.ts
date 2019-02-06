import {Row} from './Row';

export interface DataState {
  rows: {[name: string]: Row};
  columns: string[];
}
