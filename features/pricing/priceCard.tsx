import { NavigateButton } from '@/components/ui';
import { Divider } from 'antd';
import { PricingData } from './data';

type Props = {
  data: PricingData;
};

function PriceCard({ data }: Props) {
  return (
    <div className="flex w-full max-w-md flex-col rounded-xl bg-neutral-800 px-5 py-10">
      <h3 className="text-center text-2xl font-semibold">{data.title}</h3>
      <Divider />
      <ul className="h-max grow px-5 text-lg">
        {data.data.map((item) => (
          <li key={item.id} className="list-disc">
            {item.title}
          </li>
        ))}
      </ul>
      <h4 className="my-10 text-center text-2xl font-semibold">
        ${data.price} / month
      </h4>
      <div className="text-center">
        <NavigateButton href="/contact">Get Started</NavigateButton>
      </div>
    </div>
  );
}

export default PriceCard;
