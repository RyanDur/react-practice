import {Data} from './Data';

export interface Row {
  data: Data<number>;
  subRows?: Array<Data<number>>;
}
