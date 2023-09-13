import Section from '@/components/section';
import { ANT_GROUP_WEBSITE } from '@/utils/constants';
import style from './aboutStyle.module.css';

type Props = {};

function About({}: Props) {
  return (
    <Section
      title={
        <span>
          About <span className={style.highlightCompanyName}>ANT Music</span>
        </span>
      }
    >
      <div className="m-auto w-full text-center text-lg lg:w-5/6">
        <p>
          ANT Music is owned by{' '}
          <a
            href={ANT_GROUP_WEBSITE}
            className="underline underline-offset-4"
            target="_blank"
          >
            ANT Group
          </a>
          . We are passionate about music and dedicated to empowering artists
          and creators to share their talent with the world. We understand that
          music is a universal language that connects people from all walks of
          life, and we are committed to providing a platform that amplifies your
          voice and reaches a global audience.
        </p>
        <p className="mt-5">
          Our mission at ANT Music is simple: to make music distribution easy,
          accessible, and profitable for independent artists, labels, and
          musicians of all genres. We believe that every artist deserves the
          opportunity to be heard and compensated fairly for their work. With
          ANT Music, you&apos;re not just distributing music; you&apos;re
          igniting your musical journey.
        </p>
      </div>
    </Section>
  );
}

export default About;
