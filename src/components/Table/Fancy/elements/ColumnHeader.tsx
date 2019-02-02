import * as React from 'react';
import {DragEvent} from 'react';
import {ElementProps} from './ElementProps';
import './ColumnHeader.css';

interface ColumnHeaderProps {
  column: string;
  classes?: string[];
  ondrag?: (event: DragEvent) => void;
  ondragend?: (event: DragEvent) => void;
}

export const ColumnHeader = (props: ElementProps & ColumnHeaderProps) =>
  <div draggable={true}
       onDrag={(event) => event.currentTarget.classList.add('hide')}
       onDragEnd={(event) => event.currentTarget.classList.remove('hide')}
       className={['column-header', ...props.classes].join(' ')}
       data-column={props.column}>{props.children}</div>;
