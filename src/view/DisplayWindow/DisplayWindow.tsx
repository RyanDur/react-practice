import {ReactNode} from 'react';
import * as React from 'react';
import './DisplayWindow.css';

interface WindowProps {
  title: string;
  children: ReactNode | ReactNode[];
}

export const DisplayWindow = ({title, children}: WindowProps) =>
  <section className='display'>
    <h1 className='title center'>{title}</h1>
    <article className='window'>
      {children}
    </article>
  </section>;
