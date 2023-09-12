import Section from '@/components/section';
import ContactForm from './contactForm';

type Props = {};

export default function ContactUS({}: Props) {
  return (
    <Section
      title="Get started now"
      description="Join our artists and start selling your music online"
    >
      <ContactForm />
    </Section>
  );
}
