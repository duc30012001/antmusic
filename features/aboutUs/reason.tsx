import image from '@/assets/producer.jpeg';
import Section from '@/components/section';
import Image from 'next/image';
import style from './aboutStyle.module.css';
import { reasonList } from './data';

type Props = {};

function WhyChoose({}: Props) {
  return (
    <Section className="">
      <div className="flex flex-col-reverse gap-10 lg:flex-row">
        <div>
          <h2 className="mb-10 text-center text-4xl font-bold lg:text-left">
            Why Choose{' '}
            <span className={style.highlightCompanyName}>ANT Music</span>
          </h2>
          <ul>
            {reasonList.map((item) => (
              <li key={item.id}>
                <h4 className="my-2 text-2xl font-semibold">{item.title}</h4>
                <p className="mb-10">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto w-80 flex-none lg:w-96">
          <Image src={image} alt="Producer" className="w-full" />
        </div>
      </div>
    </Section>
  );
}

export default WhyChoose;
