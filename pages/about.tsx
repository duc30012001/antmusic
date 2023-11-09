import AboutUs from '@/features/aboutUs';
import { PublicLayout } from '@/layouts';
import { NextPageWithLayout } from '@/utils/types';

const AboutPage: NextPageWithLayout = () => {
  return <AboutUs />;
};

AboutPage.Layout = PublicLayout;

export default AboutPage;
