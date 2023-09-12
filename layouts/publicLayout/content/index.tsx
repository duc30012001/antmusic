import { LiveChatButton, ScrollToTopButton } from '@/components/ui';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function Content({ children }: Props) {
  return (
    <div className="mb-20">
      {children}
      <ScrollToTopButton />
      <LiveChatButton />
    </div>
  );
}

export default Content;
