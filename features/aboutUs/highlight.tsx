import Section from '@/components/section';
import { Col, Row } from 'antd';
import Image from 'next/image';
import { logoList } from './data';

type Props = {};

function Highlight({}: Props) {
  return (
    <Section
      title="150+ Different Digital Stores"
      description="ANT Music is partnered with 150 digital music services and counting, available across 200 countries and territories globally. Sell your music on every major digital store, like Youtube, Spotify, Apple Music, Deezer, Amazon, and more."
    >
      <Row gutter={[100, 50]}>
        {logoList.map((item) => (
          <Col key={item.id} xs={12} md={8} lg={4}>
            <Image className="h-full w-full" src={item.src} alt={item.alt} />
          </Col>
        ))}
      </Row>
    </Section>
  );
}

export default Highlight;
