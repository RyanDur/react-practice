import {ReactNode} from 'react';
import * as React from 'react';
import './Carousel.css';

interface WindowProps {
  children: ReactNode[];
}

export const Carousel = ({children}: WindowProps) => <section className='carousel'>
  {children}
</section>;
