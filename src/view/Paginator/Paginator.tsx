import {ReactNode} from 'react';
import * as React from 'react';
import {PageDispatchProps, PageStateProps} from './state/connector';
import './Paginator.css';

interface ManualProps {
  children: ReactNode[];
}

type WindowProps = PageStateProps & PageDispatchProps & ManualProps;

const pageLeft = (currentPage: number) =>
  currentPage - 1 < 0 ? currentPage : currentPage - 1;

const pageRight = (currentPage: number, numberOfPages: number) =>
  currentPage + 1 >= numberOfPages ? currentPage : currentPage + 1;

export const Paginator = ({children, changePage, currentPage}: WindowProps) => {
  const active = (page: number) => page === currentPage;
  return <section className='paginator'>
    {children.map((child, page) => active(page) && child)}
    <nav className='menu center'>
      <button className='arrow left'
              onClick={() => changePage(pageLeft(currentPage))}/>
      {children.map((_, page) =>
        <input key={page}
               className='selector'
               type='radio'
               name='paginator'
               value={page}
               checked={active(page)}
               onChange={() => changePage(page)}/>)}
      <button className='arrow right'
              onClick={() => changePage(pageRight(currentPage, children.length))}/>
    </nav>
  </section>;
};
