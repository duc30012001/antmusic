import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import Container, { TypeContainer } from '../container';
import SectionTitle from './sectionTitle';

type Props = {
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
  typeContainer?: TypeContainer;
};

function Section({
  title,
  children,
  className,
  description,
  typeContainer,
}: Props) {
  return (
    <div className={twMerge('mb-10 py-10', className)}>
      <Container typeContainer={typeContainer}>
        {title && <SectionTitle title={title} description={description} />}
        {children}
      </Container>
    </div>
  );
}

export default Section;
