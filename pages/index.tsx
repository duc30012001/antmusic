import AboutUs from '@/features/aboutUs';
import ContactUS from '@/features/contact';
import FAQ from '@/features/faq';
import { PublicLayout } from '@/layouts';

export default function HomePage() {
  return (
    <PublicLayout>
      <AboutUs />
      <FAQ />
      <ContactUS />
    </PublicLayout>
  );
}
