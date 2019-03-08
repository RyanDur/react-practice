import {ReactNode} from 'react';
import * as React from 'react';
import './Carousel.css';
import {WindowDispatchProps, WindowStateProps} from './connector';

interface ManuelProps {
  children: ReactNode[];
}

type WindowProps = WindowStateProps & WindowDispatchProps & ManuelProps;

export const Carousel = ({children, handleChange, currentWindow}: WindowProps) =>
  <section className='carousel'>
    {children.map((_, index) =>
      <input key={index}
             type='radio'
             name={'carousel'}
             value={index}
             checked={index === currentWindow}
             onChange={() => handleChange(index)}/>)}
    {children.map((child, index) =>
      index === currentWindow &&
      <div key={index} className={'window center'}>
        {child}
      </div>)}
  </section>;
