import {Row} from "./Row";
import {Data} from "./Data";
import {Columns} from "./Columns";

export interface TableState {
  rows?: Row[];
  defaultChecked?: boolean;
  totals?: Data;
  columns: Columns;
}