import {Data} from './Data';

export interface Row {
  data: Data<number>;
  subData?: Array<Data<number>>;
}
