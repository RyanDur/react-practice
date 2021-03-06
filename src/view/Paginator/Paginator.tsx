import {ReactNode, Fragment} from 'react';
import * as React from 'react';
import {PageDispatchProps, PageStateProps} from './state/connector';
import './Paginator.css';

interface ManualProps {
  children: ReactNode[];
}

type WindowProps = PageStateProps & PageDispatchProps & ManualProps;

const pageLeft = (currentPage: number, numberOfPages: number) =>
  currentPage - 1 < 0 ? numberOfPages - 1 : currentPage - 1;

const pageRight = (currentPage: number, numberOfPages: number) =>
  currentPage + 1 >= numberOfPages ? 0 : currentPage + 1;

export const Paginator = ({children, changePage, currentPage}: WindowProps) => {
  const active = (page: number) => page === currentPage;
  return <section className='paginator'>
    {children.map((child, page) => active(page) && child)}
    <nav className='menu center'>
      <button className='navigation selector center left'
              onClick={() => changePage(pageRight(currentPage, children.length))}>
        <b className='arrow'>↪</b>
      </button>
      <ul className='navigation selectors center'>
        {children.map((_, page) =>
          <Fragment key={page}>
            <input id={`page-${page}`}
                   className='off-page selector'
                   type='radio'
                   name='paginator'
                   value={page}
                   checked={active(page)}
                   onChange={() => changePage(page)}/>
            <label htmlFor={`page-${page}`} className='option'/>
          </Fragment>)}
      </ul>
      <button className='navigation selector center right'
              onClick={() => changePage(pageLeft(currentPage, children.length))}>
        <b className='arrow'>↩</b>
      </button>
    </nav>
  </section>;
};
