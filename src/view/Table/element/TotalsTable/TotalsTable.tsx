import {ReactNode} from 'react';
import * as React from 'react';
import {Data} from '../../../../core/types';
import {Columns} from '..';
import {Totals} from '..';

interface TotalsTableProps {
  columns: string[];
  totals: Data<any>;
  children?: ReactNode[] | ReactNode;
  id: string;
}

export const TotalsTable = (props: TotalsTableProps) =>
  <table id={props.id}>
    <Columns {...props}/>
    {props.children}
    <Totals {...props}/>
  </table>;
