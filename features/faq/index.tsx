import Section from '@/components/section';
import { Collapse } from 'antd';
import { items } from './question';

type Props = {};

export default function FAQ({}: Props) {
  return (
    <Section
      title="Frequently Asked Questions"
      description="Have a question? We've got you covered. We've put together a selection of our most commonly asked questions to help you get answers fast. Have a question that you don't see answered here? Reach out to us and our 24/7 customer support team will help!"
    >
      <Collapse accordion items={items} expandIconPosition="end" size="large" />
    </Section>
  );
}
