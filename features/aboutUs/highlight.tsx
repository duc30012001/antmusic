import Section from '@/components/section';
import Image from 'next/image';
import { logoList } from './data';

type Props = {};

function Highlight({}: Props) {
  return (
    <Section
      title="150+ Different Digital Stores"
      description="ANT Music is partnered with 150 digital music services and counting, available across 200 countries and territories globally. Sell your music on every major digital store, like Youtube, Spotify, Apple Music, Deezer, Amazon, and more."
      className="my-16"
    >
      <div className="grid grid-cols-3 gap-10 sm:grid-cols-4 lg:grid-cols-6">
        {logoList.map((item) => (
          <Image
            key={item.id}
            className="m-auto h-auto max-h-10 w-auto text-white"
            src={item.src}
            alt={item.alt}
          />
        ))}
      </div>
    </Section>
  );
}

export default Highlight;
