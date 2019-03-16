import {ReactNode} from 'react';
import * as React from 'react';
import {PageDispatchProps, PageStateProps} from './state/connector';
import './Paginator.css';

interface ManualProps {
  children: ReactNode[];
}

type WindowProps = PageStateProps & PageDispatchProps & ManualProps;

export const Paginator = ({children, changePage, currentPage}: WindowProps) => {
  const active = (page: number) => page === currentPage;
  return <section className='paginator'>
    {children.map((child, page) => active(page) && child)}
    <nav className='menu'>
      {children.map((_, page) =>
        <input key={page}
               type='radio'
               name={'paginator'}
               value={page}
               checked={active(page)}
               onChange={() => changePage(page)}/>)}
    </nav>
  </section>;
};
