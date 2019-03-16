import {ReactNode} from 'react';
import * as React from 'react';
import './Paginator.css';
import {PageDispatchProps, PageStateProps} from './state/connector';

interface ManualProps {
  children: ReactNode[];
}

type WindowProps = PageStateProps & PageDispatchProps & ManualProps;

export const Paginator = ({children, changePage, currentPage}: WindowProps) => {
  const active = (page: number) => page === currentPage;
  return <section className='paginator'>
    {children.map((child, page) => active(page) && child)}
    {children.map((_, page) =>
      <input key={page}
             type='radio'
             name={'paginator'}
             value={page}
             checked={active(page)}
             onChange={() => changePage(page)}/>)}
  </section>;
};
