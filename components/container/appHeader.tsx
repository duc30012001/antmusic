import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: ReactNode;
  className?: string;
};

export default function AppHeader({ children, className }: Props) {
  return (
    <div
      className={twMerge(
        'mb-4 flex flex-col justify-between lg:flex-row',
        className
      )}
    >
      {children}
    </div>
  );
}
