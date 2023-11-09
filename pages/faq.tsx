import FAQ from '@/features/faq';
import { PublicLayout } from '@/layouts';
import { NextPageWithLayout } from '@/utils/types';

const FAQPage: NextPageWithLayout = () => {
  return <FAQ />;
};

FAQPage.Layout = PublicLayout;

export default FAQPage;
