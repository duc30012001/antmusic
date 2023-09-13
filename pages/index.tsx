import { Highlight, Introduce } from '@/features/aboutUs';
import ContactUS from '@/features/contact';
import FAQ from '@/features/faq';
import Pricing from '@/features/pricing';
import { PublicLayout } from '@/layouts';

export default function HomePage() {
  return (
    <PublicLayout>
      <Introduce />
      <Highlight />
      <Pricing />
      <FAQ />
      <ContactUS />
    </PublicLayout>
  );
}
