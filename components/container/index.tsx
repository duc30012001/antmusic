/* eslint-disable no-unused-vars */
import { ReactNode } from 'react';

export enum TypeContainer {
  PUBLIC = 'public',
  PROTECTED = 'protected',
}

type Props = {
  children: ReactNode;
  typeContainer?: TypeContainer;
};

function Container({ children, typeContainer }: Props) {
  return (
    <div
      className={`mx-auto px-4 ${
        typeContainer === 'protected' ? 'max-w-full' : 'max-w-screen-xl'
      }`}
    >
      {children}
    </div>
  );
}

export default Container;
