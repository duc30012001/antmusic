import ContactUS from '@/features/contact';
import { PublicLayout } from '@/layouts';
import { NextPageWithLayout } from '@/utils/types';

const ContactPage: NextPageWithLayout = () => {
  return <ContactUS />;
};

ContactPage.Layout = PublicLayout;

export default ContactPage;
