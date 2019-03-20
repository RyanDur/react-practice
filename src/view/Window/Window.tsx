import React, {ReactNode} from 'react';

interface WindowProps {
  title: string;
  children?: ReactNode | ReactNode[];
}

export const Window = ({title, children}: WindowProps) => {
  return <section>
    <h1>{title}</h1>
    {children}
  </section>;
};
