import AboutUs from '@/features/aboutUs';
import ContactUS from '@/features/contact';
import FAQ from '@/features/faq';
import Pricing from '@/features/pricing';
import { PublicLayout } from '@/layouts';

export default function HomePage() {
  return (
    <PublicLayout>
      <AboutUs />
      <Pricing />
      <FAQ />
      <ContactUS />
    </PublicLayout>
  );
}
