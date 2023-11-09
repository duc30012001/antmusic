import About from './about';
import Highlight from './highlight';
import Introduce from './introduce';
import Reason from './reason';

type Props = {};

function AboutUs({}: Props) {
  return (
    <>
      <About />
      <Introduce />
      <Highlight />
      <Reason />
    </>
  );
}

export default AboutUs;
