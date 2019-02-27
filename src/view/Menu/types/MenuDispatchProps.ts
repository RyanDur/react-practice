import {direction as Direction} from '../../Table/element/types';

export interface MenuDispatchProps {
  add: (side: Direction, column: string, columns: string[]) => void;
  remove: (columns: string[]) => void;
}
