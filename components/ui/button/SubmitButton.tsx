import Link from 'next/link';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: ReactNode;
  href: string;
  className?: string;
};

export function NavigateButton({ children, href, className }: Props) {
  return (
    <Link href={href}>
      <button
        className={twMerge(
          'rounded-lg bg-blue-700 px-5 py-2.5 font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
          className
        )}
      >
        {children}
      </button>
    </Link>
  );
}
