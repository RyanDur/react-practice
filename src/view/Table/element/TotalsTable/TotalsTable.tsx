import {ReactNode} from 'react';
import * as React from 'react';
import {Columns} from '..';
import {Totals} from '..';
import {Classes} from '../../../types/Classes';
import {Data} from '../../data/types';

interface TotalsTableProps {
  columns: string[];
  totals: Data<any>;
  draggable?: boolean;
  children?: ReactNode[] | ReactNode;
  id: string;
}

export const TotalsTable = (props: TotalsTableProps & Classes) =>
  <table id={props.id} className={(props.classes || []).join(' ')}>
    <Columns {...props}/>
    {props.children}
    <Totals {...props}/>
  </table>;
