import { ReactNode } from 'react';

type Props = {
  title?: ReactNode;
  description?: ReactNode;
};

function SectionTitle({ title, description }: Props) {
  return (
    <div className="mb-10">
      <h2 className="section-header mb-1 text-center text-4xl font-bold capitalize leading-tight">
        {title}
      </h2>
      <p className="text-center leading-loose">{description}</p>
    </div>
  );
}

export default SectionTitle;
