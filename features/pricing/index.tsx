import Section from '@/components/section';
import { freeData, proData, superData } from './data';
import PriceCard from './priceCard';

type Props = {};

export default function Pricing({}: Props) {
  return (
    <Section
      title="Find the plan that best suits you"
      description="Distribute music to over 150 digital stores across 200 countries and territories worldwide. Get daily sales trends for Amazon, iTunes, Apple Music, and Spotify, and keep every cent of what you're owed from sales and streams."
    >
      <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:items-stretch">
        <PriceCard data={freeData} />
        <PriceCard data={proData} />
        <PriceCard data={superData} />
      </div>
    </Section>
  );
}
