import Pricing from '@/features/pricing';
import { PublicLayout } from '@/layouts';
import { NextPageWithLayout } from '@/utils/types';

const PricingPage: NextPageWithLayout = () => {
  return <Pricing />;
};

PricingPage.Layout = PublicLayout;

export default PricingPage;
