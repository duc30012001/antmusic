import { ReactNode } from 'react';
import Content from './content';
import Footer from './footer';
import Header from './header';

type Props = {
  children: ReactNode;
};

export function PublicLayout({ children }: Props) {
  return (
    <div className="overflow-x-hidden bg-background-primary text-text-primary">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
}
