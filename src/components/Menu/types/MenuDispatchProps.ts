import {Direction} from '../../Table/types';

export interface MenuDispatchProps {
  add: (side: Direction, column: string, columns: string[]) => void;
  remove: (columns: string[]) => void;
}
