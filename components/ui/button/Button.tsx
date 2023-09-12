import { Button as AntdButton, ButtonProps } from 'antd';
import { twMerge } from 'tailwind-merge';

export function Button({ className, ...props }: ButtonProps) {
  return (
    <AntdButton
      {...props}
      className={twMerge(
        '!inline-flex !h-auto items-center justify-center !px-6 !py-2',
        className
      )}
    />
  );
}
