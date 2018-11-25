import {Direction} from './direction';

export interface MenuDispatchProps {
  add: (side: Direction, column: string, columns: string[]) => void;
  remove: (columns: string[]) => void;
}
