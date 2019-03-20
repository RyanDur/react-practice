import {ReactNode} from 'react';
import * as React from 'react';

interface WindowProps {
  title: string;
  children: ReactNode | ReactNode[];
}

export const DisplayWindow = ({title, children}: WindowProps) =>
  <section>
    <h1>{title}</h1>
    {children}
  </section>;
